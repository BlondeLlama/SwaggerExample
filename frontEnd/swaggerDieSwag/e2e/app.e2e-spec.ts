import { SwaggerDieSwagPage } from './app.po';

describe('swagger-die-swag App', function() {
  let page: SwaggerDieSwagPage;

  beforeEach(() => {
    page = new SwaggerDieSwagPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
