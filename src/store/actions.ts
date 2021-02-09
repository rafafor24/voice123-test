import { ActionTree } from 'vuex';
import axios from 'axios';
import { RootState, Actor, Query } from './types';
import { parseQuery } from 'vue-router';


export const actions: ActionTree<RootState, RootState> = {
    fetchData({ commit }, query: Query): any {
        axios({
            url: `https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${query.search}&page=${query.page}`,
        }).then((response: any) => {
            console.log(response);
            const actors: Actor[] = response.data.providers.map((a: any) => { return { name: a.user.name, text: a.description, id: a.user.username, imageURL: a.user.picture_medium } })
            console.log(actors);
            commit('actorsLoaded', actors);
        }, (error: any) => {
            commit('actorsError');
        });
    },
};