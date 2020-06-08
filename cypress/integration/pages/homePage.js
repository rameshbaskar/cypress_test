import Page from './page';

export default class HomePage extends Page {
  constructor() {
    super();

    // Elements
    this.tbSearch = 'input[name="q"]';
  }

  search(text) {
    this.log(`Search for text: ${text}`);
    this.typeIntoAndSubmit(this.tbSearch, text);
  }
}
