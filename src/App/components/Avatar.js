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


const styles = StyleSheet.create({
  avatarWrapper: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 2,
    borderRadius: 36,
  },
  avatarWrapper_online: {
    // borderWidth: 2,
    borderColor: 'green',
  },
  avatarWrapper_offline: {
    // borderWidth: 2,
    borderColor: 'gray',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
     // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


export default class Avatar extends Component {

  render() {
    let uri = this.props.src;
    if (uri[0] === '/') {
      const base = global.__url || 'http://x.mgbeta.ru:8080';
      uri = `${base}${uri}`;
      console.log({uri});
    }
    return <Thumbnail
      // style={styles.avatar}
      style={this.props.online ? styles.avatarWrapper_online : styles.avatarWrapper_offline}
      source={{ uri }}
      // defaultSource={{ uri: 'http://x.mgbeta.ru:8080/assets/no-avatar.png' }}
    />
    return (
      <View
        style={[
          styles.avatarWrapper,
          this.props.online ? styles.avatarWrapper_online : styles.avatarWrapper_offline,
        ]}
      >
        <Thumbnail
          // style={styles.avatar}
          source={{ uri }}
          // defaultSource={{ uri: 'http://x.mgbeta.ru:8080/assets/no-avatar.png' }}
        />
      </View>
    );
  }
}
