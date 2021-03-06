import axios from "axios";

export default {
  // Gets all posts
  getFavBooks: function() {
    return axios.get("/api/posts");
  },
  // Gets the post with the given id
  getPost: function(id) {
    return axios.get("/api/posts/" + id);
  },
  // Deletes the post with the given id
  deletePost: function(id) {
    return axios.delete("/api/posts/" + id);
  },
  // Saves a post to the database
  saveBook: function(postData) {
    return axios.post("/api/posts", postData);
  },
  getBook: function (book) {
    return axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${book}&key=AIzaSyCIglnekiUoDx7Q2-RDWK-O0Il2B2ehAQY`

    );
  }
};
