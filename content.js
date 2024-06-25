// content.js
function convertToSSH(url) {
  const match = url.match(/^https:\/\/github\.com\/([^\/]+)\/([^\/]+)\/?$/);
  if (match) {
    const username = match[1];
    const repo = match[2];
    return `git@github.com:${username}/${repo}.git`;
  }
  return null;
}

function isGitHubRepositoryLink(url) {
    const githubRepoPattern = /^https:\/\/github\.com\/[^\/]+\/[^\/]+\/?$/;
    return githubRepoPattern.test(url);
  }
  
  if (isGitHubRepositoryLink(window.location.href)) {
    chrome.runtime.sendMessage({ action: 'addLink', url: 'git clone '+convertToSSH(window.location.href) });
  }
  