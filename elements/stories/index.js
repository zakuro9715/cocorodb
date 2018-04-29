/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import CocoroBox from '../cocoro-box.vue'

storiesOf('CocoroBox', module).add('simple', () => ({
  components: { CocoroBox },
  template: `<cocoro-box>Content</cocoro-box>`,
}))
