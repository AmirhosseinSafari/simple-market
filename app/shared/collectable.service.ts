import { Collectable } from "./collectable.model";

export class CollectableService{
    private collectables: Collectable[] = [
        {description:'melate eshgh' , type:'Book'},
        {description:'pizza' , type:'Food'},
        {description:'celebrities' , type:'Photo'},
        {description:'jenes' , type:'Clothes'} 
      ];

      getCollectables(){
          return this.collectables;
      }
}