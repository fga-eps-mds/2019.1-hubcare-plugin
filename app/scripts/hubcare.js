export default () => [
    '<style>',
    '.tooltip {position: relative; display: inline-block;}',
    '.tooltip .tooltiptext {visibility: hidden; width: 200px; background-color:rgb(41, 0, 102, 0.99);',
        'color: #fff; text-align: center; border-radius: 6px; padding: 5px 0; position:',
        'absolute; z-index: 1; bottom: 125%; left: 50%; margin-left: -60px; opacity: 0;',
        'transition: opacity 0.3s;}',
    '.tooltip .tooltiptext::after {position: absolute; -index: 1; bottom: 100%; left: 50%; margin-left: -60px;',
        'border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent;}',
    '.tooltip:hover .tooltiptext {visibility: visible; opacity: 1;}',
    '</style>',

    '<div id="hubcare-page"',
        'style="margin-left: auto;margin-right: auto; width: 980px;',
        'background-color: #fff; border: 1px solid #d1d5da; border-radius: 3px;',
        'line-height: 1.25;">',
        '<div>',
            '<div style="text-align:center; width: 33%; padding-right: 5px;',
                'border: 1px solid #d1d5da; border-top-left-radius: 3px;',
                'border-top-right-radius: 3px; margin: -1px -1px 0; padding: 16px;',
                'border-bottom: 0px;" id="my-badge" class="tooltip">',
                '<span class="tooltiptext">Percentage calculated based on the number of commits, the number of contributors, event involving PRs, and active issues of the last month. Also, if release notes exist and are recent enough.</span>',
            '</div>',

            '<div style="text-align:center; width: 33%; padding-right: 5px;',
                'background-color: #f6f8fa; border: 1px solid #d1d5da;',
                'border-top-left-radius: 3px; border-top-right-radius: 3px;',
                'margin: -1px -1px 0; padding: 16px; 3px; border-bottom-left-radius: 5px;"',
                'id="my-badge2" class="tooltip">',
                '<span class="tooltiptext">Percentage calculated based on the checklist of the community profile, the number of contributors, events involving PRs and their features, and issues` labels(´Good-First-Issue` and ´Help-Wanted`) and feature.</span>',
            '</div>',

            '<div style="text-align:center; width: 34.61%; padding-right: 5px;',
                'background-color: #f6f8fa; border: 1px solid #d1d5da;',
                'border-top-left-radius: 3px; border-top-right-radius: 3px;',
                'margin: -1px -1px 0; padding: 16px;"id="my-badge3" class="tooltip">',
                '<span class="tooltiptext">Percentage calculated based on the checklist of the community profile, the existence of release note and if is recent enough as well and the number of active issues.</span>',
            '</div>',
        '</div>',
        '<div id="hubcare-content">',
        '</div>',
    '</div>',
].join(''); 

