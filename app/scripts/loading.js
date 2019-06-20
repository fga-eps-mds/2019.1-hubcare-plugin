export default () => [
    '<div style="float: left; border: 4px solid rgba(0, 0, 0,.1); ',
    'margin: 0 auto; width: 30%; ',
    'border-left-color: #291E46; ',
    'justify-content: center; ',
    'align-items: center; ',
    'height: 30px; width: 30px; ',
    'border-radius: 50%; ',
    'animation: spin 1s linear infinite;" ',
    'id="loading"></div>',
    
    '<div style="text-align: left; padding-left: 4%; padding-top: 0.8%; color: #24292e; ',
    'font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol; ',
    'font-size: 14px; line-height: 1.5;" id="text">',
    '   <p>You were the first person to review this repository today! ',
    '       We&apos;re doing the math for you. It will take less than a minute.</p>',
    '</div>',
].join('');
