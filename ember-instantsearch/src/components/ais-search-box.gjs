import { searchBox } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisSearchBox extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    placeholder: this.args.placeholder,
    autofocus: this.args.autofocus,
    ignoreCompositionEvents: this.args.ignoreCompositionEvents,
    searchAsYouType: this.args.searchAsYouType,
    showReset: this.args.showReset,
    showSubmit: this.args.showSubmit,
    showLoadingIndicator: this.args.showLoadingIndicator,
    queryHook: this.args.queryHook,
    cssClasses: this.args.cssClasses,
  };

  createAlgoliaWidget() {
    return searchBox(this.props);
  }
}
