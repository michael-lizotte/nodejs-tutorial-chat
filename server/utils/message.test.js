const expect = require('expect');

var { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('Should generate the correct message object', () => {
        const from = 'Mike';
        const text = "Hey, what's up?";
        const message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({
            from,
            text
        });
    });
});