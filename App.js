import Expo from 'expo';
import data from './data';
import _ from 'lodash';
import React from 'react';
import {
  Platform,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {
  // Button,
  // Icon, Container, Content, List, ListItem, Thumbnail, Text, Body
  // Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon
  List,
  ListItem,
  Thumbnail,
  Container,
  Content,
  Header,
  Title,
  Button, Icon,
  Left, Body, Right,
  Footer, FooterTab

 } from 'native-base';


const titles = {
  messages: 'Сообщения',
  users: 'Контакты',
  search: 'Поиск',
  profile: 'Профиль',
};
const pages = {
  none: () => (
    <Text>Данный экран отсутвует =(</Text>
  ),
  users: ({changeRoute}) => (
    <List
      dataArray={data.users}
      renderRow={(item) =>
        <ListItem
          // onPress={changeRoute('user')}
          avatar>
          <Left>
            <Thumbnail source={{uri: item.avatar}} />
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
  ),
  messages: ({changeRoute}) => (
    <List
      dataArray={data.messages}
      renderRow={(item) =>
        <ListItem
          // onPress={changeRoute('user')}
          avatar>
          <Left>
            <Thumbnail source={{uri: item.avatar}} />
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
  )
}

class App extends React.Component {
  state = {
    route: 'users',
    isReady: false,
  }

  changeRoute(route) {
    return  () => {
      this.setState({route});
    }
  }
  async componentWillMount() {
    await Expo.Font.loadAsync({
      'Roboto': require('native-base/Fonts/Roboto.ttf'),
      'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    });
    // if (Platform.OS === 'android') {
    //   await Expo.Font.loadAsync({
    //     'Roboto': require('native-base/Fonts/Roboto.ttf'),
    //     'Roboto_medium': require('native-base/Fonts/Roboto_medium.ttf'),
    //   });
    // }

    this.setState({isReady: true});
  }
  render() {
    if (!this.state.isReady) {
      return <Expo.AppLoading />;
    }

    const route = this.state.route;

    let content = pages[route];
    if (!content) content = pages.none;

    return (
      <Container>
        <StatusBar barStyle="default" />
        <Header>
          <Left>
            <Button transparent>
              {/* <Icon name='menu' /> */}
            </Button>
          </Left>
          <Body>
            <Title>{titles[route]}</Title>
          </Body>
          <Right />
        </Header>
        <Content>
          {content({changeRoute})}
        </Content>
        <Footer>
          <FooterTab>
            <Button active={route === 'messages'} onPress={this.changeRoute('messages')}>
              <Icon active={route === 'messages'} name="pizza" />
            </Button>
            <Button active={route === 'search'} onPress={this.changeRoute('search')}>
              <Icon active={route === 'search'} name="camera" />
            </Button>
            <Button active={route === 'users'} onPress={this.changeRoute('users')}>
              <Icon active={route === 'users'} name="navigate" />
            </Button>
            <Button active={route === 'profile'} onPress={this.changeRoute('profile')}>
              <Icon active={route === 'profile'} name="person" />
            </Button>
          </FooterTab>
        </Footer>
      </Container>
   );

    // return (
    //   <Container>
    //     <StatusBar barStyle="default" />
    //     <Content>
    //       <List>
    //         <ListItem>
    //           <Thumbnail square size={80} source={require('./img.jpg')} />
    //           <Body>
    //             <Text>Sankhadeep</Text>
    //             <Text note>Its time to build a difference . .</Text>
    //           </Body>
    //         </ListItem>
    //       </List>
    //       <Button style={{alignSelf: 'center'}}  large info>
    //         <Text style={{color: '#fff'}}>
    //             This is indeed a button
    //           </Text>
    //       </Button>
    //     </Content>
    //   </Container>
    // );

      // <View style={styles.container}>
      //   {/* <IconExample /> */}

      //   <StatusBar barStyle="default" />
      // </View>
  }
}


export default App;
