import Cookie from "js-cookie";

const state = {
  loadedGroups: []
};

const mutations = {
  setGroups(state, groups) {
    state.loadedGroups = groups;
  },
  addGroup(state, group) {
    state.loadedGroups.push(group);
  },
  editGroup(state, editedGroup) {
    const groupIndex = state.loadedGroups.findIndex(
      group => group.id === editedGroup.id
    );
    state.loadedGroups[groupIndex] = editedGroup;
  }
};

const actions = {
  nuxtServerInit(vuexContext, context) {
    return context.app.$axios
      .$get("/groups.json")
      .then(data => {
        const groupArray = [];
        for (const key in data) {
          groupArray.push({ ...data[key], id: key });
        }
        vuexContext.commit("setGroups", groupArray);
      })
      .catch(e => context.error(e));
  },
  addGroup(vuexContext, group) {
    const createdGroup = {
      ...group,
      updatedDate: new Date()
    };
    return this.$axios
      .$post(
        process.env.baseUrl + "groups.json?auth=" + vuexContext.state.token,
        createdGroup
      )
      .then(data => {
        vuexContext.commit("addGroup", {
          ...createdGroup,
          id: data.name
        });
      })
      .catch(e => console.log(e));
  },
  editGroup(vuexContext, editedGroup) {
    return this.$axios
      .$put(
        process.env.baseUrl +
          "groups/" +
          editedGroup.id +
          ".json?auth=" +
          vuexContext.state.token,
        editedGroup
      )
      .then(res => {
        vuexContext.commit("editGroup", editedGroup);
      })
      .catch(e => console.log(e));
  },
  setGroups(vuexContext, groups) {
    vuexContext.commit("setGroups", groups);
  }
};

const getters = {
  loadedGroups(state) {
    return state.loadedGroups;
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};
