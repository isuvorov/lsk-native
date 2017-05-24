export default function () {
  return {
    contacts: require('./contacts').default(...arguments),
    messages: require('./messages').default(...arguments),
    chat: require('./chat').default(...arguments),
    profile: require('./profile').default(...arguments),
    search: require('./search').default(...arguments),
    user: require('./user').default(...arguments),
    auth: require('./auth').default(...arguments),
    searchUsers: require('./searchUsers').default(...arguments),
  };
}
