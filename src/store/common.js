import staticMenus from '@/router/menus'
import { menusFilter } from '@/utils/menus'

export default {
    namespaced: true,
    state: {
        allMenus: [],
        topMenus: [],
        leftMenus: []
    },
    mutations: {
        setAllMenus(state, allMenus) {
            state.allMenus = allMenus;
        },
        setTopMenus(state, topMenus) {
            state.topMenus = topMenus;
        },
        setLeftMenus(state, leftMenus) {
            state.leftMenus = leftMenus;
        }
    },
    actions: {
        initMenus({ commit }) {
            let menus = [];
            const menusConfig = JSON.parse(JSON.stringify(staticMenus));
            menus = menusFilter({ menus: menusConfig });
            commit('setAllMenus', menus);
            const topMenus = menus.map(item => {
                return {
                    name: item.name,
                    path: item.path,
                    title: item.title,
                    permission: item.permission,
                }
            })
            commit('setTopMenus', topMenus);
        },
    }
}