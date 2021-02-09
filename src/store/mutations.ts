import { MutationTree } from 'vuex';
import { Actor, RootState } from './types';

export const mutations: MutationTree<RootState> = {
    actorsLoaded(state, payload: Actor[]) {
        state.loaded = true;
        state.actors = payload;
    },
    actorsError(state) {
        state.loaded = false;
        state.actors = [];
    },
};