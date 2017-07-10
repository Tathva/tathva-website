import { TathvaPage } from './app.po';

describe('tathva App', () => {
  let page: TathvaPage;

  beforeEach(() => {
    page = new TathvaPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
