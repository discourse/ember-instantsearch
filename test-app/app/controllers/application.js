import Controller from '@ember/controller';

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

  get hitTemplate() {
    return (hit, components) => {
      const template = `
        <h2>${components.Highlight({ hit, attribute: 'title' })}</h2>
        <p>${components.Snippet({ hit, attribute: 'overview' })}</p>
      `;

      return template;
    };
  }
}
