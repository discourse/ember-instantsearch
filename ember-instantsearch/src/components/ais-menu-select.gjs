import { menuSelect } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisMenuSelect extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
  };

  @tracked optionalProps = {
    limit: this.args.limit,
    sortBy: this.args.sortBy,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return menuSelect(this.props);
  }
}
