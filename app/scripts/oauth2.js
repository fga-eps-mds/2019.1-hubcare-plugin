import constants from './constants'

/**
 * Return Github url to get user access token
 * @param {string} code
 */
const getLoginUrl = (code) =>
    `https://github.com/login/oauth/access_token?client_id=${constants.CLIENT_ID}&client_secret=${constants.CLIENT_SECRET}&code=${code}`;

/**
 * Save user access token in chrome local storage
 * @param {string} token
 */
const saveAcessToken = (token) => {
    chrome.storage.sync.set({'oauth2_token': token.access_token}, function() {
        console.log('Token saved');
    });
}

/**
 * Post code to Github to response access token
 * @param {*} code
 */
const getAcessToken = (code) => {
    fetch(getLoginUrl(code), {
        method: 'POST',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
        .then(response => response.json())
        .then(obj => saveAcessToken(obj))
        .catch(error=>console.error(error))
    }

const init = () => {
    if(location.search.match(/\?code=([\w\/\-]+)/)){
        let code = location.search.match(/\?code=([\w\/\-]+)/)[1]
        getAcessToken(code)
    }
}

init()
