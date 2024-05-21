import { panel } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisPanel extends AisBaseWidget {
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {};
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0);
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {
        hidden: this.args.hidden,
        collapsed: this.args.collapsed,
        templates: this.args.templates,
        cssClasses: this.args.cssClasses
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return panel(this.props);
  }
}

export { AisPanel as default };
//# sourceMappingURL=ais-panel.js.map
