import Controller from '@ember/controller';
import { inject as service } from '@ember/service';
import ENV from '../config/environment';

export default class ApplicationController extends Controller {
  @service aisInstantSearch;

  get customMiddleware() {
    return [
      () => ({
        // eslint-disable-next-line no-unused-vars
        onStateChange({ uiState }) {},
        subscribe() {},
        unsubscribe() {},
      }),
      () => ({
        // eslint-disable-next-line no-unused-vars
        onStateChange({ uiState }) {},
        subscribe() {},
        unsubscribe() {},
      }),
    ];
  }

  get apiData() {
    return {
      apiKey: ENV.APP.TYPESENSE_API_KEY,
      port: 8108,
      path: '',
      host: 'typesense.demo-by-discourse.com',
      protocol: 'https',
      indexName: 'posts',
      queryBy: 'topic_title,cooked,author_username',
    };
  }

  get customHitTemplate() {
    return {
      showPreviousText() {
        return `<span>Show previous</span>`;
      },
      showMoreText: () => {
        return `<span>Show More Results</span>`;
      },
      item: (hit) => {
        const title = this.aisInstantSearch.highlight(hit, 'topic_title');
        const post = this.aisInstantSearch.snippet(hit, 'raw');
        const template = `<h2 class="topic-title">
            <a href="https://meta.discourse.org/t/${hit.topic_id}">${title}</a>
          </h2>
          <p>${post}</p>`;
        return template;
      },
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
      { label: 'Posts', value: 'posts' },
      { label: 'Topics', value: 'topics' },
      { label: 'Chat Messages', value: 'chat_messages' },
      { label: 'Users', value: 'users' },
    ];
  }

  get configurationOptions() {
    return {
      attributesToSnippet: ['raw:20'],
    };
  }
}
