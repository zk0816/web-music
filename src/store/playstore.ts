import { observable, action} from 'mobx';

export default class PlayStore {

@observable id:number = 0;

@action ChangId = (newId: number) => {
  this.id= newId;
  }
}