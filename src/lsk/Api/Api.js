import ApiClientBase from '../ApiClientBase';
import _ from 'lodash';

export default class ApiClient extends ApiClientBase {
  async throwError({ err }) {
    __DEV__ && console.error('throwError', err);
    const message = err && err.message || err;
    const error = new Error(_.isPlainObject(message) ? JSON.stringify(message) : message);

    const title = err && err.statusText || 'Ошибка';
    const text = err && err.data && err.data.message || error.message;

    global.toast && global.toast({
      title,
      text,
    });
    throw err;
  }

  authLogin(data) {
    return this.fetch('/api/module/auth/login', {
      method: 'POST',
      body: data,
    });
  }

  authSignup(data) {
    return this.fetch('/api/module/auth/signup', {
      method: 'POST',
      body: data,
    });
  }

  authValidate(data) {
    return this.fetch('/api/module/auth/validate', {
      method: 'GET',
      body: data,
    });
  }

  authRecovery(data) {
    return this.fetch('/api/module/auth/recovery', {
      method: 'POST',
      body: data,
    });
  }

  async getUser(body) {
    const res = await this.fetch('/api/module/user/get', {
      method: 'POST',
      body,
    });
    return res.data;
  }

  async getMyUser(body) {
    const res = await this.fetch('/api/module/user/me', {
      method: 'POST',
      body,
    });
    return res.data;
  }

  async userEdit(body) {
    const res = await this.fetch('/api/module/user/edit', {
      method: 'POST',
      body,
    });
    return res;
  }

  async authSignupPassport(data) {
    const res = await this.fetch('/api/module/auth/social/signup', {
      method: 'POST',
      body: data,
    });
    return res.data;
  }

  async authLoginPassport(data) {
    const res = await this.fetch('/api/module/auth/social/login', {
      method: 'POST',
      body: data,
    });
    return res.data;
  }

}
