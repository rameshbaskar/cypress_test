import * as page from "./page";

// Elements
const tbSearch = "input[name='q']";

// Functions
export function search(text) {
  page.typeIntoAndSubmit(tbSearch, text);
}

export function verifySearch(text) {
  page.shouldHaveContent(text);
}