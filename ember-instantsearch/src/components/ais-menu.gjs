import { menu } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisMenu extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
  };

  @tracked optionalProps = {
    limit: this.args.limit,
    showMore: this.args.showMore,
    showMoreLimit: this.args.showMoreLimit,
    sortBy: this.args.sortBy,
    templates: this.args.templates,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return menu(this.props);
  }
}
