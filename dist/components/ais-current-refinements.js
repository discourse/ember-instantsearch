import { currentRefinements } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisCurrentRefinements extends AisBaseWidget {
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {
        container: this.element
      };
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0);
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {
        includedAttributes: this.args.includedAttributes,
        excludedAttributes: this.args.excludedAttributes,
        cssClasses: this.args.cssClasses,
        transformItems: this.args.transformItems
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return currentRefinements(this.props);
  }
}

export { AisCurrentRefinements as default };
//# sourceMappingURL=ais-current-refinements.js.map
