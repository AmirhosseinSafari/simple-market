import { Component, OnInit } from '@angular/core';
import { CollectableService } from 'app/shared/collectable.service';
import { Collectable } from 'app/shared/collectable.model';

@Component({
  selector: 'app-market',
  templateUrl: './market.component.html',
  styleUrls: ['./market.component.css']
})
export class MarketComponent implements OnInit {

  collectables: Collectable[] = [];
  
  onAddToCollection(item: Collectable){
    this.collectableService.addToCollection(item);
  }

  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
