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
  class ProfilePage extends Component {
    static async action({ page }) {
      return page
        .meta({
          path: '/profile',
          title: 'Профиль',
        })
        .component(ProfilePage, { });
    }

    render() {
      return (

          <Text>profile </Text>
      );
    }
  }
);
