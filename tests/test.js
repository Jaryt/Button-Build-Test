import { Selector } from 'testcafe';

fixture `index`
    .page `127.0.0.1:80`;

test('The button should add "hello world" to the page', async t => {
    await t
        .click('#testButton')
        .expect(Selector('#textHolder').innerText).eql('hello world!');
});