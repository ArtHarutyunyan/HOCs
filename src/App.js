import "./App.css";
import BlogPost from "./components/BlogPost";
import CommentList from "./components/CommentList ";
import withSubscription from "./hocs/withSubscription";

const CommentListWithSubscription = withSubscription(
  CommentList,
  (DataSource) => DataSource.getComments()
);

const BlogPostWithSubscription = withSubscription(
  BlogPost,
  (DataSource, props) => DataSource.getBlogPost(props.id)
);
function App() {
  return (
    <div className="App">
      <h2>this is comment</h2>
      <CommentListWithSubscription />
      <h2>this is BlogPost</h2>
      <BlogPostWithSubscription id={4} />
    </div>
  );
}

export default App;

//Mutant
// function logProps(InputComponent) {
//   InputComponent.prototype.componentDidUpdate = function(prevProps) {
//     console.log('Current props: ', this.props);
//     console.log('Previous props: ', prevProps);
//   };
//   // The fact that we're returning the original input is a hint that it has
//   // been mutated.
//   return InputComponent;
// }

// // EnhancedComponent will log whenever props are received
// const EnhancedComponent = logProps(InputComponent);

//Not mutant
// function logProps(WrappedComponent) {
//   return class extends React.Component {
//     componentDidUpdate(prevProps) {
//       console.log('Текущие пропсы: ', this.props);
//       console.log('Предыдущие пропсы: ', prevProps);
//     }
//     render() {
//       // Оборачиваем компонент в контейнер без мутаций. Супер!
//       return <WrappedComponent {...this.props} />;
//     }
//   }
// }
