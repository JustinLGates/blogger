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
    blogById: {},
    isBlogFormShowing: false,
  },
  mutations: {
    toggleBlogForm(state) {
      state.isBlogFormShowing = !state.isBlogFormShowing;
    },
    setActiveBlogPost(state, id) {
      state.activeBlog = state.blogs.find((b) => b.id == id);
    },
    getBlogById(state, blog) {
      state.blogById = blog;
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
    async deleteComment({ commit, dispatch }, comment) {
      try {
        let res = await api.delete(`comments/${comment.id}`);
        dispatch("setActiveBlog", comment.blogId);
      } catch (err) {
        console.log(err);
      }
    },
    async postComment({ commit, dispatch }, blogData) {
      try {
        let res = await api.post("comments", blogData);
        console.log(res.data);

        // dispatch("getBlogById", blogData.blogId);
        this.dispatch("setActiveBlog", blogData.blogId);
      } catch (err) {
        console.log(err);
      }
    },

    async editBlog({ commit, dispatch }, data) {
      let res = await api.put(`blogs/${data.id}`, data);
      dispatch("getAllBlogs");
      dispatch("setActiveBlog", data.id);
    },

    async editComment({ commit, dispatch }, update) {
      let res = await api.put(`comments/${update.id}`, update);
      console.log(res);
      dispatch("setActiveBlog", update.blogId);
    },

    async getBlogById({ commit, dispatch }) {
      let id = this.state.activeBlog.id;
      let blogData = await api.get(`blogs/${id}`);
      commit("getBlogById", blogData.data);
    },
    async setActiveBlog({ commit, dispatch }, id) {
      try {
        console.log("setting active blog");

        let blog = await api.get(`/blogs/${id}`);
      } catch (err) {
        console.log(err);
      }
      commit("setActiveBlogPost", id);
      try {
        await router.push("/");
      } catch (err) {
        console.log(err);
      }
      router.push(`Post`);
    },
    async getAllBlogs({ commit, dispatch }) {
      let blogs = await api.get("blogs");
      commit("setAllBlogs", blogs.data);
    },
    toggleBlogForm({ commit, dispatch }) {
      commit("toggleBlogForm");
    },
    async createNewBlog({ commit, dispatch }, blogFormData) {
      try {
        let data = await api.post("/blogs", blogFormData);
        dispatch("toggleBlogForm");
        dispatch("getAllBlogs");
      } catch (err) {
        console.error(err);
      }
    },
    async deleteBlog({ commit, dispatch }, id) {
      let res = await api.delete(`/blogs/${id}`);
      commit("removeBlog", id);
      router.push("/");
    },
    setBearer({}, bearer) {
      api.defaults.headers.authorization = bearer;
    },
    resetBearer() {
      api.defaults.headers.authorization = "";
    },

    async getMyBlogs({ commit }, userID) {
      let res = await api.get("profile/blogs");
      console.log("got the profile blogs: " + JSON.stringify(res.data));
      commit("setAllBlogs", res.data);
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
