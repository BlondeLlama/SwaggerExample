import { browser, element, by } from 'protractor';

export class ContractPage {

  navigateTo() {
    return browser.get('http://localhost:16938/swagger/v1/swagger.json');
  }

  getText() {
    return element(by.css('pre')).getText();
  }
}