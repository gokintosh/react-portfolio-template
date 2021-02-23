// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"

// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Gokul",
  headerTagline: [
    //Line 1 For Header
    "I turn ",
    //Line 2 For Header
    "☕ into",
    //Line 3 For Header
    "<code/>",
  ],
  //   Header Paragraph
  headerParagraph:
    "Hi, I am Gokul and I love code, coffee and cars...",

  //Contact Email
  contactEmail: "gokul.kannambally_balachandran@student.po.edu.pl",

  // End Header Details -----------------------

  // Work Section ------------------------
  projects: [
    {
      id: 1, //DO NOT CHANGE THIS (Please)😅
      title: "recipe-app", //Project Title - Add Your Project Title Here
      para:
        "Android recipe app created using java android SDK and firebase", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://directus.improvein.com/improvein/storage/uploads/00000000001.png",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/recipe-app",
    },
    {
      id: 2, //DO NOT CHANGE THIS (Please)😅
      title: "Notti App", //Project Title - Add Your Project Title Here
      para:
        "Nodejs notemaking app backend using express and mongodb", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/600/1*NFTgwZ_TUmceZnSHCundBw.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/notti-app-backend",
    },
    {
      id: 3, //DO NOT CHANGE THIS (Please)😅
      title: "Journey", //Project Title - Add Your Project Title Here
      para:
        "Journalling app", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://miro.medium.com/max/1250/1*l5GLNPRUp3uCorxeaAoTDg.jpeg",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/journey",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Expense Tracker", //Project Title - Add Your Project Title Here
      para:
        "Expense tracker spring boot backend using jwt authentication, Postgresql and clean code practices.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://i.morioh.com/200716/2472b1cf.webp",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/expensetrackerapi",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "shope-e online store", //Project Title - Add Your Project Title Here
      para:
        "online Shopping app using spring boot and react", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/shop-e-online-store",
    },
    {
      id: 4, //DO NOT CHANGE THIS (Please)😅
      title: "Pro-Fit excercise tracking app", //Project Title - Add Your Project Title Here
      para:
        "excercise tracking app using java spring boot back end and kotlin android fron end", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "",
      //Project URL - Add Your Project Url Here
      url: "https://github.com/gokintosh/pro-fit",
    },
    

    /*
    If You Want To Add More Project just Copy and Paste This At The End (Update the id Respectively)
    ,{
        id: 5,
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------

  // About Secton --------------
  aboutParaOne:
    "https://drive.google.com/file/d/1tUIb5LoWUpHhEb8Fjfw837bdgknrXlaL/view?usp=sharing",
  aboutParaTwo:
    "Made in 🇮🇳 🍛, Exported to 🇵🇱 🥟",
  aboutParaThree:
    "I study Informatics(Computer Engineering) at Opole University Of Technology. Love traveling✈️ and adventure sports 🥊. In search of great team to work with.",
  aboutImage:
    "https://ibb.co/VMfM77F",

  //   End About Section ---------------------

  // Skills Section ---------------

  //   Import Icons from the top and link it here

  skills: [
    {
      id: 1,
      img: "https://img.icons8.com/color/48/000000/spring-logo.png",
      para:
        "I love working with spring boot. I have 1 year plus experience developing spring boot backend applications. I love the dependancy injection principle and security of spring boot applications.",
    },
    {
      id: 2,
      img: "https://img.icons8.com/ios-filled/50/000000/mysql-logo.png",
      para:
        "I use MySql for my relational database. I did also worked with postgresql and mongodb for some projects.",
    },
    {
      id: 3,
      img: "https://img.icons8.com/color/48/000000/java-duke-logo.png",
      para:
        "Two plus years working with java8 programming language.",
    },
    {
      id: 4,
      img: "https://img.icons8.com/bubbles/50/000000/react.png",
      para:
        "Experience creating React.js apps using react router and redux.",
    },
    {
      id: 5,
      img: "https://img.icons8.com/color/48/000000/docker.png",
      para:
        "familiar with docker commands and creating docker images for projects.",
    },
    {
      id: 6,
      img: codeIcon,
      para:
        "Love coding actively. Contributed to multiple opensource projects. Love leetcoding and attending hackathons.",
    },
  ],

  // End Skills Section --------------------------

  //   Promotion Section --------------------------

  promotionHeading: "Heading",
  promotionPara:
    "Yes I am a developer, but dont ask me to repair your computer. 'i can't !!!'. ",
  
  // End Promotion Section -----------------

  //   Contact Section --------------

  contactSubHeading: "Let's create your next experience together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/gokintosh" },
    {
      img:"https://img.icons8.com/cute-clipart/64/000000/linkedin.png",url: "https://www.linkedin.com/in/gokulkannamballybalachandran/" 
    },
   
    {
      img: instagramIcon,
      url: "https://www.instagram.com/gokulnair.xyz/",
    },
  ],

  // End Contact Section ---------------
}

// Thanks for using this template, I would love to hear from you contact me at hello@chetanverma.com
