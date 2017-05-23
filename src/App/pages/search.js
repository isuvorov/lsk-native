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
  class SearchPage extends Component {
    static async action({ page }) {
      return page
        .component(SearchPage, { });
    }

    render() {
      return (
        <View>
          <Form>
            <Item stackedLabel>
              <Label>Город</Label>
              <Input placeholder="  Любой город" />
            </Item>
            <Item stackedLabel>
              <Label>Пол</Label>
              <Input placeholder="  Любой пол" />
            </Item>
            <Item stackedLabel>
              <Label>Возраст</Label>
              <Input placeholder="  Любой возраст" />
            </Item>
            <Item stackedLabel>
              <Label>Сфера деятельности</Label>
              <Input placeholder="  Дизайнер" />
            </Item>
            <Item stackedLabel>
              <Label>В сети</Label>
              <Input placeholder="  Не важно" />
            </Item>

          </Form>
          <Text />
          <Grid>
            <Col />
            <Col >
              <Button onPress={changeRoute('searchUsers')} large primary block><Text> Поиск </Text></Button>
            </Col>
            <Col />
          </Grid>
          {/* <Center> */}

          {/* </Center> */}
        </View>
      );
    }
  }
);
