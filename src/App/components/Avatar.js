import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import {
  Thumbnail,
 } from 'native-base';

export default class Avatar extends Component {

  render() {
    let uri = this.props.src;
    if (uri[0] === '/') {
      uri = `http://x.mgbeta.ru:8080${uri}`;
    }
    return (
      <Thumbnail
        source={{ uri }}
        // defaultSource={{ uri: 'http://x.mgbeta.ru:8080/assets/no-avatar.png' }}
      />
    );
  }
}
