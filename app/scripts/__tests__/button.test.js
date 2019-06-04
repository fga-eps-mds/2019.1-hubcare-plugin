import button from '../button';

test('test button function', async () => {
    let test_button = [
        '<style>',
        '#hubcare-button{ ',
        'border: 1px solid transparent; ',
        'border-radius: 3px 3px 0 0; ',
        'border-top: 3px solid transparent; ',
        'color: #586069; ',
        'float: left; ',
        'padding: 7px 15px 8px; ',
        'text-decoration: none; ',
        'white-space: nowrap;}',
        '#hubcare-button:hover{color:#24292e;  text-decoration:none;}',
        '#logo{ margin-right:5px; margin-left:-4px; margin-bottom: -3px;}',
        '</style>',
        '<div id="button" border: 1px solid transparent; ',
        'border-radius: 3px 3px 0 0; ',
        'border-top: 3px solid transparent; ',
        'color: #586069; ',
        'float: left; ',
        'padding: 7px 15px 8px; ',
        'white-space: nowrap; >',
        '<a id="hubcare-button" href="#hubcare" ',
        '> <svg width="14" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" id="logo">',
        '<path id="path-icon" fill-rule="evenodd" clip-rule="evenodd" d="M16 8C16 12.4183 12.4183 16 8 16C3.58172 16 0 12.4183 0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8ZM4.064 11.392H0.832L9.536 2.688V7.04001L5.63201 10.944H9.536V7.04001L13.888 2.68801V11.392H5.184L5.18401 11.392H4.064Z" fill="#B6B8BB"/>',
        '</svg>HubCare</a></div>',
    ].join('');

    expect(button()).toBe(test_button);
});
