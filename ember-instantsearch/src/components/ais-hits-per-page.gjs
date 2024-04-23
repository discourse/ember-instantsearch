import { hitsPerPage } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisHitsPerPage extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    items: this.args.items,
  };

  @tracked optionalProps = {
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
  };

  createAlgoliaWidget() {
    return hitsPerPage(this.props);
  }
}
