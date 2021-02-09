import { GetterTree } from 'vuex';
import { Actor } from './types';
import { RootState } from './types';

export const getters: GetterTree<RootState, RootState> = {
    size(state): number {
        const { actors } = state;
        return actors.length;
    }
};