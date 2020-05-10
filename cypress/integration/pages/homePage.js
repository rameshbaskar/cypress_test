import { fillTextAndSubmit } from '../utils/page';

export default class HomePage {
  constructor() {
    this.tbSearch = 'input[name="q"]';
  }

  search(text) {
    fillTextAndSubmit(this.tbSearch, text);
  }
}
