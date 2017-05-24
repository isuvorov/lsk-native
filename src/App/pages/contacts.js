import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  RefreshControl,
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

export default ctx => (
  class ContactsPage extends Component {
    static async action({ page, app }) {
      let users = [];
      try {
        users = await app.stores.Users.getUsers();//res.data;
      } catch (err) {
        console.log({err});
      }
      return page
        .meta({
          path: '/contacts',
          title: 'Контакты',
        })
        .component(ContactsPage, { users });
    }

    render() {
      const { users } = this.props
      return (
        <List
          dataArray={users}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => ctx.changeRoute('/contacts')}
            />
          }
          renderRow={(item) =>
            <ListItem
              onPress={() => ctx.changeRoute(item.getProfileRoute())}
              avatar
            >
              <Left>
                <Avatar src={item.avatar} title={item.name} online={item.online} />
              </Left>
              <Body>
                <Text>{item.name}</Text>
                <Text note>{item.text}</Text>
              </Body>
              <Right>
                <Text note>{item.info}</Text>
              </Right>
            </ListItem>
          }
        />
      );
    }
  }
);
