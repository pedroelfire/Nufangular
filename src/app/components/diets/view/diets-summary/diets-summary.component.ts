import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-diets-summary',
  templateUrl: './diets-summary.component.html',
  styleUrls: ['./diets-summary.component.scss']
})
export class DietsSummaryComponent {
  


  constructor(private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      console.log(params);
    }
  }

}
