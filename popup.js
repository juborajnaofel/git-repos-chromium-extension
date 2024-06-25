document.addEventListener('DOMContentLoaded', function () {
    const repoList = document.getElementById('repoList');
  
    // Load and display the stored GitHub repository links
    chrome.storage.local.get({ repoLinks: [] }, function (result) {
      const repoLinks = result.repoLinks;
      repoLinks.forEach(function (url) {
        const li = document.createElement('li');
        li.textContent = url;
        repoList.appendChild(li);
      });
    });
  
    // Add a new GitHub repository link
    document.getElementById('addLinkButton').addEventListener('click', function () {
      const newLink = document.getElementById('newLink').value;
      chrome.storage.local.get({ repoLinks: [] }, function (result) {
        let repoLinks = result.repoLinks;
        if (!repoLinks.includes(newLink)) {
          repoLinks.push(newLink);
          chrome.storage.local.set({ repoLinks: repoLinks }, function () {
            const li = document.createElement('li');
            li.textContent = newLink;
            repoList.appendChild(li);
          });
        }
      });
    });
  });
  