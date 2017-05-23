import UniversalRouter from 'universal-router';
import Core from '../lsk/Core';
import Page from '../lsk/Page';
import Api from '../lsk/Api';

export default class App extends Core {
  name='App';
  Page = Page;
  Api = Api;

  async init() {
    await super.init();
    this.api = new this.Api(this.config && this.config.api || {});
    this.router = new UniversalRouter(this.getRoutes(), {});
    this.log.trace('router', this.router);
  }

  async run() {
    await super.run();
    await this.changeRoute({ path: '/' });
  }

  async changeRoute(params) {
    if (typeof params === 'string') {
      params = {
        path: params,
      };
    }

    const page = await this.resolve(params);
    const component = page.render ? page.render() : page;
    return this.wrapperApp.setComponent(component);
  }

  getRoutes() {
    return require('./routes').default;
  }

  resetPage() {
    if (!this.page) {
      this.page = new this.Page();
    }
    this.page.init({
      app: this,
    });
    return this.page;
  }

  // return page for req
  async resolve(params = {}) {
    this.resetPage();
    const allParams = {
      path: '/',
      ...this.provide(),
      ...params,
    };
    const page = this.router.resolve(allParams);
    if (page._page) throw '!page';
    return page;
  }

  provide() {
    return {
      app: this,
      log: this.log,
      config: this.config,
      page: this.page,
      api: this.api,
    };
  }
}
