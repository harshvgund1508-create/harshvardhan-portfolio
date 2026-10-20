import { NextResponse } from "next/server";
import { PORTFOLIO_PROJECTS, Project, SOCIAL_LINKS } from "../../../data/portfolioData";


interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  homepage: string | null;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
  pushed_at: string;
  topics?: string[];
  open_issues_count: number;
}

function formatRepoTitle(name: string): string {
  return name
    .replace(/[-_]/g, " ")
    .replace(/\b\w/g, (char) => char.toUpperCase());
}

function inferCategory(repo: GitHubRepo): Project["category"] {
  const name = repo.name.toLowerCase();
  const desc = (repo.description || "").toLowerCase();
  const lang = (repo.language || "").toLowerCase();
  const topics = (repo.topics || []).map((t) => t.toLowerCase());

  if (name.includes("disaster") || name.includes("cyclone") || desc.includes("spatial") || desc.includes("gis")) {
    return "geospatial";
  }
  if (name.includes("fraud") || name.includes("phish") || name.includes("security") || desc.includes("threat") || desc.includes("trustlink")) {
    return "security";
  }
  if (name.includes("gate") || name.includes("agent") || name.includes("autopilot") || desc.includes("policy") || desc.includes("runtime")) {
    return "agentic";
  }
  if (name.includes("vision") || name.includes("road") || name.includes("distress") || name.includes("yolo") || name.includes("speech") || name.includes("audio")) {
    return "vision";
  }
  if (name.includes("gov") || name.includes("mahainnovate") || name.includes("procure") || desc.includes("hackathon") || name.includes("talentos")) {
    return "civic";
  }

  if (lang === "python") return "geospatial";
  return "civic";
}

export async function GET() {
  try {
    const res = await fetch(
      `https://api.github.com/users/${SOCIAL_LINKS.githubUsername}/repos?sort=updated&per_page=100`,
      {
        headers: {
          "User-Agent": "Harshvardhan-Portfolio-Sync",
          Accept: "application/vnd.github.v3+json",
        },
        next: { revalidate: 60 },
      }
    );

    if (!res.ok) {
      // If GitHub rate limits or fails, return static projects with fallback status
      return NextResponse.json({
        success: false,
        source: "static_cache",
        error: `GitHub API responded with status ${res.status}`,
        projects: PORTFOLIO_PROJECTS,
        lastSynced: new Date().toISOString(),
      });
    }

    const repos: GitHubRepo[] = await res.json();

    // Map through curated projects and enrich with live GitHub statistics
    const knownProjectIds = new Set<string>();
    const enrichedProjects: Project[] = PORTFOLIO_PROJECTS.map((project) => {
      // Match by repo name
      const matchedRepo = repos.find(
        (r) =>
          r.name.toLowerCase() === project.id.toLowerCase() ||
          r.name.toLowerCase() === project.title.toLowerCase().replace(/\s+/g, "-") ||
          (project.id === "mahainnovate" && r.name.toLowerCase() === "mahainnvate")
      );

      if (matchedRepo) {
        knownProjectIds.add(matchedRepo.name.toLowerCase());
        return {
          ...project,
          githubUrl: matchedRepo.html_url,
          liveDemoUrl: matchedRepo.homepage || project.liveDemoUrl,
          stars: matchedRepo.stargazers_count,
          forks: matchedRepo.forks_count,
          updatedAt: matchedRepo.pushed_at || matchedRepo.updated_at,
          isLiveGithubRepo: true,
        };
      }
      return project;
    });

    // Check for NEW repositories on GitHub that aren't in the static curated list
    const newlyAddedRepos: Project[] = repos
      .filter((repo) => !knownProjectIds.has(repo.name.toLowerCase()))
      .map((repo) => {
        const category = inferCategory(repo);
        const categoryLabels: Record<Project["category"], string> = {
          geospatial: "Disaster & Spatial AI",
          security: "Cybersecurity & Trust",
          civic: "GovTech & Civic Innovation",
          vision: "Vision & Speech AI",
          agentic: "Agentic Safety & Governance",
        };

        return {
          id: repo.name.toLowerCase(),
          title: formatRepoTitle(repo.name),
          tagline: repo.description || `Autonomous GitHub repository by Harshvardhan Gund`,
          category,
          categoryLabel: categoryLabels[category],
          trustTier: "OBSERVED & MODELLED" as const,
          metrics: [
            { label: "Language", value: repo.language || "TypeScript" },
            { label: "Stars", value: `${repo.stargazers_count}` },
            { label: "Forks", value: `${repo.forks_count}` },
            { label: "Issues", value: `${repo.open_issues_count}` },
          ],
          description:
            repo.description ||
            `Real-world software repository automatically synced from Harshvardhan Gund's GitHub (@${SOCIAL_LINKS.githubUsername}). Contains production-tested algorithms and documentation.`,
          problemStatement:
            "Live open-source project actively maintained and tracked via GitHub CI/CD.",
          keyInnovations: [
            `Live repository tracked on GitHub: ${repo.full_name}`,
            `Primary development stack: ${repo.language || "Polyglot"}`,
            `Auto-synchronized with portfolio on commit push`,
          ],
          techStack: [repo.language || "Code", "GitHub", "CI/CD"].filter(Boolean),
          liveStatus: "Active Prototype" as const,
          accentColor: "from-blue-600 to-indigo-600",
          architectureHighlights: [
            "GitHub Version Control & Automated Triggers",
            "Open Source Architecture & Documentation",
            "Continuous Integration & Quality Pipeline",
          ],
          githubUrl: repo.html_url,
          liveDemoUrl: repo.homepage || undefined,
          stars: repo.stargazers_count,
          forks: repo.forks_count,
          updatedAt: repo.pushed_at || repo.updated_at,
          isLiveGithubRepo: true,
        };
      });

    const allCombined = [...enrichedProjects, ...newlyAddedRepos];

    return NextResponse.json({
      success: true,
      source: "github_live_api",
      projects: allCombined,
      lastSynced: new Date().toISOString(),
      totalRepos: repos.length,
      syncedUser: SOCIAL_LINKS.githubUsername,
    });
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : String(err);
    return NextResponse.json({
      success: false,
      source: "error_fallback",
      error: errorMsg,
      projects: PORTFOLIO_PROJECTS,
      lastSynced: new Date().toISOString(),
    });
  }
}
