import { highlight, snippet } from 'instantsearch.js/es/helpers';

export function highlightAttribute(hit, attribute) {
  const highlightedValue = highlight({
    attribute,
    hit,
    highlightProperty: '_highlightResult',
    preTag: '<mark>',
    postTag: '</mark>',
  });

  return highlightedValue;
}

export function snippetAttribute(hit, attribute) {
  const snippetedValue = snippet({
    attribute,
    hit,
    highlightProperty: '_snippetResult',
    preTag: '<mark>',
    postTag: '</mark>',
  });

  return snippetedValue;
}
