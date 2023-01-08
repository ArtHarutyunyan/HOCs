import { v4 as uuidv4 } from "uuid";

const DataSource = {
  comments: [
    { value: "comment1", id: uuidv4() },
    { value: "comment2", id: uuidv4() },
    { value: "comment3", id: uuidv4() },
    { value: "comment4", id: uuidv4() },
    { value: "comment5", id: uuidv4() },
    { value: "comment6", id: uuidv4() },
    { value: "comment7", id: uuidv4() },
  ],
  blogPost: [
    { value: "blogPost1", id: 1 },
    { value: "blogPost2", id: 2 },
    { value: "blogPost3", id: 3 },
    { value: "blogPost4", id: 4 },
    { value: "blogPost5", id: 5 },
    { value: "blogPost6", id: 6 },
    { value: "blogPost7", id: 7 },
  ],
  getBlogPost(id) {
    console.log(this.blogpost);
    return this.blogPost.find((post) => post.id === id).value;
  },
  getComments() {
    return this.comments;
  },
};

// class DataSource extends React.Component {
//   constructor(props, comments) {
//     super(props);
//     this.comments = comments;
//   }
//   getComments() {
//     return this.comments;
//   }
// }

export default DataSource;
