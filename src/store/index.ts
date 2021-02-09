import { createStore } from 'vuex'
import * as items from './items'

export default createStore({
  modules: {
    items,
  },
})
