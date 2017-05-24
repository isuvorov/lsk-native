import React, { Component } from 'react';
import {
  Item,
  Icon,
  Input
 } from 'native-base';

export default class SearchBar extends Component {
  render() {
    return (
      <Item>
        <Icon active name="search" />
        <Input placeholder={this.props.title || 'Поиск'} />
      </Item>
    );
  }
}
