export default function () {
  return {
    contacts: require('./contacts').default(...arguments),
    index: require('./index').default(...arguments),
    messages: require('./messages').default(...arguments),
    profile: require('./profile').default(...arguments),
    search: require('./search').default(...arguments),
    searchUsers: require('./searchUsers').default(...arguments),
  };
}

const titles = {
  messages: 'NewNext',
  contacts: 'Контакты',
  search: 'Поиск',
  searchUsers: 'Поиск',
  profile: 'Профиль',
};
