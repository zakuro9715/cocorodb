import { createStore } from 'vuex'
import * as items from './items'
import * as records from './records'

export default createStore({
  modules: {
    items,
    records,
  },
})
