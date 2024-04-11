import Component from '@glimmer/component';
import { action } from '@ember/object';
import didInsert from '@ember/render-modifiers/modifiers/did-insert';
import { tracked } from '@glimmer/tracking';
import { configure } from 'instantsearch.js/es/widgets';

export default class AisBaseWidget extends Component {
  @tracked element = null;
  // Props specific to the derived class
  // See API docs for more information on available props for each widget:
  // https://www.algolia.com/doc/api-reference/widgets/js/
  @tracked requiredProps = {}; // Added by derived components
  @tracked optionalProps = {}; // Added by derived components
  @tracked props = {
    ...this.requiredProps,
    ...this.optionalProps,
  };

  checkRequiredProps() {
    if (this.requiredProps) {
      Object.keys(this.requiredProps).forEach((prop) => {
        if (!this.args[prop] && prop !== 'container') {
          throw new Error(
            `Required prop ${prop} is missing from ${this.constructor.name}`,
          );
        }
      });
    }
  }

  @action
  createWidget(element) {
    this.element = element;

    this.checkRequiredProps();

    this.args.searchInstance.addWidgets([
      this.createAlgoliaWidget(element),
      configure({ attributesToSnippet: ['*'] }),
    ]);

    if (!this.args.searchInstance?.started) {
      this.args.searchInstance.start();
    }
  }

  createAlgoliaWidget() {
    throw new Error(
      'createAlgoliaWidget must be implemented in derived classes',
    );
  }

  // Basic template that can be overridden in derived classes
  <template>
    <div {{didInsert this.createWidget}}></div>
  </template>
}
