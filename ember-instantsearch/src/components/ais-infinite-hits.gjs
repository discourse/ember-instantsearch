import { infiniteHits } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisInfiniteHits extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    escapeHTML: this.args.escapeHTML,
    showPrevious: this.args.showPrevious,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
    cache: this.args.cache,
    templates: this.args.templates ? this.buildTemplate() : undefined,
  };

  buildTemplate() {
    const template = {};
    const propertiesToCheck = [
      'empty',
      'item',
      'showPreviousText',
      'showMoreText',
    ];

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
    return infiniteHits(this.props);
  }
}
