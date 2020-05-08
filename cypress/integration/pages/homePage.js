import { fillAndSubmit } from '../utils/commonFunctions';

export default class HomePage {
  constructor() {
    this.tbSearch = 'input[name="q"]';
  }

  search(text) {
    fillAndSubmit(this.tbSearch, text);
  }
}
