import logo from '../src/images/logo.png';
import screen from '../src/images/hero.jpg'
import { v4 as uuidv4 } from 'uuid';

export const header = {
  logo: logo,
  headline: 'The best solution for your website concept with Nova',
  description: 'No big investements at a start',
  screen: screen,
  // menu: [
  //   { id: uuidv4(), name: 'Solutions', idSection: 'solutions', elementList: true, className: 'menu__item--parent', parentSubList: true },
  //   { id: uuidv4(), name: 'For small business', childFor: 'Solutions' },
  //   { id: uuidv4(), name: 'From business card websites to landing pages', childFor: 'For small business', },
  //   { id: uuidv4(), name: 'Online store', childFor: 'Solutions' },
  //   { id: uuidv4(), name: 'A fast and easy way to grow sales', childFor: 'Online store' },
  //   { id: uuidv4(), name: 'Blogginng', childFor: 'Solutions' },
  //   { id: uuidv4(), name: 'Everything you need to start a blog', childFor: 'Blogginng' },
  //   { id: uuidv4(), name: 'Enterprise solutions', childFor: 'Solutions' },
  //   { id: uuidv4(), name: 'For those who want to sell websites with Nova', childFor: 'Enterprise solutions' },
  //   { id: uuidv4(), name: 'Hire a professional', childFor: 'Solutions' },
  //   { id: uuidv4(), name: 'Order a website from Nova studio', childFor: 'Hire a professional' },
  //   { id: uuidv4(), name: 'The team', idSection:'team', isOpen: true, elementList: true},
  //   { id: uuidv4(), name: 'Features', idSection:'features', isOpen: true, elementList: true },
  //   { id: uuidv4(), name: 'Pricing', idSection: 'pricing', isOpen: true, elementList: true },
  //   { id: uuidv4(), name: 'Resources', isOpen: true, elementList: true, className: 'menu__item--parent', parentSubList: true},
  //   { id: uuidv4(), name: 'Nova blog', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Tips, inspirations, useful articles and more', childFor: 'Nova blog'},
  //   { id: uuidv4(), name: 'Knowledge base', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Our answers to your most common questions', childFor: 'Knowledge base'},
  //   { id: uuidv4(), name: 'Guides', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Tutorials for different types of websites', childFor: 'Guides'},
  //   { id: uuidv4(), name: 'Product updates', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Information on Nova`s newest features', childFor: 'Product updates'},
  //   { id: uuidv4(), name: 'Success stories', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Inspirational stories from our clients', childFor: 'Success stories'},
  //   { id: uuidv4(), name: 'Made with Nova', childFor: 'Resources'},
  //   { id: uuidv4(), name: 'Examples of websites made on our platform', childFor: 'Made with Nova'},
  // ]
  menu: {
    0: {
      id: 0, 
      name: '(Root)',
      childIds: [1, 7, 8, 9, 10]
    },
    1: {
      id: 1, 
      name: 'Solutions',
      childIds: [2, 3, 4, 5, 6]
    }, 
    2: {
      id: 2,
      name: 'For small business',
      childIds: []
    },
    3: {
      id: 3,
      name: 'online store',
      childIds: []
    },
    4: {
      id: 4,
      name: 'Blogging',
      childIds: []
    },
    5: {
      id: 5,
      name: 'Enterprise solutions',
      childIds: []
    },
    6: {
      id: 6,
      name: 'Hire a professional',
      childIds: []
    },
    7: {
      id: 7,
      name: 'The team',
      childIds: []
    },
    8: {
      id: 8,
      name: 'Features',
      childIds: []
    },
    9: {
      id: 9,
      name: 'Pricing',
      childIds: []
    },
    10: {
      id: 10,
      name: 'Resources', 
      childIds: [11, 12, 13, 14, 15]
    },
    11: {
      id: 11,
      name: 'Nova Blog',
      childIds: []
    },
    12: {
      id: 12,
      name: 'Knowledge base',
      childIds: []
    },
    13: {
      id: 13,
      name: 'Guides',
      childIds: []
    },
    14: {
      id: 14,
      name: 'Product updates',
      childIds: []
    },
    15: {
      id: 15,
      name: 'Success stories',
      childIds: []
    },
  }

  // https://weblium.com/create-a-travel-website
}


export default header

