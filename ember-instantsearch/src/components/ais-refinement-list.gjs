import { refinementList } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisRefinementList extends AisBaseWidget {
  // In order to display attributes to refine, you must
  // add facets for attribution in the Algolia dashboard
  // Please see: https://www.algolia.com/doc/guides/building-search-ui/ui-and-ux-patterns/facet-display/js/
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
  };

  @tracked optionalProps = {
    operator: this.args.operator,
    limit: this.args.limit,
    showMore: this.args.showMore,
    showMoreLimit: this.args.showMoreLimit,
    searchable: this.args.searchable,
    searchablePlaceholder: this.args.searchablePlaceholder,
    searchableIsAlwaysActive: this.args.searchableIsAlwaysActive,
    searchableEscapeFacetValues: this.args.searchableEscapeFacetValues,
    sortBy: this.args.sortBy,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return refinementList(this.props);
  }
}
