import Vue from "vue";
import Vuex, { Store } from "vuex";
import router from "../router";
import { api } from "./AxiosStore";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    blogs: [],
    profile: {},
    activeBlog: {},
  },
  mutations: {
    setActiveBlog(state, id) {
      state.activeBlog = state.blogs.find((b) => b.id == id);
      console.log("active blog is " + JSON.stringify(state.activeBlog));
    },
    setAllBlogs(state, blogs) {
      state.blogs = blogs;
    },
    setProfile(state, profile) {
      state.profile = profile;
    },
    addBlog(state, blog) {
      // could make better but had issues getting the userimg from the return from post
      // state.blogs.push(blog);
    },
    removeBlog(state, id) {
      let indexToRemove = state.blogs.findIndex((b) => b.id == id);
      state.blogs.splice(indexToRemove, 1);
    },
  },
  actions: {
    async getBlogById({ commit, dispatch }, id) {
      let data = await api.get(`blogs/${id}`);
    },
    async setActiveBlog({ commit, dispatch }, id) {
      await commit("setActiveBlog", id);
      router.push("Post");
    },
    async getAllBlogs({ commit, dispatch }) {
      let blogs = await api.get("blogs");
      commit("setAllBlogs", blogs.data);
    },
    async createNewBlog({ commit, dispatch }, blogFormData) {
      try {
        let data = await api.post("/blogs", blogFormData);
        dispatch("getAllBlogs");
      } catch (err) {
        console.error(err);
      }
    },
    async deleteBlog({ commit, dispatch }, id) {
      let res = await api.delete(`/blogs/${id}`);
      commit("removeBlog", id);
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
