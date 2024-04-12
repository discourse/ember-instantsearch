import { stats } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisStats extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return stats(this.props);
  }
}
