import _ from 'lodash';
function avatar() {
  return `https://randomuser.me/api/portraits/men/${_.random(99)}.jpg`
}
export default {
  messages: _.shuffle([
    {
      name: 'Casey Naistat',
      online: true,
      avatar: avatar(),
      text: 'text1',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat2',
      avatar: avatar(),
      text: 'textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads textasd asd asd asd dsa sad ads ads ads ',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'text3',
      info: _.random(1, 30) + ' апр.',
    },
    {
      name: 'Casey Naistat4',
      avatar: avatar(),
      text: '',
      info: _.random(1, 30) + ' апр.',
    },
  ]),
  contacts: _.shuffle([
    {
      name: 'Casey Naistat',
      online: true,
      avatar: avatar(),
      text: 'Санкт-Петербург, Россия, 25 лет',
    },
    {
      name: 'Casey Naistat2',
      avatar: avatar(),
      text: 'Тольятти, Россия, 15 лет',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'Нью-Йорк, США, 45 лет',
    },
  ]),
  search: _.shuffle([
    {
      name: 'Casey Naistat',
      online: true,
      avatar: avatar(),
      text: 'Санкт-Петербург, Россия, 25 лет',
    },
    {
      name: 'Casey Naistat2',
      avatar: avatar(),
      text: 'Тольятти, Россия, 15 лет',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'Нью-Йорк, США, 45 лет',
    },
    {
      name: 'Casey Naistat',
      online: true,
      avatar: avatar(),
      text: 'Санкт-Петербург, Россия, 25 лет',
    },
    {
      name: 'Casey Naistat2',
      avatar: avatar(),
      text: 'Тольятти, Россия, 15 лет',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'Нью-Йорк, США, 45 лет',
    },
    {
      name: 'Casey Naistat',
      online: true,
      avatar: avatar(),
      text: 'Санкт-Петербург, Россия, 25 лет',
    },
    {
      name: 'Casey Naistat2',
      avatar: avatar(),
      text: 'Тольятти, Россия, 15 лет',
    },
    {
      name: 'Casey Naistat3',
      online: true,
      avatar: avatar(),
      text: 'Нью-Йорк, США, 45 лет',
    },
  ])
}
