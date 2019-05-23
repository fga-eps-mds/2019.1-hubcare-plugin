const contentscript = require('app/scripts/contentscript.js')

test1('hello moto', () => {
    it('should return the right value', () => {
        expect(contentscript.saveClass('repository-content')).toBe('HTML.collection[div.repository.content]')
    })
});
