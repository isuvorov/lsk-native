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
export default ctx => ([
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
        action: ctx.pages.chat.action,
        // action: ctx.pages.user.action,
        // action: ctx.pages.messages.action,
      },
      {
        path: '/user',
        action: ctx.pages.user.action,
        // action: ctx.pages.messages.action,
      },
      {
        path: '/messages',
        action: ctx.pages.messages.action,
      },
      {
        path: '/chat',
        action: ctx.pages.chat.action,
      },
      {
        path: '/search',
        action: ctx.pages.search.action,
      },
      {
        path: '/searchUsers',
        action: ctx.pages.searchUsers.action,
      },
      {
        path: '/contacts',
        action: ctx.pages.contacts.action,
      },
      {
        path: '/profile',
        action: ctx.pages.profile.action,
      },
    ],
  },
]);
