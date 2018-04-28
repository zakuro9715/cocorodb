import Vue from 'vue'
import * as elements from '~/elements'

for (const e of Object.values(elements)) {
  Vue.component(e.name, e)
}
