import Vuex from "vuex";
import auth from "./auth";
import events from "./events";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      auth,
      events
    }
  });
};

export default createStore;
