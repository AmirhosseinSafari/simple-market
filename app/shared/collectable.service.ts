import { Collectable } from "./collectable.model";

export class CollectableService{
    private collectables: Collectable[] = [
        {description:'melate eshgh' , type:'Book'},
        {description:'pizza' , type:'Food'},
        {description:'celebrities' , type:'Photo'},
        {description:'jenes' , type:'Clothes'} 
      ];

      private collection: Collectable[] = [];

      getCollectables(){
          return this.collectables;
      }

      getCollection(){
          return this.collection;
      }

      addToCollection(item: Collectable){
        if(this.collection.indexOf(item) !== -1){
            return;
        }  
        this.collection.push(item);
      }

      removeFromCollection(item: Collectable){
          this.collection.splice(this.collection.indexOf(item),1);
      }

}