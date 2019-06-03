import constants from './constants'

const url = `https://github.com/login/oauth/authorize?response_type=code&client_id=${constants.CLIENT_ID}&scope=repo`;

document.getElementById('login').addEventListener("click", function() {
    chrome.tabs.create({url: url});
}, false);

document.getElementById('logout').addEventListener('click', function() {
  chrome.storage.sync.set({'oauth2_token': null}, function() {
    console.log('Token removed');
  });
  window.close();
});

 // Read it using the storage API
 chrome.storage.sync.get('oauth2_token', function(res) {
    console.log('Settings retrieved', res.oauth2_token);
    if (res.oauth2_token != undefined){
        let loginButton = document.getElementById('login');
        loginButton.parentNode.removeChild(loginButton);
    }
    else {
      let logoutButton = document.getElementById('logout');
      logoutButton.parentNode.removeChild(logoutButton);
      let toggleButton = document.getElementById('toggle-button');
      toggleButton.parentNode.removeChild(toggleButton);
    }
});

chrome.storage.sync.get("active", function(res) {
  if(res.active == false){
    document.getElementById('click-this').checked = res.active;
  }
  else {
    document.getElementById('click-this').checked = true;
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      chrome.storage.sync.set({"active":true});
    } 
    else {
      chrome.storage.sync.set({"active":false}) ;
    }
  });
});
