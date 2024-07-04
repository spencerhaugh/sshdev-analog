import { Component } from "@angular/core";
import ProjectComponent from "../../components/project/project.component";
import { NgFor } from "@angular/common";

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
      imgAsset: '',
      link: 'http://www.poorlydrawnpokemon.com',
      repoLink: 'https://github.com/spencerhaugh/monsters',
      body: 'This was built in NextJS, a server side rendering\n' +
        '                framework that uses React under the hood. It allows admins to upload files, and\n' +
        '                also features search functionality, and a dark mode switcher. It is written in\n' +
        '                TypeScript. I used a Postgres SQL database to store user and image data, and\n' +
        '                Cloudinary to host image file uploads, as well as Strapi, a headless CMS for\n' +
        '                easy admin for my client. It is also fully mobile-ready.\n' +
        '                This project is deployed via Railway.',
      technologies: [ 'NextJS', 'React', 'TypeScript', 'Postgres', 'Strapi',
                'Material UI', 'Railway']
    },
    {
      name: 'A different app',
      description: 'A full stack image hosting platform',
      imgAsset: '',
      link: 'http://www.poorlydrawnpokemon.com',
      repoLink: 'https://github.com/spencerhaugh/monsters',
      body: 'This was built in NextJS, a server side rendering\n' +
        '                framework that uses React under the hood. It allows admins to upload files, and\n' +
        '                also features search functionality, and a dark mode switcher. It is written in\n' +
        '                TypeScript. I used a Postgres SQL database to store user and image data, and\n' +
        '                Cloudinary to host image file uploads, as well as Strapi, a headless CMS for\n' +
        '                easy admin for my client. It is also fully mobile-ready.\n' +
        '                This project is deployed via Railway.',
      technologies: [ 'NextJS', 'React', 'TypeScript', 'Postgres', 'Strapi',
                'Material UI', 'Railway']
    }
  ];

}
