import { hits } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';

export default class AisHits extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    escapeHTML: this.args.escapeHTML,
    cssClasses: this.args.cssClasses,
    transformItems: this.args.transformItems,
    templates: this.args.customHitTemplate
      ? {
          item: (hit, { html }) => {
            const hitTemplate = this.args.customHitTemplate;

            if (!hitTemplate) {
              return;
            }

            if (typeof hitTemplate === 'function') {
              const t = hitTemplate(hit);
              return html`${t}`;
            }
          },
        }
      : undefined,
  };

  createAlgoliaWidget() {
    return hits(this.props);
  }
}
