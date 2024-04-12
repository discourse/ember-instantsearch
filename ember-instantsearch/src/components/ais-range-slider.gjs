import { rangeSlider } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisCurrentRefinements extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
    attribute: this.args.attribute,
  };

  @tracked optionalProps = {
    min: this.args.min,
    max: this.args.max,
    precision: this.args.precision,
    step: this.args.step,
    pips: this.args.pips,
    tooltips: this.args.tooltips,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return rangeSlider(this.props);
  }
}
