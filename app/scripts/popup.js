const client_id = ''
const url = `https://github.com/login/oauth/authorize?response_type=code&client_id=${client_id}&scope=repo`;

const getAuthorizeCode = () => {
    return fetch(url)
        .then(response => response.json())
        .catch(error=>console.error(error))
}

document.getElementById('login').addEventListener("click", function() {
    chrome.tabs.create({url: url});
}, false);
