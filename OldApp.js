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
  Footer, FooterTab,
  Form, Item, Label, Input,
  Grid, Col,

 } from 'native-base';


function AndroidHeader() {
  if (Platform.OS === 'ios') {
    return null;
  }
  return (<Header style={{height: 20}}>
    <Text />
  </Header>);
}

function Searchbar({title = 'Поиск'}) {
  return (
    <Item>
      <Icon active name='search' />
      <Input  placeholder={title} />
    </Item>
  );
}

const titles = {
  messages: 'NewNext',
  contacts: 'Контакты',
  search: 'Поиск',
  searchUsers: 'Поиск',
  profile: 'Профиль',
};
const pages = {
  none: () => (
    <Text>Данный экран отсутвует =(</Text>
  ),
  messages: ({changeRoute}) => (
    <View>
      {/* <Header> */}
      <Searchbar title='Поиск чата' />
      {/* </Header> */}
      <List
        dataArray={data.messages}
        renderRow={(item) =>
          <ListItem
            // onPress={changeRoute('user')}
            avatar
          >
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
    </View>
  ),
  search: ({changeRoute}) => (
    <View>
      <Form>
        <Item stackedLabel>
          <Label>Город</Label>
          <Input  placeholder='  Любой город' />
        </Item>
        <Item stackedLabel>
          <Label>Пол</Label>
          <Input  placeholder='  Любой пол' />
        </Item>
        <Item stackedLabel>
          <Label>Возраст</Label>
          <Input  placeholder='  Любой возраст' />
        </Item>
        <Item stackedLabel>
          <Label>Сфера деятельности</Label>
          <Input  placeholder='  Дизайнер' />
        </Item>
        <Item stackedLabel>
          <Label>В сети</Label>
          <Input  placeholder='  Не важно' />
        </Item>

      </Form>
      <Text />
      <Grid>
         <Col ></Col>
         <Col >
           <Button onPress={changeRoute('searchUsers')} large primary block><Text> Поиск </Text></Button>
         </Col>
         <Col ></Col>
     </Grid>
      {/* <Center> */}

      {/* </Center> */}
    </View>
  ),
  searchUsers: ({changeRoute}) => (
    <View>
      <Searchbar />

      <List
        dataArray={data.search}
        renderRow={(item) =>
          <ListItem
            // onPress={changeRoute('user')}
            style={{marginTop:10}}
            avatar
          >
            <Left>
              <Thumbnail source={{uri: item.avatar}} />
            </Left>
            <Body>
              <Text>{item.name}</Text>
            </Body>
          </ListItem>
        }
      />
    </View>

  ),
  contacts: ({changeRoute}) => (
    <List
      dataArray={data.contacts}
      renderRow={(item) =>
        <ListItem
          // onPress={changeRoute('user')}
          avatar
        >
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
  profile: ({changeRoute}) => (
    <Text>profile </Text>
  )
}

class App extends React.Component {
  state = {
    route: 'searchUsers',
    isReady: false,
  }


  changeRoute = (route) => {
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
        <AndroidHeader />
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
          {content({changeRoute: this.changeRoute})}
        </Content>
        <Footer>
          <FooterTab>
            <Button active={route === 'messages'} onPress={this.changeRoute('messages')}>
              <Icon active={route === 'messages'} name="chatbubbles" />
            </Button>
            <Button active={route.substr(0, 6) === 'search'} onPress={this.changeRoute('search')}>
              <Icon active={route.substr(0, 6) === 'search'} name="search" />
            </Button>
            <Button active={route === 'contacts'} onPress={this.changeRoute('contacts')}>
              <Icon active={route === 'contacts'} name="person" />
            </Button>
            <Button active={route === 'profile'} onPress={this.changeRoute('profile')}>
              <Icon active={route === 'profile'} name="menu" />
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
