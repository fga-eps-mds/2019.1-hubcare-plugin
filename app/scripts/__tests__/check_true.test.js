import checkTrue from '../check_true';

test('test button function', async () => {
    let testCheckTrue = [
        '<style>',
        '#check_true{width: 100px; display: block; margin: 10px auto 0;}',
        '</style>',
        '<div id="check_true">',
        '<svg width="auto" height="auto" viewBox="0 0 80 80" fill="none" ',
        'xmlns="http://www.w3.org/2000/svg"><circle cx="40" cy="40" ',
        'r="36.5" stroke="#28C51A" stroke-width="7"/><path d="M20.8 ',
        '40.8L38 57.6L61.2 24.8" stroke="#28C51A" stroke-width="7"/></svg>',
        '</div>',
    ].join('');

    expect(checkTrue()).toBe(testCheckTrue);
});
