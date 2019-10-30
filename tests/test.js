import { Selector } from 'testcafe';

fixture `index`
    .page `127.0.0.1:8080`;

test('Button Test', async t => {
    await t
        .click('#testButton')
        .expect(Selector('#textHolder').innerText).eql('hello world!');
});