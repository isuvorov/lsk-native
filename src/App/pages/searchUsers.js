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
import SearchBar from '../components/SearchBar'

export default ctx => (
  class SearchUsersPage extends Component {
    static async action({ page, app }) {
      let users = [];
      try {
        users = await app.stores.Users.getUsers();//res.data;
      } catch (err) {
        console.log({err});
      }
      return page
        .meta({
          path: '/search',
          title: 'Поиск',
          subtitle: users.length + ' человек',
          back: {
            route: '/search',
            icon: <Icon name="settings" />,
          },
        })
        .component(SearchUsersPage, { users });
    }

    render() {
      const { users } = this.props;
      return (
        <View>
          <SearchBar />
          <List
            dataArray={users}
            renderRow={item =>
              <ListItem
                onPress={() => ctx.changeRoute(item.getProfileRoute())}
                style={{ marginTop: 10 }}
                avatar
              >
                <Left>
                  <Avatar src={item.avatar} title={item.name} online={item.online} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text style={{fontSize: 12, color: '#ccc'}}>{[item.profile.city, item.profile.country, item.profile.age].filter(a => a).join(', ')}</Text>
                </Body>
              </ListItem>
            }
          />
        </View>
      );
    }
  }
);
