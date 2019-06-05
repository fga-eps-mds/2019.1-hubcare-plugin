export default () => [
    '<style>',
    '.progress-bar{',
    '--progress: 50;',
    'height: 50px;',
    'background-color: red;',
    'display: flex; }',
    '.progress-bar::before{',
    'content: "";',
    'width: calc(var(--progress) * 1%);',
    'background-color: #00a000; }',
    '</style>',
    '<div class="progress-bar" ></div>',
].join(''); 