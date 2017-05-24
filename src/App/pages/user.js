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
  class UserPage extends Component {
    static async action({ page, userId, app, query = {} }) {
      let user = {};

      try {
        user = await app.stores.User.getById(query._id || userId);
      } catch (err) {
        console.log({ err });
      }

      return page
        .meta({
          path: '/contacts',
          title: user.name,
          subtitle: user.online ? 'Сейчас в сети' : 'Оффлайн',
          back: {
            route: '/contacts',
          },
          // wrapContent: null,
        })
        // .layout()
        .component(UserPage, { user });
    }

    render() {
      const { user } = this.props;
      return (
        <View>
          <Image style={{ height: 250 }} source={{ uri: user.avatar }} />
          <Form>
            <Item stackedLabel>
              <Label>Имя</Label>
              <MyInput value={user.name} disabled />
            </Item>
            <Grid>
              <Col>
                <Item stackedLabel>
                  <Label>Пол</Label>
                  <MyInput value={user.profile.gender || 'Мужской'} disabled />
                </Item>
              </Col>
              <Col>
                <Item stackedLabel>
                  <Label>Пол</Label>
                  <MyInput value={`${user.profile.age || '18'} лет`} disabled />
                </Item>
              </Col>
            </Grid>
            <Grid>
              <Col>
                <Item stackedLabel>
                  <Label>Страна</Label>
                  <MyInput value={user.profile.country || 'Россия'} disabled />
                </Item>
              </Col>
              <Col>
                <Item stackedLabel>
                  <Label>Город</Label>
                  <MyInput value={user.profile.city || 'Коломна'} disabled />
                </Item>
              </Col>
            </Grid>
            <Item stackedLabel>
              <Label>Сфера деятельности</Label>
              <MyInput placeholder="Фотограф" />
            </Item>
          </Form>
          <Grid>
            <Col>
              <Button transparent full vertical>
                <Icon name="person" />
                <Text>Navigate</Text>
              </Button>
            </Col>
            <Col>
              <Button transparent full vertical>
                <Icon name="chatbubbles" />
                <Text>Contact</Text>
              </Button>
            </Col>
          </Grid>
        </View>
      );
    }
    render2() {
      const { user } = this.props;
      return (

        <ParallaxScrollView
          backgroundColor="white"
          // backgroundSpeed={100}
          contentBackgroundColor="white"
          parallaxHeaderHeight={250}
          renderBackground={() => (
            <Image style={{ height: 250 }} source={{ uri: user.avatar }} />
          )}
        >
          <Content>
            <Form>
              <Item stackedLabel>
                <Label>Имя</Label>
                <MyInput value={user.name} disabled />
              </Item>
              <Grid>
                <Col>
                  <Item stackedLabel>
                    <Label>Пол</Label>
                    <MyInput value={user.profile.gender || 'Мужской'} disabled />
                  </Item>
                </Col>
                <Col>
                  <Item stackedLabel>
                    <Label>Пол</Label>
                    <MyInput value={`${user.profile.age || '18'} лет`} disabled />
                  </Item>
                </Col>
              </Grid>
              <Grid>
                <Col>
                  <Item stackedLabel>
                    <Label>Страна</Label>
                    <MyInput value={user.profile.country || 'Россия'} disabled />
                  </Item>
                </Col>
                <Col>
                  <Item stackedLabel>
                    <Label>Город</Label>
                    <MyInput value={user.profile.city || 'Коломна'} disabled />
                  </Item>
                </Col>
              </Grid>
              <Item stackedLabel>
                <Label>Сфера деятельности</Label>
                <MyInput placeholder="Фотограф" />
              </Item>
            </Form>
            {/* <Grid>
              <Col>
                <Button active vertical>
                  <Icon name="person" />
                  <Text>Navigate</Text>
                </Button>
              </Col>
              <Col>
                <Button vertical>
                  <Icon name="chatbubbles" />
                  <Text>Contact</Text>
                </Button>
              </Col>
            </Grid> */}
          </Content>
        </ParallaxScrollView>
      );
    }
  }
);
