import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default class ApplicationController extends Controller {
  @service aisInstantSearch;
  get customMiddleware() {
    return [
      () => ({
        onStateChange({ uiState }) {},
        subscribe() {},
        unsubscribe() {},
      }),
      () => ({
        onStateChange({ uiState }) {},
        subscribe() {},
        unsubscribe() {},
      }),
    ];
  }

  get apiKey() {
    return ENV.APP.INSTANT_SEARCH_API_KEY;
  }

  get customHitTemplate() {
    return (hit) => {
      const title = this.aisInstantSearch.highlight(hit, 'title');
      const overview = this.aisInstantSearch.snippet(hit, 'overview');
      const template = `<h2>${title}</h2><p>${overview}</p>`;
      return template;
    };
  }
}
