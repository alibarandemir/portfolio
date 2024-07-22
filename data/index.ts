interface NavItemType {
    name: string;
    link: string;
  }
export const navItems:NavItemType[]= [
    {name:"Home",link:"#home"},
    {name:"About",link:"#about"},
    {name:"Projects",link:"#projects"},
    
    {name:"Contact",link:"#contact"},
    {name:"Resume",link:"#resume"},
]


export const projects=[
    {
        name:"Notes App",
        img_url:"",
        techs:[{
            techName:"React",
            techImage:"/images/react.svg",
        },{
            techName:"Nodejs",
            techImage:"/images/nodejs.svg",
        },{
            techName:"MongoDB",
            techImage:"/images/mongodb.png",
        },
        {
            techName:"Redux",
            techImage:"/images/redux.png",
        },
        {
            techName:"ExpressJS",
            techImage:"/images/expressjs.svg",
        }
    
        ],
        github_url:"https://github.com/alibarandemir/notes-app-mern",
        live_url:"",

    },
    {
        name:"Your Focus",
        img_url:"",
        techs:[{
            techName:"React",
            techImage:"/images/react.svg",
        },{
            techName:"Firebase",
            techImage:"/images/firebase.svg",
        },
    
        ],
        github_url:"https://github.com/alibarandemir/your-focus",
        live_url:"https://your-focus.vercel.app/",

    },

    {
        name:"Talent Sourcing System",
        img_url:"/images/talent_sourcing_1.png",
        techs:[{
            techName:"React",
            techImage:"/images/react.svg",
        },{
            techName:"MongoDB",
            techImage:"/images/mongodb.png",
        },
        {
            techName:"Nodejs",
            techImage:"/images/nodejs.svg",
        },
        {
            techName:"ExpressJS",
            techImage:"/images/expressjs.svg",
        }
    
        ],
        github_url:"https://github.com/alibarandemir/talent-sourcing-system",
        live_url:"https://your-focus.vercel.app/",

    },
    {
        name:"Coming Soon",
        img_url:"",
        techs:[
        ],
        github_url:"",
        live_url:"",
    },
    {name:"Coming Soon",
        img_url:"",
        techs:[
    
        ],
        github_url:"",
        live_url:"",},

]