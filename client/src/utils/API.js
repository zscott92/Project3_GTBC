import axios from "axios";


export default {

  //==================SONGS===========================
  //TODO need to add filter that selects only user ID songs
  getSongs: function () {
    return axios.get("/api/songs");
  },
  //gets song with given id
  getSong: function (id) {
    return axios.get("/api/songs/" + id);
  },
  // Deletes the song with the given id
  deleteSong: function (id) {
    return axios.delete("/api/songs/" + id);
  },
  // Saves a song to the database
  saveSong: function (songData) {
    return axios.post("/api/songs", songData);
  },


  //===================USER===========================
  //gets User with given id
  getUser: function (id) {
    return axios.get("/api/user/" + id);
  },
  // Deletes the User with the given id
  deleteUser: function (id) {
    return axios.delete("/api/user/" + id);
  },
  // Saves a User to the database
  saveUser: function (userData) {
    return axios.post("/api/user", userData);
  }


};