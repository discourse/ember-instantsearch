import { refinementList } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisRefinementList extends AisBaseWidget {
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {
        container: this.element,
        attribute: this.args.attribute
      };
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0); // In order to display attributes to refine, you must
  // add facets for attribution in the Algolia dashboard
  // Please see: https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js/
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {
        operator: this.args.operator,
        limit: this.args.limit,
        showMore: this.args.showMore,
        showMoreLimit: this.args.showMoreLimit,
        searchable: this.args.searchable,
        searchablePlaceholder: this.args.searchablePlaceholder,
        searchableIsAlwaysActive: this.args.searchableIsAlwaysActive,
        searchableEscapeFacetValues: this.args.searchableEscapeFacetValues,
        sortBy: this.args.sortBy,
        templates: this.args.templates,
        cssClasses: this.args.cssClasses,
        transformItems: this.args.transformItems
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return refinementList(this.props);
  }
}

export { AisRefinementList as default };
//# sourceMappingURL=ais-refinement-list.js.map
