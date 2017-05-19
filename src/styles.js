import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';


const debug = () => {
  return {
    borderColor: 'red',
    borderWidth: 1,
    backgroundColor: '#eee',
  }
}



export default StyleSheet.create({
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
