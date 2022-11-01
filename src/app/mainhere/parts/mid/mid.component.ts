import { Component, OnInit } from '@angular/core';
import { trigger,state,transition,animate,style, stagger,query} from '@angular/animations' ;

@Component({
  selector: 'app-mid',
  templateUrl: './mid.component.html',
  styleUrls: ['./mid.component.scss'],
  animations : [
        trigger('skillset',[
          state('atStart', style({transform: 'translateX(-400px)'})),
          state('atEnd', style({ transform: 'translateX(0)'})),
          transition('atStart => atEnd', animate('2s')),
          transition('atEnd => atStart', animate('1s'))
        ]),
        trigger('workExperience',[
          state('atStart', style({transform: 'translateX(400px)'})),
          state('atEnd', style({ transform: 'translateX(0)'})),
          transition('atStart => atEnd', animate('2s')),
          transition('atEnd => atStart', animate('1s'))
        ])
  ]
})
export class MidComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.toggle()
    }, 1000);
     
  }
 
  device=screen.width;
  here=true;
  
  toggle(){
    this.here=!this.here;
  }
 
  public skills = [
    { name: "React.js", percentage: 95, imagelink: "https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-512.png" },
    { name: "Angular", percentage: 85, imagelink: "https://angular.io/assets/images/logos/angularjs/AngularJS-Shield.svg" },
    { name: "microsoft PowerApps", percentage: 90, imagelink: "https://static.wixstatic.com/media/9d1732_bb250bfce7a348fdaa9cc011f988aec2~mv2.png/v1/fill/w_248,h_240,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/logo%20power%20apps.png" },
    { name: "Django Framework", percentage: 80, imagelink: "https://static.djangoproject.com/img/logos/django-logo-positive.png" },
    { name: "Python DataScience", percentage: 80, imagelink: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png" }
  ];

  public Experience = [
    {
      role: "Software Trainee", companyname: "Karya Technologies Pvt. Ltd.", duration: "mar-2022 - present",
      discription: ["wrote clear , clean code for various projects",
                  "Created interactive websites with software development department using software frameworks",
                  "coded using HTML,CSS and JavaScript to develop features for both mobile and desktop platforms"]
    },
    {
      role: "Customer Support Associate", companyname: "Teleperformance India", duration: "march-2020 - mar-2022",
      discription: ["Responded to customer calls and emails to answer questions about products and services",
                    "Developed and actualized customer service initiative to decrease wait times",
                    "Improved customer satisfication ratings by addressing issues and fostering timely resolution",
                    ]
    }
  ];

  public Studies=[ 
    {studied:"Bachelor of Engineering",field:"ECE", duration:"jul-2015 - Mar-2019",percentage:61,place:"Sri Balaji Chockalingam Engineering College , Arni"},
    {studied:"HSC",field:"Bio+Maths",duration:"jun-2014 - Apr-2015", percentage:64,place:"Goverment Boys Higher Secondary School, Arni."  },
    {studied:"SSLC",field:"General",duration:"jun-2012 - Apr-2013", percentage:76,place:"Goverment Boys Higher Secondary School, Arni."  }  
  ];

  public projects=[
    {language:"React.js",samples:[{typename:"eCommerce Site", link:"https://naveen0013.github.io/esite/",icon:"shopping_cart"},
                                  {typename:"toDoList App" , link:"https://naveen0013.github.io/todo/",icon:"done_all"}]},
    {language:"Angular",samples:[{typename:"Notepad App", link:"https://naveen0013.github.io/notes/",icon:"note_add"},
                                  {typename:"Calculator App" , link:"https://naveen0013.github.io/calci/",icon:"calculate"},
                                  {typename:"eCommerce App" , link:"https://naveen0013.github.io/pettikadai/",icon:"shopping_cart"},
                                  {typename:"myPortfolio" , link:"https://naveen0013.github.io/portfolio/",icon:"explore"}
                                ]},
    {language:"Django",samples:[{typename:"Overall WebSite" , link:"https://tinyurl.com/naveenpetterprojects",icon:"stars"}]}
  ];

  public others:any=[
    {id:1,name:"Certification",contents:[{course:"Python DataScience",mode:"offline",place:"NIIT,Vellore."},
                                         {course:"Django Framework",mode:"offline",place:"FITA, Chennai"}]},
    {id:2,name:"Hobbies",contents:["Meme Creation","Watching Movies","Listening Songs"]},
    {id:3,name:"Languages",contents:[{language:"Tamil",level:"Native"},{language:"English",level:"Advanced"},
                                    {language:"Telugu",level:"Beginner"}]}
  ]


}
