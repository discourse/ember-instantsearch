import Component from '@glimmer/component';
import { action } from '@ember/object';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import { tracked } from '@glimmer/tracking';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i, n } from 'decorator-transforms/runtime';

class AisBaseWidget extends Component {
  static {
    g(this.prototype, "element", [tracked], function () {
      return null;
    });
  }
  #element = (i(this, "element"), void 0);
  static {
    g(this.prototype, "requiredProps", [tracked], function () {
      return {};
    });
  }
  #requiredProps = (i(this, "requiredProps"), void 0); // Props specific to the derived class
  // See API docs for more information on available props for each widget:
  // https://www.algolia.com/doc/api-reference/widgets/js/
  static {
    g(this.prototype, "optionalProps", [tracked], function () {
      return {};
    });
  }
  #optionalProps = (i(this, "optionalProps"), void 0);
  static {
    g(this.prototype, "props", [tracked], function () {
      return {
        ...this.requiredProps,
        ...this.optionalProps
      };
    });
  }
  #props = (i(this, "props"), void 0);
  checkRequiredProps() {
    if (this.requiredProps) {
      Object.keys(this.requiredProps).forEach(prop1 => {
        if (!this.args[prop1] && prop1 !== 'container') {
          throw new Error(`Required prop ${prop1} is missing from ${this.constructor.name}`);
        }
      });
    }
  }
  createWidget(element1) {
    this.element = element1;
    this.checkRequiredProps();
    this.args.searchInstance.addWidgets([this.createAlgoliaWidget(element1)]);
    if (!this.args.searchInstance?.started) {
      this.args.searchInstance.start();
    }
  }
  static {
    n(this.prototype, "createWidget", [action]);
  }
  createAlgoliaWidget() {
    throw new Error('createAlgoliaWidget must be implemented in derived classes');
  }
  // Basic template that can be overridden in derived classes
  static {
    setComponentTemplate(precompileTemplate("\n    <div {{didInsert this.createWidget}} class={{@rootClass}}></div>\n  ", {
      strictMode: true,
      scope: () => ({
        didInsert
      })
    }), this);
  }
}

export { AisBaseWidget as default };
//# sourceMappingURL=ais-base-widget.js.map
