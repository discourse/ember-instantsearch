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
    templates: this.args.hitTemplate
      ? {
          item: (hit, { html, components }) => {
            const hitTemplate = this.args.hitTemplate;

            // This works:
            // return html`<h2>${components.Highlight({
            //   hit,
            //   attribute: 'title',
            // })}</h2>`;
            // but we need to receive the template as an argument instead

            // TODO: Fix
            // This doesn't catch InstantSearch components like Highlight/Snippet
            if (typeof hitTemplate === 'function') {
              return html`${hitTemplate(hit, components)}`;
            }
          },
        }
      : undefined,
  };

  createAlgoliaWidget() {
    return hits(this.props);
  }

  <template>
    <div {{didInsert this.createWidget}}></div>
  </template>
}
