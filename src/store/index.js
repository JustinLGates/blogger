import Vue from "vue";
import Vuex from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    profile: {},
  },
  mutations: {
    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    addBlog(state, blog) {
      state.blogs.push(blog);
    },
  },
  actions: {
    async getAllBlogs({ commit, dispatch }) {
      let blogs = await api.get("blogs");
      console.log("got the blogs");
      commit("setAllBlogs", blogs);
    },
    async createNewBlog({ commit, dispatch }, blogFormData) {
      try {
        let data = await api.post("/blogs", blogFormData);
        console.log(data);
        //todo add to store data
      } catch (err) {
        console.error(err);
      }
    },
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },
    async getProfile({ commit }) {
      try {
        let res = await api.get("profile");
        commit("setProfile", res.data);
      } catch (error) {
        console.error(error);
      }
    },
  },
});
