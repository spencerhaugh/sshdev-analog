import {Component} from "@angular/core";
import ProjectComponent from "../../components/project/project.component";
import {NgFor} from "@angular/common";

interface Project {
  name: string;
  description: string;
  imgAsset: string;
  link: string;
  repoLink: string;
  body: string;
  technologies: string[];
}

@Component({
  standalone: true,
  imports: [
    ProjectComponent,
    NgFor
  ],
  template: `
    <div *ngFor="let project of projects">
      <ssh-project-component
        [name]="project.name"
        [description]="project.description"
        [imgAsset]="project.imgAsset"
        [link]="project.link"
        [repoLink]="project.repoLink"
        [body]="project.body"
        [technologies]="project.technologies"
      ></ssh-project-component>
    </div>
  `
})

export default class IndexPage {
  // TODO: get from api
  public projects: Project[] = [
    {
      name: 'Poorly Drawn Pokemon',
      description: 'A full stack image hosting platform',
      imgAsset: '/pokemon-app.png',
      link: 'http://www.poorlydrawnpokemon.com',
      repoLink: 'https://github.com/spencerhaugh/monsters',
      body: 'This was built in NextJS, a server side rendering\n' +
        '                framework that uses React under the hood. It allows admins to upload files, and\n' +
        '                also features search functionality, and a dark mode switcher. It is written in\n' +
        '                TypeScript. I used a Postgres SQL database to store user and image data, and\n' +
        '                Cloudinary to host image file uploads, as well as Strapi, a headless CMS for\n' +
        '                easy admin for my client. It is also fully mobile-ready.\n' +
        '                This project is deployed via Railway.',
      technologies: ['NextJS', 'React', 'TypeScript', 'Postgres', 'Strapi',
        'Material UI', 'Railway']
    },
    {
      name: 'Hangry',
      description: 'A sassy recipe suggestion app',
      imgAsset: '/hangry-app.png',
      link: 'https://mystifying-mccarthy-7142e6.netlify.app/',
      repoLink: 'https://github.com/spencerhaugh/hangry',
      body: 'Welcome to Hangry! This is version 2.0 of the project I first created as a software engineering bootcamp student in 2020. I was very happy with it at the time, but since then as I have continued to build my skills, I thought it would be fun to revist this project and apply this experience. Looking back at this app\'s original codebase was a journey. I remember the struggle and the frustration. I built this app originally in Vue (it was a project requirement to use a technology that was new to us), but for v2 I am using React. These days, at my day job I am building with Angular, and I wanted to make sure I stayed sharp in React as well.',
      technologies: ['React', 'Javascript', 'Material UI', '3rd Party API']
    },
    {
      name: 'Palette Maker',
      description: 'A custom color palette creator',
      imgAsset: '/color-app.png',
      link: 'https://cranky-murdock-697124.netlify.app/',
      repoLink: 'https://github.com/spencerhaugh/color-project',
      body: 'This was a really fun project! This React project implements advanced React patterns and UI functionality (like drag and drop, copy to clipboard, and transitions). The app utilizes concepts like Higher Order Components, Context, and Reducers for state management in React, Drag and Drop libraries, MaterialUI for component styling, and more.',
      technologies: ['React', 'Javascript', 'Material UI', 'Drag and Drop', 'React Transition Group', 'Responsive UI design']
    },
    {
      name: 'Wide Angle Podium',
      description: 'A podcast network website',
      imgAsset: '/wapn-app.png',
      link: 'https://www.wideanglepodium.com',
      repoLink: '',
      body: 'This fully deployed and revenue-generating site is built for a podcast network, built to collect recurring donations, and receiving data from multiple podcast RSS feeds. It is also integrated with the Stripe API and the Recurly API to process recurring monthly payments. There are complex form submissions to track donor activity, and secure pages for authorized users only.',
      technologies: ['Wordpress CMS', 'Payment processing', 'Stripe API', 'Recurly API', 'SSL', '3rd Party RSS feeds', 'Responsive design']
    },
  ];

}
