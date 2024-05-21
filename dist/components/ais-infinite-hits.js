import { infiniteHits } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.js';
import { tracked } from '@glimmer/tracking';
import { g, i } from 'decorator-transforms/runtime';

class AisInfiniteHits extends AisBaseWidget {
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
        escapeHTML: this.args.escapeHTML,
        showPrevious: this.args.showPrevious,
        cssClasses: this.args.cssClasses,
        transformItems: this.args.transformItems,
        cache: this.args.cache,
        templates: this.args.templates ? this.buildTemplate() : undefined
      };
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  buildTemplate() {
    const template = {};
    const propertiesToCheck = ['empty', 'item', 'showPreviousText', 'showMoreText'];
    propertiesToCheck.forEach(prop => {
      if (this.args.templates[prop]) {
        template[prop] = (data, {
          html
        }) => {
          return html`${this.args.templates[prop](data)}`;
        };
      }
    });
    return template;
  }
  createAlgoliaWidget() {
    return infiniteHits(this.props);
  }
}

export { AisInfiniteHits as default };
//# sourceMappingURL=ais-infinite-hits.js.map
