import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badge.js

const http = new XMLHttpRequest()
const url = 'https://reqres.in/api/user?page=2'

const windowurl = window.location.pathname
console.log('my windowurl = ' + windowurl)

window.addEventListener("load", function load(event){
    http.open('GET',url)
    http.send()
}) 

http.onloadend = ((e) => {
    console.log('My response = ' + http.responseText)
})

var node = document.createElement('div')
var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
var repoContent = document.getElementsByClassName("repository-content")

node.innerHTML = graph()
content[0].insertBefore(node, repoContent[0])
var myChart = echarts.init(document.getElementById('my-badge'))
var option = {
    xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    },
    yAxis: {
        type: 'value'
    },
    series: [{
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line'
    }]
}
myChart.setOption(option)


