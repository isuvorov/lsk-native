import React, { Component } from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  // RefreshControl,
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
    static async action({ page }) {
      let messages = [];
      try {
        const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1OTI0NDM5YTBlMmE2OWMzZDBjNWFhNGYiLCJ1c2VybmFtZSI6Im1lNiIsIm5hbWUiOiJJZ29yICBTdXZvcm92IiwiaWF0IjoxNDk1NTgxNjc1fQ.5Fmu13LRDIlIfFS3Y2NDrfwOv2aMZZhT2v4RFyiSwHs';
        const res = await ctx.api.fetch(`/api/module/chat/message/User/5924439a0e2a69c3d0c5aa4f?token=${token}`, {
          headers: {
            token,
          },
        });
        messages = res.data;
      } catch (err) {
        console.log({ err });
      }

      return page
        .meta({
          path: '/messages',
          title: 'Кейчи Ниййуцке',
          subtitle: 'Сейчас в сети',
          back: {
            route: '/messages',
          },
        })
        .component(ChatPage, { messages });
    }

    state = {
      refreshing: false,
    }
    _onRefresh() {
      ctx.changeRoute('/chat')
    }

    render() {
      const { messages } = this.props;
      return (
        <List
          dataArray={messages}
          // refreshControl={
          //   <RefreshControl
          //     refreshing={this.state.refreshing}
          //     onRefresh={this._onRefresh.bind(this)}
          //   />
          // }
          renderRow={({ user = {}, content = '', createdAt}) =>
            <ListItem
              // onPress={changeRoute('user')}
              avatar
            >
              <Left>
                <Avatar src={user.avatar || user.profile && user.profile.avatar} title={user.name} />
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
