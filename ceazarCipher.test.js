let ceazarCipherEncrypt = require('./ceazarCipher');

test('encrypted',() => {
    expect(ceazarCipherEncrypt.ceazarCipherEncrypt('hello',1)).toBe('ifmmp');
});

test('encrypted',() => {
    expect(ceazarCipherEncrypt.ceazarCipherEncrypt('hello!',1)).toBe('ifmmp!');
});
test('encrypted',() => {
    expect(ceazarCipherEncrypt.ceazarCipherEncrypt('HELLO',2)).toBe('JGNNQ');
});

test('decrypted',() => {
    expect(ceazarCipherEncrypt.ceazarCipherDecrypt('jgnnq',2)).toBe('hello');
});
test('decrypted',() => {
    expect(ceazarCipherEncrypt.ceazarCipherDecrypt('JGNNQ',2)).toBe('HELLO');
});