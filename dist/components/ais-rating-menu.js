import { ratingMenu } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisRatingMenu extends AisBaseWidget {
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
        max: this.args.max,
        templates: this.args.templates,
        cssClasses: this.args.cssClasses
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return ratingMenu(this.props);
  }
}

export { AisRatingMenu as default };
//# sourceMappingURL=ais-rating-menu.js.map
