import progressbarfunction from '../progressbarfunction.js';

test('test the progress bar function', async () => {
    let teste_progressbarfunction = [
        '<style>',
        '.progress-bar-function{',
            'height: 35px;',
            'background-color: #fff;',
            'display: flex;',
            'border: 1px solid black;',
            'border-radius: 11px;',
          '}',
          '.progress-bar-function::before{',
            'content: "";',
            'width: calc(var(--progressfunction) * 1%);',
            'background-color: #00a000;',
            'border-bottom-left-radius: 10px;',
            'border-top-left-radius: 10px;',
          '}',
        '</style>',
        '<div style="width:400px; height:20px;"><h1 style="text-align: center;"></h1>',
        '<div id="barfunction"></div>',
        '<div class="progress-bar-function" ></div>',
        '</div>',   
    ].join('');
    expect(progressbarfunction()).toBe(teste_progressbarfunction);
});