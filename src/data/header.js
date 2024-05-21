import logo from '../../src/assets/images/logo.png';
import screen from '../../src/assets/images/hero.jpg';

export const header = {
  logo: logo,
  headline: 'The best solution for your website concept with Nova',
  description: 'No big investements at a start',
  screen: screen,
  menu: {
    0: {
      id: 0, 
      name: '(Root)',
      childIds: [1, 7, 8, 9, 10]
    },
    1: {
      id: 1, 
      name: 'Solutions',
      childIds: [2, 3, 4, 5, 6],
      arrowDown: true
    }, 
    2: {
      id: 2,
      name: 'For small business',
      childIds: [16]
    },
    3: {
      id: 3,
      name: 'Online store',
      childIds: [17]
    },
    4: {
      id: 4,
      name: 'Blogging',
      childIds: [19]
    },
    5: {
      id: 5,
      name: 'Enterprise solutions',
      childIds: [20]
    },
    6: {
      id: 6,
      name: 'Hire a professional',
      childIds: [21]
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
      childIds: [11, 12, 13, 14, 15],
      arrowDown: true
    },
    11: {
      id: 11,
      name: 'Nova Blog',
      childIds: [22]
    },
    12: {
      id: 12,
      name: 'Knowledge base',
      childIds: [23]
    },
    13: {
      id: 13,
      name: 'Guides',
      childIds: [24]
    },
    14: {
      id: 14,
      name: 'Product updates',
      childIds: [25]
    },
    15: {
      id: 15,
      name: 'Success stories',
      childIds: [26]
    },
    16: {
      id: 16,
      name: 'From business card websites to landing pages',
      childIds: []
    },
    17: {
      id: 17,
      name: 'A fast and easy way to grow sales',
      childIds: []
    },
    18: {
      id: 18,
      name: 'Everything you need to start a blog',
      childIds: []
    },
    19: {
      id: 19,
      name: 'A fast and easy way to grow sales',
      childIds: []
    },
    20: {
      id: 20,
      name: 'For those who want to sell websites with Nova',
      childIds: []
    },
    21: {
      id: 21,
      name: 'Order a website from Nova studio',
      childIds: []
    },
    22: {
      id: 22,
      name: 'Tips, inspirations, useful articles and more',
      childIds: []
    },
    23: {
      id: 23,
      name: 'Our answers to your most common questions',
      childIds: []
    },
    24: {
      id: 24,
      name: 'Tutorials for different types of websites',
      childIds: []
    },
    25: {
      id: 25,
      name: 'Information on Nova`s newest features',
      childIds: []
    },
    26: {
      id: 26,
      name: 'Inspirational stories from our clients',
      childIds: []
    },
  }
}

export default header

// https://weblium.com/create-a-travel-website