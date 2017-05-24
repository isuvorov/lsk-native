import React, { Component } from 'react';
import Expo from 'expo';
import App from './src/App';
import config from './src/config';
global.__CLIENT__ = true;

export default class Init extends Component {
  state = {
    count: 0,
  }
  component = <Expo.AppLoading />;
  setComponent(component) {
    this.component = component;
    this.setState({ count: this.state.count + 1 });
  }
  constructor() {
    super();
    this.app = new App({
      config,
      wrapperApp: this,
    });
  }
  async componentDidMount() {
    await Expo.Font.loadAsync({
      Roboto: require('native-base/Fonts/Roboto.ttf'),
      Roboto_medium: require('native-base/Fonts/Roboto_medium.ttf'),
    });
    await this.app.start();
  }
  changeRoute(params) {
    if (typeof params === 'string') {
      params = {
        path: params,
      };
    }
    this.app.resolve(params);
  }

  render() {
    return this.component;
  }
}
