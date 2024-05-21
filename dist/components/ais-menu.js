import { menu } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisMenu extends AisBaseWidget {
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
        limit: this.args.limit,
        showMore: this.args.showMore,
        showMoreLimit: this.args.showMoreLimit,
        sortBy: this.args.sortBy,
        templates: this.args.templates,
        cssClasses: this.args.cssClasses,
        transformItems: this.args.transformItems
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return menu(this.props);
  }
}

export { AisMenu as default };
//# sourceMappingURL=ais-menu.js.map
