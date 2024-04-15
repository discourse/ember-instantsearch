import { hits } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisHits extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    escapeHTML: this.args.escapeHTML,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
    templates: this.args.templates,
  };

  createAlgoliaWidget() {
    console.log(this.optionalProps.templates);
    return hits(this.props);
  }
}
