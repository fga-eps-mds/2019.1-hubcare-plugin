import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import button from './button.js';
import loading from './loading.js'

console.log(`'Allo 'Allo! Popup`)

// Pure JS:
document.addEventListener('DOMContentLoaded', function() {
    document.getElementById("click-this").addEventListener("click", handler);
});
  
// The handler also must go in a .js file
function handler() {
/* ... */
    console.log(`Test message for plug-in switch button`);
    //var loading_child = document.getElementById('loading');
    //Removes the loading object after loading badges
    //loading_child.parentNode.removeChild(loading_child);
}