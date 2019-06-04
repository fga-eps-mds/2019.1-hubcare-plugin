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
    
    '<div id="tooltip" class="tooltip">',
    '<span class="tooltiptext">THIS IS THE TOOLTIP.</span>',
    '</div>',
].join('');