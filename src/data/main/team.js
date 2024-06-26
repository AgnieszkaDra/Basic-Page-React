import cto from '../../../src/assets/images/cto.png';
import ceo from '../../../src/assets/images/ceo.png';
import cfo from '../../../src/assets/images/cfo.png';
import twitter from '../../../src/assets/images/team-twitter.png';
import facebook from '../../../src/assets/images/facebook.png'

export const team = {
   
    list: [
      {
        photo: cto,
        function: 'CTO',
        data: 'Johny B Good',
        description: 'The brains behind the whole operation',
        icons: {
          twitter:twitter,
          facebook:facebook
        }
      },
      {
        photo: ceo,
        function: 'CEO',
        data: 'Roll Over Beethoven',
        description: 'The one that puts it all together',
        icons: {
          twitter:twitter,
          facebook:facebook
        }
      },
      {
        photo: cfo,
        function: 'CFO',
        data: 'Chuck Berry',
        description: 'The guy with his hand on the wallet',
        icons: {
          twitter:twitter,
          facebook:facebook
        }
      },
    ],
    addYou: [
        {
        id: "Yourself",
        photo: "",
        function: '',
        data: '',
        description: '',
        icons: false
        },
    ]
  }
  
  export default team
