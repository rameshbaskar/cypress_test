import * as page from "./page";

// Elements
const tbSearch = "input[name='q']";

// Functions
export const search = (text) => {
  page.typeIntoAndSubmit(tbSearch, text);
};

export const verifySearch = (text) => {
  page.shouldHaveContent(text);
};