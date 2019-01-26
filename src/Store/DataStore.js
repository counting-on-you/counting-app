import { observable, action } from "mobx";

export default class DataStore {
  constructor() {}

  @observable
  pi_map = {};

  @observable
  aggregate = {
    campus: {
      counter: 0,
      uniqueCount: 0,
      ids: {},
      data: {}
    }
  };

  @action
  aggregateTimestamps = (timestampData, id) => {
    let agg = this.aggregate[id];

    agg.counter ++;
    agg.ids[id] = true;
    agg.uniqueCount = Object.keys(agg.ids);
    Object.keys(timestampData).forEach(ts => {
      // round down to nearest 10th minute to avoid offset issues
      const roundedts = Math.floor(Number(ts)/600) * 600;
      let amount = agg.data[roundedts] || 0;
      agg.data[roundedts] = amount + timestampData[ts].length;
    })

    this.aggregate = {...this.aggregate, campus: agg };
  }
}
