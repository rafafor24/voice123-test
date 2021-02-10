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
            const actors: Actor[] = response.data.providers.map((a: any) => {
                let fragment = "";
                let size = 0;
                for (let i = 1; i < query.search.length; i++) {
                    const newsearch = query.search.slice(0, i);
                    const ind: number = JSON.stringify(a).indexOf(newsearch);
                    if (ind > 0) {
                        const start: number = (ind - 20) < 0 ? 0 : (ind - 20);
                        const end: number = (ind + 20) > JSON.stringify(a).length ? 0 : (ind + 20);
                        if (i > size) {
                            fragment = JSON.stringify(a).slice(start, end);
                            size = i;
                        }
                    }
                }
                for (let i = 1; i < query.search.length; i++) {
                    const newsearch = query.search.slice(0, i).toLowerCase();
                    const ind: number = JSON.stringify(a).indexOf(newsearch);
                    if (ind > 0) {
                        const start: number = (ind - 20) < 0 ? 0 : (ind - 20);
                        const end: number = (ind + 20) > JSON.stringify(a).length ? 0 : (ind + 20);
                        if (i > size) {
                            fragment = JSON.stringify(a).slice(start, end);
                            size = i;
                        }
                    }
                }
                return {
                    name: a.user.name, text: a.description, id: a.user.username, imageURL: a.user.picture_medium,
                    stringify: fragment, size: size
                }
            })
            const resp: ResponseActors = { actors: actors, pages: response.headers[Object.keys(response.headers)[3]] }
            console.log(resp);
            commit('actorsLoaded', resp);
        }, (error: any) => {
            commit('actorsError');
        });
    },
};