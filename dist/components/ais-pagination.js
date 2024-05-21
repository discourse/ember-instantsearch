import { pagination } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisPagination extends AisBaseWidget {
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
        showFirst: this.args.showFirst,
        showPrevious: this.args.showPrevious,
        showNext: this.args.showNext,
        showLast: this.args.showLast,
        padding: this.args.padding,
        totalPages: this.args.totalPages,
        scrollTo: this.args.scrollTo,
        cssClasses: this.args.cssClasses,
        templates: this.args.templates
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return pagination(this.props);
  }
}

export { AisPagination as default };
//# sourceMappingURL=ais-pagination.js.map
