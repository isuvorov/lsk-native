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

import Layout from './Layout';
export default [
  {
    path: '/',
    action({ next, page }) {
      return page
      // .meta({
      //   title: 'Админ Панель',
      //   url: '/admin',
      // })
      .layout(Layout)
      .next(next);
    },
    children: [
      {
        path: '/',
        action: ({ app, page }) => (
          page.component(
            <Text>
              Home
            </Text>,
          )
        ),
      },
      {
        path: '/messages',
        action: ({ page }) => (
          page.component(
            <Text>
              messages
            </Text>,
          )
        ),
      },
      {
        path: '/search',
        action: ({ page }) => (
          page.component(
            <Text>
              search
            </Text>,
          )
        ),
      },
      {
        path: '/contacts',
        action: ({ app }) => (
          <Text>
            contacts
          </Text>
        ),
      },
      {
        path: '/profile',
        action: ({ app }) => (
          <Text>
            profile
          </Text>
        ),
      },
      {
        path: '/contacts',
        async action({ page, app }) {
          // console.log(11111);
          // console.log({page}, page.meta);
          const res = await app.api.fetch(url);
          // console.log(22222);

          // return <Text>qwe</Text>

          // console.log({res});
          // const users = new uapp.stores.Users();
          // await users.fetchUsers(20);
          // console.log('page', {page});
          const users = res.data;
          // console.log(res.data);
          return page
            .meta({
              title: 'Список пользователей',
              description: 'Все пользователи',
              url: '/cabinet/users',
            })
            .component(
              <List
                dataArray={users}
                renderRow={item =>
                  <ListItem
                    // onPress={changeRoute('user')}
                    avatar
                  >
                    <Left>
                      <Thumbnail source={{ uri: item.avatar || item.profile && item.profile.avatar }} />
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
              />,
            );
            // .component(Users, { users });
        },
      },
      {
        path: '/contacts2',
        action: async ({ page }) => (
          <List
            dataArray={data.contacts}
            renderRow={item =>
              <ListItem
                // onPress={changeRoute('user')}
                avatar
              >
                <Left>
                  <Thumbnail source={{ uri: item.avatar }} />
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
      },
    ],
  },
];
