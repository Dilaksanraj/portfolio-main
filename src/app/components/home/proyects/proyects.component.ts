import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-proyects',
  templateUrl: './proyects.component.html',
  styleUrls: ['./proyects.component.scss']
})
export class ProyectsComponent implements OnInit {
  Projects = [
    {
      imgs:[
        '../../../../assets/images/e-commerce/Screenshot.png',
        '../../../../assets/images/e-commerce/Screenshot1.png',
        '../../../../assets/images/e-commerce/Screenshot2.png',
        '../../../../assets/images/e-commerce/Screenshot3.png'],
      Title:'E-commerce',
      Description:`N. S. Ratnam Brother’s in Vavuniya district. which does not have any web-based system to do their
                    functional activities. Organization use manual file system to record their records and maintain their records. 
                    All orders, it could be sales order or purchase orders are records using manual file system. 
                    Organization uses MS Excel to records their accounts. 
                    Some of the accounts are recorded in the papers. This is the situation of the N. S. Ratnam Brother’s.`,
      Technologies:['Laravel','css','boostrap' , 'php', 'html'],
      ghLink:'https://github.com/Dilaksanraj',
      demoLink:'sadfdsa'
    },

    {
      imgs:[
        '../../../../assets/images/student-management/1.png',
        '../../../../assets/images/student-management/2.png',
        '../../../../assets/images/student-management/3.png',
      ],
      Title:'Action Learning(Student management)',
      Description:`It is very tedious to manage and control student's final year projects using manual or classical processes. 
      The main goal of this project is to build an integrated framework to handle all project activities.
      Project management system is a system for the management, tracking and supervision of students' final year projects.
      It is a web-based platform or framework that is useful to students, project managers and project managers.`,
      Technologies:['Laravel','Angular','SCSS','Angular-Material' , 'RxJS', 'PostgreSql', 'NG-ZORRO'],
      ghLink:'https://github.com/Dilaksanraj/action-learning',
      demoLink:'ddsf'
    },
    {
      imgs:[
      
        '../../../../assets/images//madhuram/1.png',
        '../../../../assets/images//madhuram/2.png',
        '../../../../assets/images//madhuram/3.png',
      ],
      Title:'Madhuram Event',
      Description:`Madhuram Event is a Event planer in Paris France, I have developed a simple website for that organization`,
      Technologies:['Angular','Css','Angular-Material' , 'RxJS','AWS','Tailwindcss'],
      ghLink:'https://github.com/Dilaksanraj/madhuram-event',
      demoLink:'https://github.com/Dilaksanraj/madhuram-event'
    },

  ]
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    navSpeed: 900,
    items: 1,
    autoplay: true,
    autoplayTimeout:3000
  }

  @ViewChild('imgContainer') imgContainer: ElementRef;


  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {



  }

debug(){

  this.imgContainer.nativeElement.scroll({
    top: this.imgContainer.nativeElement.scrollHeight,
    left: 0,
    behavior: 'smooth',    
  });
}

}
