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
  return <Input {...props} value={prefix + (props.value || '').toString()}/>
}
export default ctx => (
  class ProfilePage extends Component {
    static async action({ page, app, userId, query = {} }) {
      let user = {};

      try {
        user = await app.stores.User.getById(query._id || userId);

      } catch (err) {
        console.log({ err });
      }

      return page
        .meta({
          path: '/profile',
          title: user.name,
          subtitle: user.online ? 'Сейчас в сети' : 'Оффлайн',
          back: {
            route: '/profile',
          },
          // wrapContent: null,
        })
        // .layout()
        .component(ProfilePage, { user });
    }

    render() {
      const { user } = this.props;
      return (
        <View>
          <Image style={{ height: 250 }} source={{ uri: user.avatar }} />
          <Form>
            <Item stackedLabel>
              <Label>Имя</Label>
              <Input defaultValue={user.name} />
            </Item>
            <Grid>
              <Col>
                <Item stackedLabel>
                  <Label>Пол</Label>
                  <Input defaultValue={user.profile.gender || 'Мужской'} />
                </Item>
              </Col>
              <Col>
                <Item stackedLabel>
                  <Label>Пол</Label>
                  <Input defaultValue={`${user.profile.age || '18'} лет`} />
                </Item>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <Item stackedLabel>
                  <Label>Страна</Label>
                  <Input defaultValue={user.profile.country || 'Россия'} />
                </Item>
              </Col>
              <Col>
                <Item stackedLabel>
                  <Label>Город</Label>
                  <Input defaultValue={user.profile.city || 'Коломна'} />
                </Item>
              </Col>
            </Grid>
            <Item stackedLabel>
              <Label>Сфера деятельности</Label>
              <Input placeholder="Фотограф" />
            </Item>
          </Form>
          <Text></Text>
          <Grid>
            <Col/>
            <Col>
              <Button >
                <Text>Сохранить</Text>
              </Button>
            </Col>
            <Col/>
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
