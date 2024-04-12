import Controller from '@ember/controller';
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

  get apiData() {
    return {
      apiKey: ENV.APP.INSTANT_SEARCH_API_KEY,
      appId: ENV.APP.INSTANT_SEARCH_APP_ID,
      indexName: ENV.APP.INSTANT_SEARCH_INDEX_NAME,
    };
  }

  get customHitTemplate() {
    return (hit) => {
      const title = this.aisInstantSearch.highlight(hit, 'title');
      const overview = this.aisInstantSearch.snippet(hit, 'overview');
      const template = `<h2>${title}</h2><p>${overview}</p>`;
      return template;
    };
  }

  get hitsPerPageItems() {
    return [
      { label: '6 per page', value: 6, default: true },
      { label: '12 per page', value: 12 },
      { label: '18 per page', value: 18 },
    ];
  }

  get sortByItems() {
    return [
      { label: 'Default', value: 'dev_keegantest' },
      { label: 'Popularity', value: 'dev_keegantest_popularity_desc' },
    ];
  }

  get configurationOptions() {
    return {
      attributesToSnippet: ['overview:20'],
    };
  }
}
