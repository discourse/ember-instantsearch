import { pagination } from 'instantsearch.js/es/widgets';
import AisBaseWidget from './ais-base-widget.gjs';
import { tracked } from '@glimmer/tracking';

export default class AisPagination extends AisBaseWidget {
  @tracked requiredProps = {
    container: this.element,
  };

  @tracked optionalProps = {
    showFirst: this.args.showFirst,
    showPrevious: this.args.showPrevious,
    showNext: this.args.showNext,
    showLast: this.args.showLast,
    padding: this.args.padding,
    totalPages: this.args.totalPages,
    scrollTo: this.args.scrollTo,
    cssClasses: this.args.cssClasses,
    templates: this.args.templates,
  };

  createAlgoliaWidget() {
    return pagination(this.props);
  }
}
