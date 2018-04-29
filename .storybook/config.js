import Vue from 'vue'
import { configure } from '@storybook/vue'

import { stories } from '../elements/stories'

configure(() => stories, module)
