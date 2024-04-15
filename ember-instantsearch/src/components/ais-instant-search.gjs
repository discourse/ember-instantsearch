import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import algoliasearch from 'algoliasearch/lite';
import instantsearch from 'instantsearch.js';
import { hash } from '@ember/helper';
import { inject as service } from '@ember/service';
import { configure } from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';

export default class AisInstantSearch extends Component {
  @service aisInstantSearch;
  @tracked searchClient = null;
  @tracked instantSearchInstance = null;

  @tracked searchBoxElement = null;
  @tracked hitsElement = null;

  constructor() {
    super(...arguments);

    if (!this.args.apiData.apiKey) {
      console.error(
        'The Typesense API key is missing. Please provide the API key',
      );
      return;
    }

    if (!this.args.apiData.port) {
      console.error(
        'Port is missing. Please provide the port number for the Typesense server',
      );
      return;
    }

    if (!this.args.apiData.host) {
      console.error(
        'Host is missing. Please provide the host for the Typesense server',
      );
      return;
    }

    if (!this.args.apiData.protocol) {
      console.error(
        'Protocol is missing (http/https). Please provide the protocol for the Typesense server',
      );
      return;
    }

    if (!this.args.apiData.indexName) {
      console.error(
        'Index name is missing. Please provide the index name for the Typesense server',
      );
      return;
    }

    if (!this.args.apiData.queryBy) {
      console.error(
        'queryBy is missing. Please provide the queryBy field(s) for the Typesense server',
      );
      return;
    }

    this.searchClient = this.createSearchClient();

    if (!this.searchClient) {
      return;
    }

    this.instantSearchInstance = instantsearch({
      indexName: this.args.apiData.indexName,
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

    if (this.args.configurationOptions) {
      // See https://www.algolia.com/doc/api-reference/search-api-parameters/
      // for available search API configuration options
      this.instantSearchInstance.addWidgets([
        configure(this.args.configurationOptions),
      ]);
    }

    this.applyMiddleware();
  }

  createSearchClient() {
    try {
      // const searchClient = algoliasearch(this.args.appId, this.args.apiKey);
      const typesenseInstantsearchAdapter = new TypesenseInstantSearchAdapter({
        server: {
          apiKey: 'xyz',
          nodes: [
            {
              host: 'typesense.demo-by-discourse.com',
              port: 8108,
              protocol: 'https',
            },
          ],
        },
        additionalSearchParameters: {
          query_by: 'title',
        },
      });

      const searchClient = typesenseInstantsearchAdapter.searchClient;

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
