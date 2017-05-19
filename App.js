import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import {KeyboardAwareScrollView as ScrollView} from 'react-native-keyboard-aware-scrollview'

function cropText(text = '', size = 200) {
  return text.length > size ? text.substr(0, size) : text;
}

const debug = () => {
  return {
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#eee',
  }
}

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  toolbar: {
    ...debug(),
  },
  menubar: {
    ...debug(),
  },


  layoutRoot: {
    flex: 1,
    backgroundColor: '#ebeef0',
  },
  layoutStatusbar: {
    backgroundColor: '#428bca',
    height: 20,
  },
  layoutBody: {
    flex: 1,
    backgroundColor: '#ebeef0',
  },
  layoutBodyInner: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
  },

  item: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderBottomColor: '#eee',
    borderBottomWidth: 1,
    paddingTop: 10,
    paddingBottom: 10,

    minHeight: 60,
  },
  itemContent: {
    flex: 1,
    flexDirection: 'column',
    marginLeft: 10,
    justifyContent: 'center',
  },
  itemTitle: {
    // ...debug(),
    fontWeight: 'bold'
  },
  itemText: {
    // ...debug(),

  },
  avatarWrapper: {
    borderColor: 'red',
    borderWidth: 2,
    padding: 2,
    borderRadius: 36,
  },
  avatarWrapper_online: {
    borderColor: 'green',
  },
  avatarWrapper_offline: {
    borderColor: 'gray',
  },
  avatar: {
    width: 64,
    height: 64,
    borderRadius: 32,
    // flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

class Avatar extends React.Component {
  render() {

    return (
      <View style={[styles.avatarWrapper, this.props.online ? styles.avatarWrapper_online : styles.avatarWrapper_offline]}>
        <Image
          // style={{width: 64, height: 64}}
          style={styles.avatar}
          source={{uri: this.props.src}}
        />
      </View>
    );
  }
}
{/* <TouchableOpacity
    onPress={() => onPress()}
    style={styles.container}
    activeOpacity={0.5}
  >
    <Text style={styles.text}>{children}</Text>
  </TouchableOpacity> */}
class Item extends React.Component {
  render() {
    const { avatar, text, name, online } = this.props.item;
    return (
      <TouchableOpacity
        style={styles.item}
        activeOpacity={0.8}
      >
        <Avatar src={avatar} online={online} />
        <View style={styles.itemContent}>
          <Text style={styles.itemTitle}>
            {name}
          </Text>
          <Text style={styles.itemText}>
            {cropText(text)}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

class List extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.list}>
        {items.map((item, key) => (
          <Item key={key} item={item} />
        ))}
      </View>
    );
  }
}
class Toolbar extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View style={styles.toolbar}>
      </View>
    );
  }
}
class Menubar extends React.Component {
  render() {
    return (
      <View style={styles.menubar}>

      </View>
    );
  }
}

class Layout extends React.Component {
  render() {
    const { items } = this.props;
    return (
      <View
        style={styles.layoutRoot}
      >
        <View
          style={styles.layoutStatusbar}
        >
        </View>
        <View
          style={styles.layoutBody}
        >
        <ScrollView>
          <View
            style={styles.layoutBodyInner}
          >
              {this.props.children}
          </View>
        </ScrollView>
        </View>
      </View>
    );
  }
}



export default class App extends React.Component {
  render() {

    const items = [
      {
        name: 'Casey Naistat',
        online: true,
        avatar: 'https://pp.userapi.com/c638022/v638022448/355b1/V7wI1aXSexQ.jpg',
        text: 'text1',
      },
      {
        name: 'Casey Naistat2',
        avatar: 'https://pp.userapi.com/c639119/v639119296/23cae/55956uMcM4Q.jpg',
        text: 'textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads ',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
      {
        name: 'Casey Naistat3',
        online: true,
        avatar: 'https://pp.userapi.com/c626219/v626219081/6d010/SpcJjacAMNg.jpg',
        text: 'text3',
      },
      {
        name: 'Casey Naistat4',
        avatar: 'https://cs541600.userapi.com/c637816/v637816411/7179a/qRuWGz-O8TM.jpg',
        text: '',
      },
    ]

    return (
      <Layout>
        <Toolbar />
        <List items={items} />
        <Menubar />
      </Layout>
    );
  }
}
