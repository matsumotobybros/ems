import Vuex from "vuex";
import auth from "./auth";
import events from "./events";
import groups from "./groups";

const createStore = () => {
  return new Vuex.Store({ modules: { auth, events, groups } });
};

export default createStore;
