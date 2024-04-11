import Service from '@ember/service';
import { highlight, snippet } from 'instantsearch.js/es/helpers';

export default class AisInstantSearch extends Service {
  highlight(hit, attribute) {
    const highlightedValue = highlight({
      attribute,
      hit,
      highlightProperty: '_highlightResult',
      preTag: '<mark>',
      postTag: '</mark>',
    });

    return highlightedValue;
  }

  snippet(hit, attribute) {
    const snippetedValue = snippet({
      attribute,
      hit,
      highlightProperty: '_snippetResult',
      preTag: '<mark>',
      postTag: '</mark>',
    });

    return snippetedValue;
  }
}
