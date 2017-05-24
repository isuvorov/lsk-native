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
  class MessagePage extends Component {
    static async action({ page }) {
      return page
        .meta({
          path: '/messages',
          title: 'NewNext',
        })
        .component(MessagePage, { });
    }

    render() {
      return (
        <View>
          {/* <Header> */}
          <Searchbar title="Поиск чата" />
          {/* </Header> */}
          <List
            dataArray={data.messages}
            renderRow={item =>
              <ListItem
                onPress={() => ctx.changeRoute('/chat')}
                avatar
              >
                <Left>
                  <Avatar src={item.avatar} title={item.name} />
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
        </View>
      );
    }
  }
);
