import React, { Component } from 'react';
import {
  Image,
  View,
  Text,
  Platform,
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

    render() {
      return (
        <View>
          {/* <Image style={{ height: 250 }} source={{ uri: user.avatar }} /> */}
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

          <Text />
          <Grid>
            <Col />
            <Col>
              <Button onPress={() => ctx.changeRoute('/messages')}>
                <Text>Войти</Text>
              </Button>
            </Col>
            <Col />
          </Grid>

          {/* <Text style={{color: '#ff2ef0', borderBottomSize: 1, borderBottomStyle: 'dotted', borderBottomColor: '#ff2ef0'}}>
            Рассказать друзьям о приложении
          </Text>
          <Text style={{color: '#ff2ef0', borderBottomSize: 1, borderBottomStyle: 'dotted', borderBottomColor: '#ff2ef0'}}>
            О приложении
          </Text> */}
        </View>
      );
    }
  }
);
