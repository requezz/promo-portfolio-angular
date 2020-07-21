import { Component } from '@angular/core';
import {StoreTestService} from "./store-test.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

 clicker = (item) => {
    console.log(item);
  }

 forCommunication() {
    return this.service.forCommunication;
  }

  forHeader() {
    return this.service.forHeader;
  }

  forAffordable() {
    return this.service.forAffordable;
  }

  forAboutMe() {
      return this.service.forAboutMe;
    }

  forQuality() {
      return this.service.forQuality;
    }

  forSkills() {
      return this.service.forSkills;
    }

  forWorks() {
      return this.service.forWorks;
    }

  forOpportunities() {
        return this.service.forOpportunities;
      }

  forFooter() {
        return this.service.forFooter;
      }


  title = 'Promo';

  prefix: any;
  pathToAssets = 'http://cdn.ramman.net/flexy-view/islam/promo/1.01/assets/';

    constructor(private service: StoreTestService) {
    }
  }

