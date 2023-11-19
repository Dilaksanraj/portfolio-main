import { Component, OnInit } from '@angular/core';
import { AnalyticsService } from 'src/app/services/analytics/analytics.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  Experiences: any[] = [
    {
      Tab: 'Proitzen',
      Title: 'Software Engineer',
      Date: 'Dec 2018 – Aug 2021',
      Description: [
        `Collaborating	with	a	team	of	developers	to	create	a	childcare	platform	using	PHP and	Angular.`,
        `Implementing	 unit	 tests	 for	 all	 modules	 in	 the	 application	 stack	 to	 ensure	 code	
        quality.`,
        `Creating	RESTful	APIs	consumed	by	frontend	applications	written	in	Angular.`
        
      ]
    },
    {
      Tab: 'CFM - Capital Fund Management',
      Title: 'Front-end developer (Angular)',
      Date: 'Oct 2022 - Apr 2023 (6 month)',
      Description: [
        `Implemented	 complex	 asynchronous	 data	 flows	 using	 RxJS	 observables	 and	
        operators	in	Angular	applications,	ensuring	efficient	handling	of	data	streams`,
        `Designing	 user	 experience	 interface	 UI/UX	 strategy	 and	 UI	 requirements	 and	
        converting	findings	into	UI	designs.`,
        `Writing	 clean,	modular,	 and	maintainable	 code	 following	industry	 best	 practices	
        and	coding	standards.`,
        `Collaborating	 with	 backend	 developers	 to	 integrate	 frontend	 components	 with	
        server-side	logic	and	APIs.`,
        `Working	with REST/Web	APIs,	testing	them	using	Postman,	and	integrating	them	
        with	Angular	$HTTP	service	calls	for	data	binding.`,
        `Conducting	unit	testing	using	Jasmine/Karma.`,
        `Documenting	 technical	 specifications,	 system	 architecture,	 and	 development	
        processes	for	future	reference	and	knowledge	sharing`,
        `Working	with	AG-Grid.`
      ]
    },
    {
      Tab: 'Msc (Computer sceince)',
      Title: 'Master of sceince (Msc Computer sceince)',
      Date: '2021 — 2022',
      Description: [
        'I graduated from the Faculty of Software Engineering at University of EPITA',
        
      ]
    },
    {
      Tab: 'Bsc (Information technology)',
      Title: 'Bacholer of sceince  (Bsc Information technology)',
      Date: '2016 — 2019',
      Description: [
        'I graduated from the Faculty of Information technology at University of Sri Jayewardenepura',
        
      ]
    }
  ];
  active = 0
  
  constructor(
    public analyticsService: AnalyticsService
  ) { }

  ngOnInit(): void {
  }

}
