import React, { Component } from 'react';
import {
  Item,
  Icon,
  Input,
  View,
 } from 'native-base';
 
 import {
  Dimensions,
} from 'react-native';


export default class SearchBar extends Component {
getHeight(multiplier) {
    return {
        height: Dimensions.get('window').height*multiplier,
    }
}
getWidth(multiplier) {
    return {
        width: Dimensions.get('window').width*multiplier, 
    }
}

  render() {
    return (
      <View style={{flex: 0, marginLeft: 10, flexDirection:'row',alignItems: 'center',justifyContent:'flex-start'}}>
        <Icon active style={{color: '#A3A3A3', fontSize: 14, backgroundColor: '#000', }} name="search" />
        <Input style={{flex: 0, width: 80, marginLeft: 5, fontSize: 12, textAlign: 'left', backgroundColor: '#00ff', }} placeholder={this.props.title || 'Поиск'} />
      </View>
    );
  }
}
