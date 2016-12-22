import { ContractPage } from './contract.po';
import { Http } from '@angular/Http';

describe('contract valid', function() {
  let page: ContractPage;

  beforeEach(() => {
    page = new ContractPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getText()).toEqual('app works!');
  });
});
