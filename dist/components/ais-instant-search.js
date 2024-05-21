import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import instantsearch from 'instantsearch.js';
import { hash } from '@ember/helper';
import { inject } from '@ember/service';
import { configure } from 'instantsearch.js/es/widgets';
import TypesenseInstantSearchAdapter from 'typesense-instantsearch-adapter';
import { precompileTemplate } from '@ember/template-compilation';
import { setComponentTemplate } from '@ember/component';
import { g, i } from 'decorator-transforms/runtime';

class AisInstantSearch extends Component {
  static {
    g(this.prototype, "aisInstantSearch", [inject]);
  }
  #aisInstantSearch = (i(this, "aisInstantSearch"), void 0);
  static {
    g(this.prototype, "searchClient", [tracked], function () {
      return null;
    });
  }
  #searchClient = (i(this, "searchClient"), void 0);
  static {
    g(this.prototype, "instantSearchInstance", [tracked], function () {
      return null;
    });
  }
  #instantSearchInstance = (i(this, "instantSearchInstance"), void 0);
  static {
    g(this.prototype, "searchBoxElement", [tracked], function () {
      return null;
    });
  }
  #searchBoxElement = (i(this, "searchBoxElement"), void 0);
  static {
    g(this.prototype, "hitsElement", [tracked], function () {
      return null;
    });
  }
  #hitsElement = (i(this, "hitsElement"), void 0);
  constructor() {
    super(...arguments);
    if (!this.args.apiData.apiKey) {
      console.error('The Typesense API key is missing. Please provide the API key');
      return;
    }
    if (!this.args.apiData.port) {
      console.error('Port is missing. Please provide the port number for the Typesense server');
      return;
    }
    if (!this.args.apiData.host) {
      console.error('Host is missing. Please provide the host for the Typesense server');
      return;
    }
    if (!this.args.apiData.protocol) {
      console.error('Protocol is missing (http/https). Please provide the protocol for the Typesense server');
      return;
    }
    if (!this.args.apiData.indexName) {
      console.error('Index name is missing. Please provide the index name for the Typesense server');
      return;
    }
    if (!this.args.apiData.queryBy) {
      console.error('queryBy is missing. Please provide the queryBy field(s) for the Typesense server');
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
        preserveSharedStateOnUnmount: this.args.preserveSharedStateOnUnmount || true,
        persistHierarchicalRootCount: this.args.persistHierarchicalRootCount
      }
    });
    if (this.args.configurationOptions) {
      // See https://www.algolia.com/doc/api-reference/search-api-parameters/
      // for available search API configuration options
      this.instantSearchInstance.addWidgets([configure(this.args.configurationOptions)]);
    }
    this.applyMiddleware();
  }
  createSearchClient() {
    try {
      // const searchClient = algoliasearch(this.args.appId, this.args.apiKey);
      const typesenseInstantsearchAdapter1 = new TypesenseInstantSearchAdapter({
        server: {
          apiKey: this.args.apiData.apiKey,
          nodes: [{
            host: this.args.apiData.host,
            port: this.args.apiData.port,
            protocol: this.args.apiData.protocol,
            ...(this.args.apiData.path ? {
              path: this.args.apiData.path
            } : {})
          }]
        },
        additionalSearchParameters: {
          query_by: this.args.apiData.queryBy
        },
        collectionSpecificSearchParameters: this.args.collectionSpecificSearchParameters
      });
      const searchClient1 = typesenseInstantsearchAdapter1.searchClient;
      if (!searchClient1) {
        throw new Error('Failed to create searchClient');
      }
      return searchClient1;
    } catch (error1) {
      console.error(error1, 'Error creating search client');
    }
  }
  // See: https://www.algolia.com/doc/api-reference/widgets/middleware/js/
  // Middleware is a function that returns an array of middleware functions.
  applyMiddleware() {
    if (!this.instantSearchInstance) {
      console.error('InstantSearch instance not initialized. Middleware cannot be applied.');
      return;
    }
    if (!this.args.middleware) {
      return;
    }
    if (!Array.isArray(this.args.middleware)) {
      console.error('Invalid middleware provided. Please provide an array of functions.');
      return;
    }
    this.args.middleware.forEach(middlewareFunction1 => {
      if (typeof middlewareFunction1 !== 'function') {
        console.error('Invalid middleware provided. Each middleware should be a function.');
        return;
      }
      this.instantSearchInstance.use(middlewareFunction1);
    });
  }
  static {
    setComponentTemplate(precompileTemplate("\n    {{yield (hash searchInstance=this.instantSearchInstance)}}\n  ", {
      strictMode: true,
      scope: () => ({
        hash
      })
    }), this);
  }
}

export { AisInstantSearch as default };
//# sourceMappingURL=ais-instant-search.js.map
