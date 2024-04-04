const aes256 = require('aes256');
const fs = require('fs');

const PASSWORD = 'abcde123';
const INPUT_IMAGE = './KK_in.jpg';
const OUTPUT_IMAGE = './KK_enc.jpg';

const inputBuffer = fs.readFileSync(INPUT_IMAGE);
const outputBuffer = aes256.encrypt(PASSWORD, inputBuffer);

fs.writeFileSync(OUTPUT_IMAGE, outputBuffer);
