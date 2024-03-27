import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { hash } from '@ember/helper';
import { inject as service } from '@ember/service';

export default class AisInstantSearch extends Component {
  @service aisInstantSearch;
  @tracked searchClient = null;
  @tracked instantSearchInstance = null;

  @tracked searchBoxElement = null;
  @tracked hitsElement = null;

  constructor() {
    super(...arguments);

    if (!this.args.appId) {
      console.error(
        'Required parameter `appId` missing. Please provide the Application ID from your Algolia API: https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/#application-id',
      );
      return;
    }

    if (!this.args.apiKey) {
      console.error(
        'Required parameter `apiKey` missing. Please provide the API Key from your Algolia API: https://www.algolia.com/doc/guides/sending-and-managing-data/send-and-update-your-data/how-to/importing-with-the-api/#api-key',
      );
      return;
    }

    if (!this.args.indexName) {
      console.error(
        'Required parameter, `indexName` missing. Please provide a search index for the AisInstantSearch component.',
      );
      return;
    }

    this.searchClient = this.createSearchClient();

    if (!this.searchClient) {
      return;
    }

    this.instantSearchInstance = instantsearch({
      indexName: this.args.indexName,
      searchClient: this.searchClient,
      numberLocale: this.args.numberLocale,
      searchFunction: this.args.searchFunction,
      initialUiState: this.args.initialUiState,
      onStateChange: this.args.onStateChange,
      stalledSearchDelay: this.args.stalledSearchDelay,
      routing: this.args.routing,
      insights: this.args.insights,
      insightsClient: this.args.insightsClient,
      future: {
        preserveSharedStateOnUnmount:
          this.args.preserveSharedStateOnUnmount || true,
        persistHierarchicalRootCount: this.args.persistHierarchicalRootCount,
      },
    });

    this.applyMiddleware();
  }

  createSearchClient() {
    try {
      const searchClient = algoliasearch(this.args.appId, this.args.apiKey);
      if (!searchClient) {
        throw new Error('Failed to create searchClient');
      }
      return searchClient;
    } catch (error) {
      console.error(error, 'Error creating search client');
    }
  }

  // See: https://www.algolia.com/doc/api-reference/widgets/middleware/js/
  // Middleware is a function that returns an array of middleware functions.
  applyMiddleware() {
    if (!this.instantSearchInstance) {
      console.error(
        'InstantSearch instance not initialized. Middleware cannot be applied.',
      );
      return;
    }

    if (!this.args.middleware) {
      return;
    }

    if (!Array.isArray(this.args.middleware)) {
      console.error(
        'Invalid middleware provided. Please provide an array of functions.',
      );
      return;
    }

    this.args.middleware.forEach((middlewareFunction) => {
      if (typeof middlewareFunction !== 'function') {
        console.error(
          'Invalid middleware provided. Each middleware should be a function.',
        );
        return;
      }

      this.instantSearchInstance.use(middlewareFunction);
    });
  }

  <template>
    {{yield (hash searchInstance=this.instantSearchInstance)}}
  </template>
}
