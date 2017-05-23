import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  List,
  ListItem,
  Thumbnail,
  Container,
  Content,
  Header,
  Title,
  Button, Icon,
  Left, Body, Right,
  Footer, FooterTab,
  Form, Item, Label, Input,
  Grid, Col,
 } from 'native-base';

export default ctx => (
  class SearchUsersPage extends Component {
    static async action({ page }) {
      return page
        .component(SearchUsersPage, { });
    }

    render() {
      return (
        <View>
          <Searchbar />

          <List
            dataArray={data.search}
            renderRow={item =>
              <ListItem
                // onPress={changeRoute('user')}
                style={{ marginTop: 10 }}
                avatar
              >
                <Left>
                  <Thumbnail source={{ uri: item.avatar }} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                </Body>
              </ListItem>
            }
          />
        </View>
      );
    }
  }
);
