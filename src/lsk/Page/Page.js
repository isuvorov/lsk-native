import React from 'react';

import _ from 'lodash';
// import Root from '../Root';

const defaultState = {
  // favicon: '/favicon.ico',
};
const defaultProps = {
};

export default class Page {
  constructor(...args) {
    this.init(...args);
  }

  async init(props = {}, state = {}) {
    this._page = true;

    this.props = Object.assign({}, defaultProps);
    Object.assign(this.props, props);

    this.state = Object.assign({}, defaultState);
    Object.assign(this.state, state);

    this.uapp = this.props.uapp || {};

    this.state.titles = [];
    this.disabled = false;
  }

  checkAuth() {
    // console.log('checkAuth',!!(this.uapp && this.uapp.rootState.user),this.uapp);
    return this.uapp.rootState.user;
  }

  checkUserRole(role) {
    // if ()
    return !!(this.uapp && this.uapp.rootState.user &&
      (
        this.uapp.rootState.user.role === role ||
        this.uapp.rootState.user.username === 'me@coder24.ru'
      )
    );
  }

  setState(state = {}) {
    this.state = {
      ...this.state,
      ...state,
    };
  }

  getState() {
    return this.state;
  }

  // useRes(res) {
  //   if (this.state.redirect) {
  //     return res.redirect(this.state.redirect);
  //   }
  //   return res
  //     .status(200)
  //     .send(this.render());
  // }

  getRes(isRenderHtml = false) {
    if (this.state.redirect) {
      return {
        redirect: this.state.redirect,
      };
    }
    if (isRenderHtml) {
      return {
        status: 200,
        content: this.renderHtml(),
      };
    }
    return {
      status: 200,
      component: this.renderRoot(),
    };
  }


  isAuth() {
    if (!this.checkAuth()) {
      return this
        .redirect('/auth/login?r=/return/back/url') // @TODO return back url
        .disable();
    }
    return this;
  }

  isUserRole(role) {
    if (!this.checkUserRole(role)) {
      return this
        .error('Доступ запрещен')
        .disable();
    }
    return this;
  }


  enable() {
    this.disabled = false;
    return this;
  }
  disable() {
    this.disabled = true;
    return this;
  }

  error(err) {
    if (__DEV__) {
      console.error({ err });
    }
    if (this.disabled) return this;
    return this
      .layout(this.state.errorLayout)
      .title('ERROR!!!')
      .component(`Error: ${err}`);
  }

  next(next) {
    if (this.disabled) return this;
    return next()
    .catch((err) => {
      return this.error(err);
    });
  }

  title(...args) {
    return this.pushTitle(...args);
  }


  pushTitle(...args) {
    return this.meta({ title: args[0] });
  }

  composeMeta(metas = []) {
    return _.merge({}, ...metas);
  }

  getMeta(name, def = null) {
    if (name) return (this.state.meta || {})[name] || def;
    return this.state.meta || {};
  }

  meta(meta) {
    if (this.disabled) return this;
    if (!this.state.metas) this.state.metas = [];
    this.state.metas.push(meta);
    this.state.meta = this.composeMeta(this.state.metas);
    return this;
  }

  errorLayout(errorLayout) {
    if (this.disabled) return this;
    this.state.errorLayout = errorLayout;
    return this;
  }

  layout(layout) {
    if (this.disabled) return this;
    this.state.layout = layout;
    return this;
  }

  component(...args) {
    if (this.disabled) return this;
    if (args.length > 1) {
      this.state.component = args;
    } else {
      this.state.component = args[0];
    }
    return this;
  }

  content(content) {
    if (this.disabled) return this;
    this.state.content = content;
    return this;
  }

  redirect(redirect) {
    if (this.disabled) return this;
    this.state.redirect = redirect;
    return this;
  }


  // //////////////////////////////////////////////////////////////////////////


  renderLayout(props = {}, layout = null) {
    if (!this.state.layout) {
      return props.children;
    }
    if (!layout) layout = this.state.layout;
    const Layout = layout;

    return <Layout {...props} page={this} />;
  }

  renderComponent() {
    if (!Array.isArray(this.state.component)) {
      return this.state.component;
    }
    return React.createElement(this.state.component[0], this.state.component[1]);
  }


  render() {
    // console.log('page.render');
    return this.renderLayout({
      children: this.renderComponent(),
    });
  }


  getRootState() {
    return this.uapp.rootState;
  }



}
