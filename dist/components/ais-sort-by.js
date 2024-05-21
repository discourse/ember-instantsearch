import { sortBy } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisSortBy extends AisBaseWidget {
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {
        container: this.element,
        items: this.args.items
      };
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0);
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {
        cssClasses: this.args.cssClasses,
        transformItems: this.args.transformItems
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return sortBy(this.props);
  }
}

export { AisSortBy as default };
//# sourceMappingURL=ais-sort-by.js.map
