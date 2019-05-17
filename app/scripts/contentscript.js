import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import login from './loding.js';


const http = new XMLHttpRequest()
const windowurl = window.location.pathname
const url = 'https://hubcare.ml/hubcare_indicators' + windowurl + '/' 
console.log("url = " + url)
console.log('my windowurl = ' + windowurl)

var myprogress = document.createElement('div')
var node = document.createElement('div')
var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
var repoContent = document.getElementsByClassName("repository-content")

var myloding = document.getElementById('my-loding')

node.innerHTML = badges()
myprogress.innerHTML = <img src = "images/loding.gif"></img>

// node.innerHTML = graph()
content[0].insertBefore(node, repoContent[0])
content[0].insertBefore(myprogress, repoContent[0])
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
    var data = JSON.parse(response)[0]
    createBadge("Active", data.active_indicator, 'my-badge')
    createBadge("Support", data.support_indicator, 'my-badge2')
    createBadge("Welcoming", data.welcoming_indicator, 'my-badge3')
    document.getElementById('my-loding').appendChild(myBadge.asDOMNode())
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