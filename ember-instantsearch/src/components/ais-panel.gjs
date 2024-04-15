import { panel } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisPanel extends AisBaseWidget {
  @tracked requiredProps = {};

  @tracked optionalProps = {
    hidden: this.args.hidden,
    collapsed: this.args.collapsed,
    templates: this.args.templates,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return panel(this.props);
  }
}
