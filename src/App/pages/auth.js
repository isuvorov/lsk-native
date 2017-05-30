import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  Platform,
  Dimensions,
} from 'react-native';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import {
  Form,
  Item,
  Input,
  Label,
  Content,
  Button,
  Grid,
  Col,
  Row,
  Icon,
  } from 'native-base';

function MyInput(props) {
  let prefix = '';
  if (Platform.OS === 'android') {
    prefix = '  ';
  }
  return <Input {...props} defaultValue={prefix + (props.defaultValue || '').toString()} placeholder={prefix + (props.placeholder || '').toString()} />;
}
export default ctx => (
  class AuthPage extends Component {
    static async action({ page, app, query = {} }) {
      return page
        .meta({
          path: '/auth',
          title: 'Авторизация',
          disableFooter: true,
          // wrapContent: null,
        })
        .component(AuthPage, { });
    }
getHeight(multiplier) {
    return {
        height: Dimensions.get('window').height*multiplier,
    }
}
getWidth(multiplier) {
    return {
        width: Dimensions.get('window').width*multiplier, 
    }
}

    render() {
      return (
        <View>
          {/* <Image style={{ height: 250 }} source={{ uri: user.avatar }} /> */}
<Grid style={{alignItems: 'center'}}>
    <Row style={[this.getHeight(0.2)]}></Row>
    <Row><Text>Добро пожаловать в <Text style={{color: '#C90DD3', fontWeight: 'bold', }}>NewNext!</Text></Text></Row>
    <Col style={[this.getWidth(0.98)]}>
          <Form>
            <Item stackedLabel>
              <Label>Email</Label>
              <MyInput defaultValue={'test@gmail.com'} />
            </Item>
            <Item stackedLabel>
              <Label>Пароль</Label>
              <MyInput defaultValue={'testtest'} secureTextEntry />
            </Item>
          </Form>
    </Col>
    <Row style={{paddingTop:10,}}>
              <Button bordered onPress={() => ctx.changeRoute('/messages')}>
                <Text style={{color: '#C90DD3', fontWeight: 'bold'}}>{'Войти'.toUpperCase()}</Text>
              </Button>
    </Row>
    <Row style={{paddingTop:10}}>
                <Button block onPress={() => ctx.changeRoute('/messages')}>
                <Text style={{color: 'white', fontWeight: 'bold', }}>Нет аккаунта? Присоединяйтесь</Text>
              </Button>

    </Row>
</Grid>
        </View>
        
      );
    }
  }
);
