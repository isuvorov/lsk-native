import React, { Component } from 'react';
import { Image, View } from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import ParallaxScrollView from 'react-native-parallax-scroll-view';


export default ctx => (
  class UserPage extends Component {
    static async action({ page, query = {} }) {
      let user = {};

      try {
        const res = await ctx.api.fetch('/api/module/user/get', {
          method: 'POST',
          body: {
            _id: query._id,
          },
        })
        user = res.data;
      } catch (err) {
        console.log({err});
      }

      return page
        .meta({
          path: '/search',
          title: user.name,
          subtitle: 'Сейчас в сети',
          back: {
            route: '/search',
          },
          wrapContent: null,
        })
        // .layout()
        .component(UserPage, { });
    }

    render() {
      const uri = 'https://cs541600.userapi.com/c836638/v836638029/a536/9ugPZhhty2E.jpg';
      return (
        <ParallaxScrollView
          backgroundColor="white"
          // backgroundSpeed={100}
          contentBackgroundColor="white"
          parallaxHeaderHeight={250}
          renderBackground={() => (
            <Image style={{ height: 250 }} source={{ uri }} />
          )}
        >
          <View style={{ height: 500 }}>
            <Text>Scroll me</Text>
          </View>
        </ParallaxScrollView>
      );
    }
  }
);
