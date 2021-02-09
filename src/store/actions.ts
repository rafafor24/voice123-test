import { ActionTree } from 'vuex';
import axios from 'axios';
import { RootState, Actor, Query, ResponseActors } from './types';
import { parseQuery } from 'vue-router';


export const actions: ActionTree<RootState, RootState> = {
    fetchData({ commit }, query: Query): any {
        axios({
            url: `https://api.sandbox.voice123.com/providers/search/?service=voice_over&keywords=${query.search}&page=${query.page}`,
        }).then((response: any) => {
            console.log(response);
            const actors: Actor[] = response.data.providers.map((a: any) => { return { name: a.user.name, text: a.description, id: a.user.username, imageURL: a.user.picture_medium } })
            const resp: ResponseActors = { actors: actors, pages: response.headers[Object.keys(response.headers)[3]] }
            console.log(resp);
            commit('actorsLoaded', resp);
        }, (error: any) => {
            commit('actorsError');
        });
    },
};