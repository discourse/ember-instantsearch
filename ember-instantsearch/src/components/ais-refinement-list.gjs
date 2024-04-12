import { refinementList } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';

export default class AisRefinementList extends AisBaseWidget {
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

  <template>
    <div {{didInsert this.createWidget}}>
      <p>Refinement List</p>
    </div>
  </template>
}
