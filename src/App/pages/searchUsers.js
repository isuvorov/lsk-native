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
import data from '../../../data'
import Avatar from '../components/Avatar'

function Searchbar({ title = 'Поиск' }) {
  return (
    <Item>
      <Icon active name="search" />
      <Input placeholder={title} />
    </Item>
  );
}
export default ctx => (
  class SearchUsersPage extends Component {
    static async action({ page }) {
      return page
        .meta({
          path: '/search',
          title: 'Поиск',
          subtitle: '2,034 человек',
          back: {
            route: '/search',
            icon: <Icon name="settings" />,
          },
        })
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
                  <Avatar src={item.avatar} title={item.name} />
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
