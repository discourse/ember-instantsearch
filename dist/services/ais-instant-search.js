import Service from '@ember/service';
import { highlight, snippet } from 'instantsearch.js/es/helpers';

class AisInstantSearch extends Service {
  highlight(hit, attribute) {
    const highlightedValue = highlight({
      attribute,
      hit,
      highlightProperty: '_highlightResult',
      preTag: '<mark>',
      postTag: '</mark>'
    });
    return highlightedValue;
  }
  snippet(hit, attribute) {
    const snippetedValue = snippet({
      attribute,
      hit,
      highlightProperty: '_snippetResult',
      preTag: '<mark>',
      postTag: '</mark>'
    });
    return snippetedValue;
  }
}

export { AisInstantSearch as default };
//# sourceMappingURL=ais-instant-search.js.map
