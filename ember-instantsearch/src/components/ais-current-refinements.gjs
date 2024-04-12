import { currentRefinements } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisCurrentRefinements extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    includedAttributes: this.args.includedAttributes,
    excludedAttributes: this.args.excludedAttributes,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return currentRefinements(this.props);
  }
}
