import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  courses = [
    {
      'id': 1,
      'name': 'Angular Fundamentals from Scratch & Unit/Integration Testing',
      'des': 'Get into Web Development with solid understanding of Angular Basics and write Tests for your code to be White Box tester',
      'img': '/assets/img/angular.jpg',
      'link':'https://nttdata.udemy.com/course/angular-fundamentals-unit-integration-testing/'
    },
    {
      'id': 2,
      'name': 'Front End Web Development with open source Dojo Toolkit.',
      'des': 'The only DOJO toolkit course on this platform. Write javascript code using components of DOJO toolkit from the scratch.',
      'img': '/assets/img/frontend.jpg',
      'link':'https://nttdata.udemy.com/course/dojo-toolkit-javascript-library/'
    },
    {
      'id': 3,
      'name': 'The Complete 2021 Web Development Bootcamp',
      'des': 'Become a full-stack web developer with just one course. HTML, CSS, Javascript, Node, React, MongoDB and more!',
      'img': '/assets/img/full-stack.jpg',
      'link':'https://nttdata.udemy.com/course/the-complete-web-development-bootcamp/'
    },
    {
      'id': 4,
      'name': 'Jira for Beginners - Detailed Course to Get Started in Jira',
      'des': 'Learn how to manage projects with Jira for agile teams in this comprehensive course from Microsoft expert, Simon Sez IT!',
      'img': '/assets/img/jira.jpeg',
      'link':'https://nttdata.udemy.com/course/jira-for-beginners-detailed-course-to-get-started-in-jira-online/'
    },
    {
      'id': 5,
      'name': 'Docker & Kubernetes: The Practical Guide',
      'des': 'Learn Docker, Docker Compose, Multi-Container Projects, Deployment and...',
      'img': '/assets/img/docker.jpg',
      'link':'https://nttdata.udemy.com/course/docker-kubernetes-the-practical-guide/'
    },
    {
      'id': 6,
      'name': 'Typescript: The Complete Developer\'s Guide',
      'des': 'Master Typescript by learning popular design patterns and building complex projects. Includes React and Express!',
      'img': '/assets/img/typescript.jpg',
      'link':'https://nttdata.udemy.com/course/typescript-the-complete-developers-guide/'
    },
    {
      'id': 7,
      'name': 'Vue - The Complete Guide',
      'des': 'Vue.js is an awesome JavaScript Framework for building Frontend Applications! VueJS mixes the Best of Angular + React!',
      'img': '/assets/img/vue.jpg',
      'link':'https://nttdata.udemy.com/course/vuejs-2-the-complete-guide/'
    },
    {
      'id': 8,
      'name': 'YouTube Marketing 2021: YouTube SEO & YouTube Algorithms',
      'des': 'YouTube marketing to grow your video views & subscribers with YouTube SEO, recommendations, YouTube ads & YouTube live',
      'img': '/assets/img/youtube.jpg',
      'link':'https://nttdata.udemy.com/course/youtube-success-tips-how-to-get-views/'
    },
    {
      'id': 9,
      'name': 'Facebook Ads & Facebook Marketing MASTERY 2021 | Coursenvy ®',
      'des': 'Facebook Marketing from beginner to advanced! Join 100,000+ students who MASTERED Facebook and are Facebook Ads experts!',
      'img': '/assets/img/facebook.jpeg',
      'link':'https://nttdata.udemy.com/course/facebook-ads-facebook-marketing-mastery-guide/'
    },
  ]
}
