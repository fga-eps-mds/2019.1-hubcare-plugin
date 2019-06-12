import progressbarissue from '../progressbarissue';

test('test the progress bar issue', async () => {
    let teste_progressbarissue = [
        '<style>',
        '   .progress-bar-{',
        '       width: 400px;',
        '       height: 30px;',
        '       background-color: #cb2431;',
        '       display: flex;',
        '       border-style: solid;',
        '       border-color: black;',
        '       border-width: 1px;',
        '       border-radius: 5px;',
        '   }',
        '   .progress-bar-::before{',
        '       content: "";',
        '       width: calc( * 1%);',
        '       background-color: #28a745;',
        '   }',
        '</style>',
    
        '<div style="width:400px; height:75px;">',
        '   <h1 style="text-align: center;">Issues</h1>',
        '   <div id="bar">',
        '       <TABLE BORDER=0>',
        '           <TR>',
        '               <TD WIDTH=100 style="font-size: 18px">',
        '               </TD>',  
        '               <TD ALIGN=MIDDLE WIDTH=200 style= "font-size: 20px"> Activity X Forgotten</TD>',
        '               <TD id="forg"ALIGN=RIGHT WIDTH=100 style="font-size: 18px">',
        '               </TD>',
        '           </TR>',
        '       </TABLE>',
        '   </div>',
        '   <div class="progress-bar-" ></div>',
        '</div>',
    ].join('');
    expect(progressbarissue()).toBe(teste_progressbarissue);
});