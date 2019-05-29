const client_id = ''
const client_secret = ''

const getLoginUrl = (code) =>
    `https://github.com/login/oauth/access_token?client_id=${client_id}&client_secret=${client_secret}&code=${code}`;

const saveAcessToken = (token) => {}

const getAcessToken = (code) => {
    fetch(getLoginUrl(code), {
        method: 'POST',
        headers: {
            'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
            'Content-Type': 'application/json; charset=utf-8'
        },
    })
        .then(response => response.json())
        .then(obj => console.log(obj))
        .catch(error=>console.error(error))
    }

const init = () => {
    if(location.search.match(/\?code=([\w\/\-]+)/)){
        let code = location.search.match(/\?code=([\w\/\-]+)/)[1]
        console.log(code)
        getAcessToken(code)
    }
}

init()