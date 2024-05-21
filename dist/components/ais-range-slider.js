import { rangeSlider } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisCurrentRefinements extends AisBaseWidget {
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {
        container: this.element,
        attribute: this.args.attribute
      };
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0);
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {
        min: this.args.min,
        max: this.args.max,
        precision: this.args.precision,
        step: this.args.step,
        pips: this.args.pips,
        tooltips: this.args.tooltips,
        cssClasses: this.args.cssClasses
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return rangeSlider(this.props);
  }
}

export { AisCurrentRefinements as default };
//# sourceMappingURL=ais-range-slider.js.map
