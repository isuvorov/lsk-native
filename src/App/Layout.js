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
  Grid, Col,
 } from 'native-base';


function AndroidHeader() {
  if (Platform.OS === 'ios') {
    return null;
  }
  return (<Header style={{ height: 20 }}>
    <Text />
  </Header>);
}

function Searchbar({ title = 'Поиск' }) {
  return (
    <Item>
      <Icon active name="search" />
      <Input placeholder={title} />
    </Item>
  );
}


export default function Layout({ children, page }) {
  // const { app } = page;
  const app = page.props.app;
  const { meta = {} } = page.state;
  let component = children;
  if (meta.wrapContent !== null) {
    component = (
      <Content>
        {component}
      </Content>
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
      <Header>
        <Left>
          {back && (
            <Button transparent onPress={() => app.changeRoute(back.route)}>
              {back.icon ? back.icon : <Icon name="arrow-back" />}
            </Button>
          )}
        </Left>
        <Body>
          <Title>{meta.title || '???'}</Title>
          {meta.subtitle && (
            <Title style={{ fontSize: 10 }}>
              {meta.subtitle}
            </Title>
          )}
        </Body>
        <Right>

          <Switch
            style={{ marginBottom: 10 }}
            value
          />
        </Right>
      </Header>
      {component}
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
    </Container>
  );
}
