import { clearRefinements } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisClearRefinements extends AisBaseWidget {
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
        templates: this.args.templates,
        transformItems: this.args.transformItems
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return clearRefinements(this.props);
  }
}

export { AisClearRefinements as default };
//# sourceMappingURL=ais-clear-refinements.js.map
