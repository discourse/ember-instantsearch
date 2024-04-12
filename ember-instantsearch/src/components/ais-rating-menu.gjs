import { ratingMenu } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisRatingMenu extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
  };

  @tracked optionalProps = {
    max: this.args.max,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return ratingMenu(this.props);
  }
}
