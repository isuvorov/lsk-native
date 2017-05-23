import _ from 'lodash';
import logger from './logger';
import Promise from 'bluebird';
// import config from './config';

function isClass(v) {
  return typeof v === 'function';// && /^\s*class\s+/.test(v.toString());
}

const DEBUG = true;

export default class Core {
  name = 'Core';
  constructor(params = {}) {
    Object.assign(this, params);
    this.log = this.getLogger();
  }

  getLoggerMock() {
    const logger2 = (type) => {
      return (...args) => {
        console.log(`[${type}]`, ...args);
      };
    };
    return ['trace', 'debug', 'info', 'warn', 'error'].reduce((r, name) => {
      r[name] = logger2(name);
      return r;
    }, {});
  }

  getLogger(params) {
    if (__DEV__ && __CLIENT__) {
      return this.getLoggerMock();
    }
    const options = Object.assign({
      name: 'app',
      src: __DEV__,
      level: 'trace',
    }, this.config.log || {}, params);
    return logger.createLogger(options);
  }

  async init() {
    if (!this.log) this.log = this.getLogger();
    this.log.trace(`${this.name}.init()`);
    // if (!this.config) this.config = config;
  }

  getModules() {
    return {};
  }

  getModulesSequence() {
    return _.toPairs(this.modules || {}).map(([k, v]) => ({ name: k, module: v }));
  }

  broadcastModules(method) {
    this.log.trace(`${this.name}.broadcastModules`, method);
    return Promise.each(this.getModulesSequence(), (pack) => {
      // this.log.trace(`@@@@ module ${pack.name}.${method}()`, typeof pack.module[method], pack.module);
      if (!(pack.module && typeof pack.module[method] === 'function')) return;
      this.log.trace(`module ${pack.name}.${method}()`);
      return pack.module[method]();
    });
  }

  initModules() {
    this._modules = this.getModules();
    // console.log('@@!!', {modules});
    const modules = {};
    _.forEach(this._modules, (Module, key) => {
      // const Module = module(ctx);
      if (isClass(Module)) {
        modules[key] = new Module(this);
      } else {
        modules[key] = Module;
      }
      if (!modules[key].name || modules[key].name === 'Core') {
        modules[key].name = key;
      }
    });
    this.modules = modules;
    DEBUG && this.log.debug(`${this.name}.modules`, Object.keys(this.modules));
    // this.log.debug('_modules', Object.keys(this._modules));
    return this.broadcastModules('init');
  }

  run() {
  }

  runModules() {
    return this.broadcastModules('run');
  }

  async start() {
    try {
      // if (typeof this.init === 'function') {
      await this.init();
      // }
      if (typeof this.initModules === 'function') {
        this.log.trace(`${this.name}.initModules()`);
        await this.initModules();
      }
      if (typeof this.afterInit === 'function') {
        this.log.trace(`${this.name}.afterInit()`);
        await this.afterInit();
      }
      if (typeof this.run === 'function') {
        this.log.trace(`${this.name}.run()`);
        await this.run();
      }
      if (typeof this.runModules === 'function') {
        this.log.trace(`${this.name}.runModules()`);
        await this.runModules();
      }
      if (typeof this.afterRun === 'function') {
        this.log.trace(`${this.name}.afterRun()`);
        await this.afterRun();
      }
      if (typeof this.started === 'function') {
        this.log.trace(`${this.name}.started()`);
        await this.started();
      }
    } catch (err) {
      if (this.log && this.log.fatal) {
        this.log.fatal(`${this.name}.start() err`, err);
      } else {
        console.error(`${this.name}.start() err`, err);
      }
      throw err;
    }
    return this;
  }

}
