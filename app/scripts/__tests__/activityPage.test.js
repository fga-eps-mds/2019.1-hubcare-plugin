import activityPage from '../activityPage'

test('test activity page', () => {
    let TestActivityPage = [
        '<style>',
        '.commit-element{',
        '   height:520px;',
        '   width: 50%;',
        '   float: left;',
        '   padding: 8px;',
        '   border-right: 1px solid #d1d5da;',
        '   }',
        '.contributors-element{',
        '   height:205px;',
        '   width: 50%;',
        '   display: inline-block;',
        '   padding: 8px;',
        '}',
        '.issue-element{',
        '   height:315px;',
        '   width: 50%;',
        '   display: inline-block;',
        '   padding: 8px;',
        '   border-top: 1px solid #d1d5da;',
        '}',
        '.issue-activity{',
        '   height: 120px;',
        '   margin-left: 10%;',
        '   margin-top: 5%;',
        '}',
        '.pr-bar{',
        '   width: 50%;',
        '   margin-left: 30%;',
        '   margin-right: 30%;',
        '   margin-bottom: 3%;',
        '}',
        '.footer-element{',
        '   height: 200px;',
        '   padding-top: 30px;',
        '   padding-right: 30px;',
        '   padding-bottom: 50px;',
        '   padding-left: 80px;',
        '   border-top: 1px solid #d1d5da;',
        '}',
        '</style>',
        '<div class="commit-element">',
        '   <div id="commit-graph"><h1 style="text-align:left; font-size: 20px; display: inline; margin-left: 12%;">Commit History</h1></div>',
        '   <div id="commit-highs" style="margin-left: 8%;"></div>',
        '</div>',
        '<div class="contributors-element">',
        '   <div id="different-contributors" style="margin-left: 8%; margin-top: 10%; margin-bottom: 10%;"></div>',
        '</div>',
        '<div class="issue-element">',
        '   <div id="issue-activity" class="issue-activity"></div>',
        '   <div id="issue-activity-rate" class="issue-activity"></div>',
        '</div>',
        '<div id="pr-element" style="border-top: 1px solid #d1d5da;">',
        '   <div id="pull-request-graph" style="padding-top: 20px; margin-right: 13%; margin-left: 23%;"></div>',
        '   <div id="pull-request-quality" class="pr-bar"></div>',
        '</div>',
        '<div id="release-note" class="footer-element"></div>',
    ].join('');
    expect(activityPage()).toBe(TestActivityPage);
})