/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'

import CocoroBox from '../cocoro-box.vue'

storiesOf('CocoroBox', module)
  .add('simple', () => ({
    components: { CocoroBox },
    template: `<cocoro-box>Content</cocoro-box>`,
  }))
  .add('outline', () => ({
    components: { CocoroBox },
    template: `<cocoro-box default outline>Content</cocoro-box>`,
  }))
  .add('raised', () => ({
    components: { CocoroBox },
    template: `<cocoro-box default raised>Content</cocoro-box>`,
  }))
  .add('raised outline', () => ({
    components: { CocoroBox },
    template: `<cocoro-box default outline raised>Content</cocoro-box>`,
  }))
  .add('primary raised', () => ({
    components: { CocoroBox },
    template: `<cocoro-box primary raised>Content</cocoro-box>`,
  }))
