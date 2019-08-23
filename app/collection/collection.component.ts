import { Component, OnInit } from '@angular/core';
import { CollectableService } from 'app/shared/collectable.service';
import { Collectable } from 'app/shared/collectable.model';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.css']
})
export class CollectionComponent implements OnInit {

  collectedItems: Collectable[] = [];
  constructor(private collectableService: CollectableService) { }

  onRemoveFromCollection(item: Collectable){
    this.collectableService.removeFromCollection(item);
  }

  ngOnInit() {
    this.collectedItems = this.collectableService.getCollection();
  }

}
