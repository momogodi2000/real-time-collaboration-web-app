import { Octokit } from "@octokit/rest";

const octokit = new Octokit({
    auth: process.env.GITHUB_TOKEN, // GitHub personal access token
});

export async function getRepositories() {
    const { data } = await octokit.repos.listForAuthenticatedUser();
    return data;
}

export async function getIssues(owner, repo) {
    const { data } = await octokit.issues.listForRepo({ owner, repo });
    return data;
}

export async function createIssue(owner, repo, title, body) {
    const { data } = await octokit.issues.create({ owner, repo, title, body });
    return data;
}

// Add more GitHub API interactions as needed
