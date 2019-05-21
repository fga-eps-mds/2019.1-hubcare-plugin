export default () => [
'<style>',
'.tooltip {position: relative; display: inline-block;}',
'.tooltip .tooltiptext {visibility: hidden; width: 160px; background-color:rgb(41, 0, 102, 0.99);',
    'color: #fff; text-align: center; border-radius: 6px; padding: 5px 0; position:',
    'absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0;',
    'transition: opacity 0.3s;}',
'.tooltip .tooltiptext::after {position: absolute; -index: 1; bottom: 100%; left: 50%; margin-left: -60px;',
    'border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent;}',
'.tooltip:hover .tooltiptext {visibility: visible; opacity: 1;}',
'</style>',


'<div style="width: 100px; height: 100px; display: inline; padding-right: 5px" id="my-badge" class="tooltip">',
'<span class="tooltiptext">Percentage calculated based on the number of commits, the number of contributors, accepted PRs, and active issues of the last month. Also, if release notes exist.</span>',
'</div>',

'<div style="width: 100px; height: 100px; display: inline; padding-right: 5px" id="my-badge2" class="tooltip">',
'<span class="tooltiptext">Percentage calculated based on the checklist of the community profile, the number of contributors and accepted PRs and also based on tags, features, and labels for PRs and issues.</span>',
'</div>',

'<div style="width: 100px; height: 100px; display: inline; "id="my-badge3" class="tooltip">',
'<span class="tooltiptext">Percentage calculated based on the checklist of the community profile, the existence of release note as well and the number of active issues.</span>',
'</div>'
].join('');