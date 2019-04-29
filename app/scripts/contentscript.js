import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';

const http = new XMLHttpRequest()
const windowurl = window.location.pathname
// const url = 'https://hubcare-api.herokuapp.com/support_question/fga-eps-mds/2019.1-hubcare-api/'
const url = 'https://hubcare-api.herokuapp.com/support_question' + windowurl + '/' 
console.log("url = " + url)

console.log('my windowurl = ' + windowurl)

var node = document.createElement('div')
var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
var repoContent = document.getElementsByClassName("repository-content")

node.innerHTML = badges()
// node.innerHTML = graph()
content[0].insertBefore(node, repoContent[0])
// var myChart = echarts.init(document.getElementById('my-graph'))
// var option = {
//     xAxis: {
//         type: 'category',
//         data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
//     },
//     yAxis: {
//         type: 'value'
//     },
//     series: [{
//         data: [820, 932, 901, 934, 1290, 1330, 1320],
//         type: 'line'
//     }]
// }

window.addEventListener("load", function load(event){
    http.open('GET',url)
    http.send()
})

http.onloadend = ((e) => {
    var response = http.responseText
    console.log('My response = ' + response)
    var data = JSON.parse(response)
    var support_metric = data.support_metric * 100
    console.log("data = " + support_metric)
    createBadge("Support", support_metric, 'my-badge')
    createBadge("segunda", 75, 'my-badge2')
    createBadge("terceira", 75, 'my-badge3')
})

function createBadge (text, progress, id){
    var myBadge = new badge.Progress({
        text: text,
        progress: progress
    });
    document.getElementById(id).appendChild(myBadge.asDOMNode())
}

// myChart.setOption(option)

// var my_badge = document.getElementById('my-graph').appendChild(myBadge.asDOMNode())