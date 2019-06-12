import checkTooltip from '../checkTooltip';

test('test checkTooltip function', async () => {
    let tooltip = [
        '<style>',
    '   .question_tooltip {position: relative; display: inline-block;}',
    '   .question_tooltip .question_tooltiptext {visibility: hidden; width: 120px; background-color: #555; color: #fff; text-align: center;',
    '       border-radius: 6px; padding: 5px; padding-left: 3px; padding-right: 3px; position: absolute; z-index: 1; bottom: 200%; left: 50%;',
    '       margin-left: -100px; opacity: 0; transition: opacity 0.3s;}',
    '   .question_tooltip .question_tooltiptext::after {content: ""; position: absolute; top: 100%; left: 85%; margin-left: -5px;', 
    '       border-width: 5px; border-style: solid; border-color: #555 transparent transparent transparent; }',
    '   .question_tooltip:hover .question_tooltiptext {visibility: visible; opacity: 0.8;}',
    '</style>',
    '<div style="text-align: center">',
    '   <h2 style="display:inline; text-align: center; font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;">',
    '   </h2>',
    '   <div style="display: inline;" id="question_mark" class="question_tooltip">',
    '      <img class="id_img_questionMark">',
    '      <span class="question_tooltiptext"></span>',
    '   </div>',
    '<div>',
    ].join('');
    expect(checkTooltip()).toBe(tooltip);
})
