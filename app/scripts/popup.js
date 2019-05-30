const client_id = ''
const url = `https://github.com/login/oauth/authorize?response_type=code&client_id=${client_id}&scope=repo`;

document.getElementById('login').addEventListener("click", function() {
    chrome.tabs.create({url: url});
}, false);

 // Read it using the storage API
 chrome.storage.sync.get('oauth2_token', function(res) {
    console.log('Settings retrieved', res.oauth2_token);
    if (res.oauth2_token != undefined){
        let loginButton = document.getElementById('login');
        loginButton.parentNode.removeChild(loginButton)
    }
});