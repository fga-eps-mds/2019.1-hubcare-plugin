const $ = require('jquery');
import echarts from 'echarts/lib/echarts';
import 'echarts/lib/chart/line';
import 'echarts/lib/chart/pie';
import 'echarts/lib/component/tooltip';
import graph from './graphs.js';
import badges from './badges.js';
import badge from 'project-badge/dist/badge.js';
import button from './button.js';
import loading from './loading.js';
import progressbarissue from './progressbarissue.js';
import progressbarfunction from './progressbarfunction.js'
import check_true from './check_true.js';
import check_false from './check_false.js';
import hubcare from './hubcare';
import supportPage from './supportPage';
import checkTooltip from './checkTooltip';

const repoName = window.location.pathname;
let accessToken = null;

var content = saveClass("new-discussion-timeline experiment-repo-nav")
var repoContent = saveClass("repository-content")
var metrics = null
var popup_key = ""
let toolticText = {
    'release-note': '“Recent” mean a Release in the last 90 days',
    'license': 'The License must follows standart GitHub License file name',
    'readme': 'The README must follows standart GitHub Readme file name',
    'code-conduct': 'The Code of Conduct must follows standart GitHub file name for it',
    'issue-template': 'Issue Templates must be recognized bt GitHub as templates',
    'description': 'Description of this repository',
    'issue-activity-rate': 'An Active Issue is a Issue that got some activity in the last 15 days'
}

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
    let elementBadge = document.getElementById('my-badge');
    elementBadge.parentNode.removeChild(elementBadge)
    let elementBadge2 = document.getElementById('my-badge2');
    elementBadge2.parentNode.removeChild(elementBadge2)
    let elementBadge3 = document.getElementById('my-badge3');
    elementBadge3.parentNode.removeChild(elementBadge3)
}

function createCommitChart(){
    var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
    var repoContent = document.getElementsByClassName("repository-content")
    var node = document.createElement('div')
    node.innerHTML = graph()
    content[0].insertBefore(node, repoContent[0])
    var myChart = echarts.init(document.getElementById('my-graph'))
    var option = {
        tooltip: {
            trigger: 'axis',
        },
        xAxis: {
            type: 'category',
            data: metrics.commit_graph.x_axis
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: metrics.commit_graph.y_axis,
            type: 'line'
            
        }]
    }
    myChart.setOption(option)
}

/**
 * Create latel to pull request interaction graph
 */
const createLabel = (score) => {
    return {
        normal: {
        formatter: '{a|{b}}{abg|}\n{hr|}\n{b|Score:  ' + score + '}  {per|{d}%}  ',
        backgroundColor: '#eee',
        borderColor: '#aaa',
        borderWidth: 1,
        borderRadius: 4,
        rich: {
            a: {
                color: '#586069',
                lineHeight: 22,
                align: 'center',
                fontSize: 14,
                padding: 3
            },
            hr: {
                borderColor: '#aaa',
                width: '100%',
                borderWidth: 0.5,
                height: 0
            },
            b: {
                color: '#586069',
                fontSize: 14,
                lineHeight: 22,
                padding: 3
            },
            per: {
                color: '#eee',
                backgroundColor: '#334455',
                padding: [2, 4],
                borderRadius: 2,
                lineHeight: 22
            }
        }
    }
}
}

/**
 * Create pull request graph
 */
const createPullRequestChart = (data) => {
    var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
    var repoContent = document.getElementsByClassName("repository-content")
    var node = document.createElement('div')
    node.innerHTML = graph()
    content[0].insertBefore(node, repoContent[0])
    var myChart = echarts.init(document.getElementById('my-graph'))
    let option = {
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        series: [
            {
                name:'Pull Request Interaction',
                type:'pie',
                radius: ['0%', '55%'],
                color: ['#e9def5', '#e9d8ff', '#d2beeb', '#bb9ee1', '#a37fd7', '#8a61cc', '#6f42c1'],
                data:[
                    {value:data[0], name:'Old Open without comment', label:createLabel('0')},
                    {value:data[1], name:'Refused without comment', label:createLabel('0.1')},
                    {value:data[2], name:'Open with old comment', label:createLabel('0.3')},
                    {value:data[3], name:'Refused with comment', label:createLabel('0.7')},
                    {value:data[4], name:'Open with recent comment', label:createLabel('0.9')},
                    {value:data[5], name:'Merjed without comment', label:createLabel('0.9')},
                    {value:data[6], name:'Merjed with comment', label:createLabel('1')}
                ]
            }
        ]
    };
    myChart.setOption(option)
}

/**
 * Create check model for the report element.
 */
function createCheckModel(text, boolCheck, elementId){
    let element = document.getElementById(elementId);
    let node = document.createElement('div')
    let tooltip = document.createElement('div');
    tooltip.innerHTML = checkTooltip(text, toolticText[elementId]);
    if(boolCheck == true){
        node.innerHTML = check_true()
        element.appendChild(tooltip) 
        element.appendChild(node)
    } else {
        node.innerHTML = check_false()
        element.appendChild(tooltip) 
        element.appendChild(node)
    }
}

/**
 * Create tooltip with questionMark Icon for the report element
 */
function addTooltipImages(){
    var myImage = chrome.extension.getURL("../images/questionMark.svg")
    let node = document.getElementsByClassName('id_img_questionMark');
    for (let i = 0; i < node.length; i++) {
        node[i].src = myImage;
    }
}

/**
 * Remove activity indicator element
 */
const stopActivityIndicator = () => {
    let loading_child = document.getElementById('loading');
    loading_child.parentNode.removeChild(loading_child);
}

/**
 * Create activity indicator element.
 * Adding the loading div inside the
 * created div is being added
 */
const insertActivityIndicator = () => {
    let myprogress = document.createElement('div')
    myprogress.innerHTML = loading()
    content[0].insertBefore(myprogress, repoContent[0])
}

/**
 * Create badges in initial Github page
 * @param {json} data
 */
const insertBadges = (data) => {
    metrics = data;
 
    stopActivityIndicator()
    const node = document.createElement('div')
    node.innerHTML = badges()
    content[0].insertBefore(node, repoContent[0])
    createBadge("Active", data.indicators.active_indicator, 'my-badge')
    createBadge("Support", data.indicators.support_indicator, 'my-badge2')
    createBadge("Welcoming", data.indicators.welcoming_indicator, 'my-badge3')
}

/*
 * Creates the progress bar regarding issues
 */
const insertProgressBar = (activity, forgotten, element) => {
    //Calculate percentage bar
    let total = activity + forgotten;
    let activityPercent = (activity*100)/total;

    let issueprogressbar = document.createElement('div');
    issueprogressbar.innerHTML = progressbarissue(activity, forgotten, activityPercent, element);

    //Add div to the page main class 
    document.getElementById(element).appendChild(issueprogressbar)
}

/*
 * Create progress bar
 */
const ProgressBarFunction = (partial, full, text, element) => {
    //Calculate percentage bar
    let genericRate = (partial*100)/full;
    if(partial > full){
        genericRate = (full*100)/full;

    }
    

    let progressbar = document.createElement('div')
    progressbar.innerHTML = progressbarfunction(partial + " / " + full, text, genericRate, element, toolticText[element])

    //Add div to the page main class
    document.getElementById(element).appendChild(progressbar)
}

/**
 * Create hubcare button in repository nav
 */
const insertButton = () => {
    let hubcareButton = document.createElement('div')
    hubcareButton.innerHTML = button()
    document.getElementsByClassName('reponav js-repo-nav js-sidenav-container-pjax container')[0]
        .appendChild(hubcareButton)
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

/**
 * Stylize the HubCare button by clicking it leaving the same GitHub pattern
 */
const buttonOnClick = () => {
    $("#hubcare-button").on("click", function() {
        $(this).css("background", "#ffff");
        $(this).css("color", "#000000");
        $(this).css("border-left", "1px solid #e1e4e8");
        $(this).css("border-right", "1px solid #e1e4e8");
        $(this).css("border-top", "3px solid #4965d9");
        styleIcon();
        removeSelected();
    })
}

/**
 * Add Style to Hub Care Button Icon When Selected
 */
const styleIcon = () => {
    document.getElementById("path-icon").setAttribute("fill", "#000000")
}

/**
 * Removes the button that is selected along with the HubCare button
 */
const removeSelected = () =>{
    let a = document.getElementsByClassName("js-selected-navigation-item selected")[0]
    a.classList.remove("selected")
}

/**
 * Get access token to chrome storage and save in local variable
 */
const getAcessToken = () => {
    chrome.storage.sync.get('oauth2_token', function(res) {
        console.log('Settings retrieved', res.oauth2_token);
        if (res.oauth2_token != undefined){
            accessToken = res.oauth2_token;
            init();
        }
    });
}

/**
 * Init all plugin elements
 */
const init = () => {
    if(popup_key != false && accessToken != null){
        if(window.location.hash ==  '#hubcare'){
            hubcarePage()
        }
        insertActivityIndicator()
        insertButton()
        requestMetrics()
        buttonOnClick()
        document.getElementById('hubcare-button').addEventListener("click", function() {
            hubcarePage()
        }, false);
    }
}

/**
 * Init all plugin elements, but with no request
 */
const init_with_no_request = () => {
    if(popup_key != false && accessToken != null){
        if(window.location.hash ==  '#hubcare'){
            hubcarePage()
        }
        insertActivityIndicator()
        insertButton()
        insertBadges(metrics)
        buttonOnClick()

        document.getElementById('hubcare-button').addEventListener("click", function() {
            hubcarePage()
        }, false);
    }
}
const createSupportPage = () =>{
    document.getElementById('hubcare-content').innerHTML = supportPage();
    insertProgressBar(metrics.issue_metric.active_issues,metrics.issue_metric.dead_issues,'issue-activity');
    createCheckModel('Recent Release Note', metrics.community_metric.release_note, 'release-note')
    createCheckModel('Have a License', metrics.community_metric.license, 'license')
    createCheckModel('Have a README', metrics.community_metric.readme, 'readme')
    createCheckModel('Have a Code of Conduct', metrics.community_metric.code_of_conduct, 'code-conduct')
    createCheckModel('Have a Issue Template', metrics.community_metric.issue_template, 'issue-template')
    createCheckModel('Have a Description', metrics.community_metric.description, 'description')
    ProgressBarFunction(parseFloat(metrics.issue_metric.activity_rate), parseFloat(metrics.issue_metric.activity_max_rate),  "Issue Activity Rate to get a High Score", "issue-activity-rate")
    addTooltipImages();
}

const hubcarePage = () => {
    cleanPageContent()
    var content = document.getElementsByClassName("new-discussion-timeline experiment-repo-nav")
    var repoContent = document.getElementsByClassName("repository-content")
    var node = document.createElement('div')
    node.innerHTML = hubcare()
    content[0].appendChild(node)
    createBadge("Active", metrics.indicators.active_indicator, 'my-badge')
    createBadge("Support", metrics.indicators.support_indicator, 'my-badge2')
    createBadge("Welcoming", metrics.indicators.welcoming_indicator, 'my-badge3')
    let activeBadge = document.getElementById('my-badge');
    let supportBadge = document.getElementById('my-badge2');
    let welcomingBadge = document.getElementById('my-badge3');
    document.getElementById('hubcare-content').innerHTML = "<div>test1</div>"
    activeBadge.style.cursor = "default";
    supportBadge.style.cursor = "pointer";
    welcomingBadge.style.cursor = "pointer";
    document.getElementById('my-badge').addEventListener("click", function() {
        activeBadge.style.backgroundColor = "#fff";
        activeBadge.style.borderBottom = "0px";
        activeBadge.style.borderBottomRightRadius = "0px";
        activeBadge.style.cursor = "default";
        
        supportBadge.style.backgroundColor = "#f6f8fa"
        supportBadge.style.borderBottom = "1px solid #d1d5da"
        supportBadge.style.borderBottomLeftRadius = "5px"
        supportBadge.style.borderBottomRightRadius = "0px"
        supportBadge.style.cursor = "pointer";
        
        welcomingBadge.style.backgroundColor = "#f6f8fa";
        welcomingBadge.style.borderBottom = "1px solid #d1d5da";
        welcomingBadge.style.borderBottomLeftRadius = "0px"
        welcomingBadge.style.cursor = "pointer";
        
        document.getElementById('hubcare-content').innerHTML = "<div style='text-align: center;'>test1</div>"
    }, false);
    document.getElementById('my-badge2').addEventListener("click", function() {
        activeBadge.style.backgroundColor = "#f6f8fa";
        activeBadge.style.borderBottom = "1px solid #d1d5da";
        activeBadge.style.borderBottomRightRadius = "5px";
        activeBadge.style.cursor = "pointer";
        
        supportBadge.style.backgroundColor = "#fff"
        supportBadge.style.borderBottom = "0px"
        supportBadge.style.borderBottomLeftRadius = "0px"
        supportBadge.style.borderBottomRightRadius = "0px"
        supportBadge.style.cursor = "default";
        
        welcomingBadge.style.backgroundColor = "#f6f8fa";
        welcomingBadge.style.borderBottom = "1px solid #d1d5da";
        welcomingBadge.style.borderBottomLeftRadius = "5px";
        welcomingBadge.style.cursor = "pointer";
        
        createSupportPage();
        
    }, false);
    document.getElementById('my-badge3').addEventListener("click", function() {
        activeBadge.style.backgroundColor = "#f6f8fa";
        activeBadge.style.borderBottom = "1px solid #d1d5da";
        activeBadge.style.borderBottomRightRadius = "5px";
        activeBadge.style.cursor = "pointer";
        
        supportBadge.style.backgroundColor = "#f6f8fa";
        supportBadge.style.borderBottom = "1px solid #d1d5da";
        supportBadge.style.borderBottomLeftRadius = "0px";
        supportBadge.style.borderBottomRightRadius = "5px";
        supportBadge.style.cursor = "pointer"
        
        welcomingBadge.style.backgroundColor = "#fff";
        welcomingBadge.style.borderBottom = "0px";
        welcomingBadge.style.borderBottomLeftRadius = "0px";
        welcomingBadge.style.cursor = "default";
        
        document.getElementById('hubcare-content').innerHTML = "<div>test3</div>"
    }, false);
    // createCommitChart()
    // createPullRequestChart([423, 423, 543, 123, 234, 432, 324])
    //insertProgressBar(10,30,'container new-discussion-timeline experiment-repo-nav')
    // createCheckModel('Title', true)
    // ProgressBarFunction(2, 5, "Test text")
}


$(document).on('pjax:complete', () => {
    if(metrics.indicators.active_indicator == null){
        init()
    }
    else {
        init_with_no_request()
    }
})

chrome.storage.sync.get("active", function(res) {
    popup_key = res.active
    if(popup_key != false){
        getAcessToken()
    }
});
