import { hits } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisHits extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    escapeHTML: this.args.escapeHTML,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
    templates: this.args.templates ? this.buildTemplate() : undefined,
  };

  buildTemplate() {
    const template = {};
    const propertiesToCheck = ['empty', 'item'];

    propertiesToCheck.forEach((prop) => {
      if (this.args.templates[prop]) {
        template[prop] = (data, { html }) => {
          return html`${this.args.templates[prop](data)}`;
        };
      }
    });

    return template;
  }

  createAlgoliaWidget() {
    return hits(this.props);
  }
}
