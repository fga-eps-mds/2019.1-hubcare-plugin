import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import button from './button.js';
import loading from './loading.js';

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
        // loginButton.parentNode.removeChild(loginButton)
    }
});

var value = true;

chrome.storage.sync.get("active", function(res) {
  if(res.active == false){
    document.getElementById('click-this').checked = res.active
  }
  else{
    document.getElementById('click-this').checked = true
  }
});

document.addEventListener('DOMContentLoaded', function () {
  var checkbox = document.querySelector('input[type="checkbox"]');
  checkbox.addEventListener('change', function () {
    if (checkbox.checked) {
      value = true;
      chrome.storage.sync.set({"active":true})
    } 
    else {
      value = false;
      chrome.storage.sync.set({"active":false}) 
    }
  });
});
