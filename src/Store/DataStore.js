import { observable } from "mobx";

export default class DataStore {
  constructor() {}

  @observable
  name = "bob";
}
