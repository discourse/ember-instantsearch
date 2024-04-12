import { poweredBy } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisPoweredBy extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    theme: this.args.theme,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return poweredBy(this.props);
  }
}
