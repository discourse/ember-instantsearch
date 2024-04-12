import { numericMenu } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisNumericMenu extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
    items: this.args.items,
  };

  @tracked optionalProps = {
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return numericMenu(this.props);
  }
}
