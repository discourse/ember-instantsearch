import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default class ApplicationController extends Controller {
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

  get hitTemplate() {
    return (hit, components) => {
      const template = `<h2>${components.Highlight({ hit, attribute: 'title' })}</h2>`;
      return template;
    };
  }
}
