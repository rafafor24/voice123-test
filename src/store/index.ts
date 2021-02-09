import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { RootState } from './types'
import { actions } from './actions'
import { mutations } from './mutations'
import { getters } from './getters'

export const key: InjectionKey<Store<RootState>> = Symbol();

export const store = createStore<RootState>({
  state: {
    loaded: false,
    actors: [],
    pages: 0
  },
  actions,
  mutations,
  getters
});

// define your own `useStore` composition function
export function useStore() {
  return baseUseStore(key);
}