// Add a GitHub repository link to storage
function addGitHubRepoLink(url) {
    chrome.storage.local.get({ repoLinks: [] }, function (result) {
      let repoLinks = result.repoLinks;
      if (!repoLinks.includes(url)) {
        repoLinks.push(url);
        chrome.storage.local.set({ repoLinks: repoLinks }, function () {
          console.log('GitHub repository link added:', url);
        });
      }
    });
  }
  
  chrome.runtime.onMessage.addListener(function (request, sender, sendResponse) {
    if (request.action === 'addLink' && request.url) {
      addGitHubRepoLink(request.url);
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'icon.png',
        title: 'Github repo collected',
        message: request.url
      });
    }
  });


  // chrome.action.onClicked.addListener((tab) => {
  //   console.log('Extension icon clicked');
  //   chrome.action.setPopup({ popup: "popup.html" });
  // });
  
  