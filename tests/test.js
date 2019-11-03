import { Selector } from 'testcafe';

fixture `index`
    .page `127.0.0.1:8080`;

test('The button should add "Hi CircleCI!" to the page', async t => {
    await t
        .click('#testButton')
        .expect(Selector('#textHolder').innerText).eql('Hi CircleCI!');
});