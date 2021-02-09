import {
  ActionTree as VuexActionTree,
  GetterTree as VuexGetterTree,
  Module as VuexModule,
  ActionContext as VuexActionContext,
} from 'vuex'
export { MutationTree } from 'vuex'

interface RootState {} // eslint-disable-line @typescript-eslint/no-empty-interface

export type ActionTree<S> = VuexActionTree<S, RootState>
export type GetterTree<S> = VuexGetterTree<S, RootState>
export type Module<S> = VuexModule<S, RootState>
export type ActionContext<S> = VuexActionContext<S, RootState>

export interface Repository<T> {
  [key: number]: T
}
