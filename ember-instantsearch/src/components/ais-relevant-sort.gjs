import { relevantSort } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisRelevantSort extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    templates: this.args.templates,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return relevantSort(this.props);
  }
}
