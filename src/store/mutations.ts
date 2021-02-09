import { MutationTree } from 'vuex';
import { Actor, ResponseActors, RootState } from './types';

export const mutations: MutationTree<RootState> = {
    actorsLoaded(state, payload: ResponseActors) {
        state.loaded = true;
        state.actors = payload.actors;
        state.pages = payload.pages;
    },
    actorsError(state) {
        state.loaded = false;
        state.actors = [];
    },
};