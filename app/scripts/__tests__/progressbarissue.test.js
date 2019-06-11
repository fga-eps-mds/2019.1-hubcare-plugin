import progressbarissue from '../progressbarissue.js';

test('test the progress bar issue', async () => {
    let teste_progressbarissue = [
    '<style>',
    '.progress-bar{',
    'width: 400px;',
    'height: 30px;',
    'background-color: #cb2431;',
    'display: flex;',
    'border-style: solid;',
    'border-color: black;',
    'border-width: 1px;',
    ' border-radius: 5px;}',
    '.progress-bar::before{',
    'content: "";',
    'width: calc(var(--progress) * 1%);',
    'background-color: #28a745; }',
    '</style>',
    '<div style="width:400px; height:75px;"><h1 style="text-align: center;">Issues</h1>',
    '<div id="bar"></div>',
    '<div class="progress-bar" ></div>',
    '</div>',
    ].join('');
    expect(progressbarissue()).toBe(teste_progressbarissue);
});