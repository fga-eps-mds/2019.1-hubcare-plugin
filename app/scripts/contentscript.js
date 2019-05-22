import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import button from './button.js';
import loading from './loading.js';

const repoName = window.location.pathname

//This var create a span
var hubcareButton = document.createElement('div')
//This var create a div
var myprogress = document.createElement('div')
var node = document.createElement('div')
var content = saveClass("new-discussion-timeline experiment-repo-nav")
var repoContent = saveClass("repository-content")
var reponav = saveClass('reponav js-repo-nav js-sidenav-container-pjax container zh-attached')
var repoProjects = saveClass('js-selected-navigation-item reponav-item')

node.innerHTML = badges()
hubcareButton.innerHTML = button()
//Adding the loading div inside the created div is being added
myprogress.innerHTML = loading()
// node.innerHTML = graph()
content[0].insertBefore(node, repoContent[0])
content[0].insertBefore(myprogress, repoContent[0])
reponav[0].appendChild(hubcareButton)
//content[0].insertBefore(hubcareButton, repoContent[0])

/**
 * Return url to hubcare api
 * @param {string} repoName 
 */
const getApiUrl = (repoName) =>
    `https://hubcare.ml/hubcare_indicators${repoName}/`;

function createBadge(text, progress, id){
    var myBadge = new badge.Progress({
        text: text,
        progress: progress
    });
    document.getElementById(id).appendChild(myBadge.asDOMNode())
}

function saveClass(name_class){
    var element = document.getElementsByClassName(name_class)
    return element
}

function cleanPageContent(){
    var element = document.getElementsByClassName('repository-content ')
    element[0].parentNode.removeChild(element[0])
}

function createCommitChart(){
    var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
    var repoContent = document.getElementsByClassName("repository-content")
    var node = document.createElement('div')
    node.innerHTML = graph()
    content[0].insertBefore(node, repoContent[0])
    var myChart = echarts.init(document.getElementById('my-graph'))
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
}

/**
 * Remove activity indicator element
 */
const stopActivityIndicator = () => {
    let loading_child = document.getElementById('loading');
    loading_child.parentNode.removeChild(loading_child);
}

/**
 * Create badges in initial Github page
 * @param {json} data
 */
const insertBadges = (data) => {
    stopActivityIndicator()
    createBadge("Active", data.active_indicator, 'my-badge')
    createBadge("Support", data.support_indicator, 'my-badge2')
    createBadge("Welcoming", data.welcoming_indicator, 'my-badge3')
}

/**
 * Request metrics and indicators to hubcare api
 */
const requestMetrics = () => {
    const url = getApiUrl(repoName)
    return fetch(url)
        .then(response => response.json())
        .then(obj => insertBadges(obj[0]))
        .catch(error=>console.error(error))
}

console.log(requestMetrics())