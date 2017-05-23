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
  class MessagePage extends Component {
    static async action({ page }) {
      return page
        .component(MessagePage, { });
    }

    render() {
      return (
        <View>
          {/* <Header> */}
          <Searchbar title="Поиск чата" />
          {/* </Header> */}
          <List
            dataArray={messages}
            renderRow={item =>
              <ListItem
                // onPress={changeRoute('user')}
                avatar
              >
                <Left>
                  <Thumbnail source={{ uri: item.avatar }} />
                  {/* <Thumbnail source={require('./img.jpg')} /> */}
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
