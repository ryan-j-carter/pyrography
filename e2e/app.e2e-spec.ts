import { PyrographyPage } from './app.po';

describe('pyrography App', () => {
  let page: PyrographyPage;

  beforeEach(() => {
    page = new PyrographyPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
