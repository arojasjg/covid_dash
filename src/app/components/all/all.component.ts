import { Component, OnInit } from '@angular/core';
import { AllService } from '../../services/all.service';
import { CountryStat, DEFAULT_GLOBAL_STATS, GlobalStats } from '../../models/all.model';




@Component({
  selector: 'app-all',
  templateUrl: './all.component.html',
  styleUrls: ['./all.component.scss']
})
export class AllComponent implements OnInit {



  countryStats: CountryStat[] = [];
  globalStats: GlobalStats  = DEFAULT_GLOBAL_STATS;

  constructor(private allService: AllService) { }

  ngOnInit(): void {
    this.allService.getAll().subscribe((alls) => {
      this.countryStats = alls;
      this.globalStats = this.allService.sumStats(this.countryStats);
    })
  }

  

}
