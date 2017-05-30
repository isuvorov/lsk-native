import React from 'react';

import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Switch,
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
  Grid, Col, StyleProvider,
 } from 'native-base';

import getTheme from '../theme/components';
// import platform from '../theme/variables/commonColor';
import platform from '../theme/variables/platform';

function AndroidHeader() {
  if (Platform.OS === 'ios') {
    return null;
  }
  return (
  <StyleProvider style={getTheme(platform)}>
  <Header style={{ height: 20 }}>
    <Text />
  </Header>
  </StyleProvider>
  );
}


export default function Layout({ children, page }) {
  // const { app } = page;
  const app = page.props.app;
  const { meta = {} } = page.state;
  let component = children;
  if (meta.wrapContent !== null) {
    component = (
      <StyleProvider style={getTheme(platform)}>
      <Content style={{paddingRight: 10,}}>
        {component}
      </Content>
      </StyleProvider>
    );
  }
  console.log({ pageState: page.state });
  // console.log({ page});
  const route = (meta.path || '/').substr(1);
  const back = meta.back;
  return (
    <Container>
      <StatusBar barStyle="default" />
      <AndroidHeader />
      <StyleProvider style={getTheme(platform)}>
      <Header>
        <Left>
          {back && (
            <Button transparent onPress={() => app.changeRoute(back.route)}>
              {back.icon ? back.icon : <Icon name="arrow-back" />}
            </Button>
          )}
        </Left>
        <Body style={{flex: 3 }}>

          <Title style={{fontSize: 15, fontWeight: 'bold', }}>{meta.title || '???'}</Title>
          {meta.subtitle && (
            <Title style={{ fontSize: 10, }}>
              {meta.subtitle}
            </Title>
          )}
        </Body>
        <Right>

          <Switch onTintColor='#90EB76' thumbTintColor="#fff" tintColor="#ccc"
            style={{ marginBottom: 0 }}
            value
          />
        </Right>
      </Header>
      </StyleProvider>

      {component}
      {meta.disableFooter !== true && (
        <StyleProvider style={getTheme(platform)}>
        <Footer>
          <FooterTab>
            <Button active={route === 'messages'} onPress={() => app.changeRoute('/messages')}>
              <Icon active={route === 'messages'} name="chatbubbles" />
            </Button>
            <Button active={route.substr(0, 6) === 'search'} onPress={() => app.changeRoute('/search')}>
              <Icon active={route.substr(0, 6) === 'search'} name="search" />
            </Button>
            <Button active={route === 'contacts'} onPress={() => app.changeRoute('/contacts')}>
              <Icon active={route === 'contacts'} name="person" />
            </Button>
            <Button active={route === 'profile'} onPress={() => app.changeRoute('/profile')}>
              <Icon active={route === 'profile'} name="menu" />
            </Button>
          </FooterTab>
        </Footer>
        </StyleProvider>
      )}
    </Container>
  );
}
