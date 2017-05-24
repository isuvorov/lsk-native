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
import Avatar from '../components/Avatar';




export default ctx => (
  class ChatPage extends Component {
    static async action({ page, userId, app }) {


      let user = {};
      try {
        user = await app.stores.User.getById(query._id || userId);
      } catch (err) {
        console.log({ err });
      }

      let messages = [];
      try {
        const res = await ctx.api.fetch(`/api/module/chat/message/User/` + userId);
        messages = res.data;
      } catch (err) {
        console.log({ err });
      }

      return page
        .meta({
          path: '/messages',
          title: user.name,
          subtitle: user.online ? 'Сейчас в сети' : 'Оффлайн',
          back: {
            route: '/messages',
          },
          wrapContent: null,
        })
        .component(ChatPage, { messages });
    }

    render() {
      const { messages } = this.props;
      return (
        <List
          dataArray={messages}
          refreshControl={
            <RefreshControl
              refreshing={false}
              onRefresh={() => ctx.changeRoute('/chat')}
            />
          }
          renderRow={({ user = {}, content = '', createdAt}) =>
            <ListItem
              // onPress={changeRoute('user')}
              avatar
            >
              <Left>
                <Avatar src={user.avatar || user.profile && user.profile.avatar} title={user.name} online={user.online} />
              </Left>
              <Body>
                <Text>{user.name}</Text>
                <Text note>{content}</Text>
              </Body>
              {/* <Right>
                <Text note>{(new Date(createdAt)).toISOString()}</Text>
              </Right> */}
            </ListItem>
          }
        />
      );
    }
  }
);
