import { Selector } from 'testcafe';

fixture `funktio pienin`
    .page `../tehtava.html`;

test('Tulostetaan vaadittu teksti', async t => {
   const teksti = Selector("#teksti");

   await t
     .expect(teksti.textContent).match(/pienin\s*luku:\s*2/,'');
});
