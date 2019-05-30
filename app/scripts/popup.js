// import './contentscript.js';
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import button from './button.js';
import loading from './loading.js';


console.log(`'Allo 'Allo! Popup`)

// // Pure JS:
// document.addEventListener('DOMContentLoaded', function() {
//     document.getElementById("click-this").addEventListener("click", handler);
// });
  
// // The handler also must go in a .js file
// function handler() {
// /* ... */
//     console.log(`Test message for plug-in switch button`);
//     var loading_child = document.getElementById('loading');
//     //Removes the loading object after loading badges
//     loading_child.childNodes.remove(loading_child);
// }
var value = true;

document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('input[type="checkbox"]');

    checkbox.addEventListener('change', function () {
      if (checkbox.checked) {
          // do this
          console.log('Checked 1');
          value = true;
          chrome.storage.sync.set({"key":"value"}) 
          //function(){
              //console.log('value is set to ' + value);
              //alert('checked 3')
          //});
          console.log('Checked 2');
      } else {
          // do that
          console.log('Not checked 1');
          value = false;
          chrome.storage.sync.set({key: value}, function(){
            //console.log('value is set to ' + value);
            //alert('Not checked 3')
        });
          console.log('Not checked 2');
        }
    });
  });
