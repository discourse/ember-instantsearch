import { clearRefinements } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisClearRefinements extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    includedAttributes: this.args.includedAttributes,
    excludedAttributes: this.args.excludedAttributes,
    cssClasses: this.args.cssClasses,
    templates: this.args.templates,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return clearRefinements(this.props);
  }
}
