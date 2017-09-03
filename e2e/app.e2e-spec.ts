import { Nglearn3Page } from './app.po';

describe('nglearn3 App', () => {
  let page: Nglearn3Page;

  beforeEach(() => {
    page = new Nglearn3Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
