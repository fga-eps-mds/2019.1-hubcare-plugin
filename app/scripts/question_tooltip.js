export default () => [
    '<style>',
    '.question_tooltip {position: relative; display: inline-block;}',
    '.question_tooltip .question_tooltiptext {visibility: hidden; width: 200px; background-color:rgb(69, 69, 69, 0.99);',
    'color: #fff; text-align: center; border-radius: 6px; padding: 5px 0; position:',
    'absolute; z-index: 1; bottom: 200%; left: -30%; margin-left: -60px; opacity: 0;',
    'transition: opacity 0.3s;}',
    '.question_tooltip .question_tooltiptext::after {position: relative; -index: 1; bottom: 100%; left: 50%; margin-left: -60px;',
    'border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent;}',
    '.question_tooltip:hover .question_tooltiptext {visibility: visible; opacity: 1;}',
    '</style>',

    '<div style="width: 100px; height: 100px; display: inline; padding-left: 85px;" id="question_mark" class="question_tooltip">',
    '<img id="id_img_questionMark">',
    '<span id="span_question_mark" class="question_tooltiptext"></span>',
    '</div>'
].join('');