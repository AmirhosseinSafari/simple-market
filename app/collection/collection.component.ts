import { Component, OnInit } from '@angular/core';
import { CollectableService } from 'app/shared/collectable.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectables = [];
  constructor(private collectableService: CollectableService) { }

  ngOnInit() {
    this.collectables = this.collectableService.getCollectables();
  }

}
