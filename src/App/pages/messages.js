import React, { Component } from 'react';
import {
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
import SearchBar from '../components/SearchBar'
import _ from 'lodash'

function cropText(text = '', size = 70) {
  return text.length > size ? (text.substr(0, size) + '...') : text;
}
// {cropText(text)}


export default ctx => (
  class MessagePage extends Component {
    static async action({ page, app }) {
      let users = [];
      try {
        users = await app.stores.Users.getUsers();//res.data;
      } catch (err) {
        console.log({err});
      }
      return page
        .meta({
          path: '/messages',
          title: 'NewNext',
        })
        .component(MessagePage, { users });
    }

    render() {
      const { users } = this.props;
      return (
        <View>
          <SearchBar title="Поиск чата" />
          <List
            dataArray={users}
            refreshControl={
              <RefreshControl
                refreshing={false}
                onRefresh={() => ctx.changeRoute('/messages')}
              />
            }
            renderRow={item =>
              <ListItem
                onPress={() => ctx.changeRoute('/chat')}
                avatar
              >
                <Left>
                  <Avatar src={item.avatar} title={item.name} online={item.online} />
                </Left>
                <Body>
                  <Text>{item.name}</Text>
                  <Text note>{cropText(_.shuffle(data.messages.map(m => m.text))[0])}</Text>
                </Body>
                <Right>
                  <Text note>{_.shuffle(data.messages.map(m => m.info))[0]}</Text>
                </Right>
              </ListItem>
            }
          />
        </View>
      );
    }
  }
);
