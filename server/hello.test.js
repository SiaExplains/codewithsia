const { hello } = require('./hello');

test('back-end hello test', () => {
    expect(hello).toBeDefined();
});

test('given siavash as name', () => {
    expect(hello('siavash')).toBe('Hello siavash');
});
