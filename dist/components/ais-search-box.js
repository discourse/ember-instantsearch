import { searchBox } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisSearchBox extends AisBaseWidget {
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
        placeholder: this.args.placeholder,
        autofocus: this.args.autofocus,
        ignoreCompositionEvents: this.args.ignoreCompositionEvents,
        searchAsYouType: this.args.searchAsYouType,
        showReset: this.args.showReset,
        showSubmit: this.args.showSubmit,
        showLoadingIndicator: this.args.showLoadingIndicator,
        queryHook: this.args.queryHook,
        templates: this.args.templates,
        cssClasses: this.args.cssClasses
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  createAlgoliaWidget() {
    return searchBox(this.props);
  }
}

export { AisSearchBox as default };
//# sourceMappingURL=ais-search-box.js.map
