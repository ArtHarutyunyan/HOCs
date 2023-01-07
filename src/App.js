import logo from "./logo.svg";
import "./App.css";
import CommentList from "./CommentList ";
import withSubscription from "./withSubscription";
import { DataSource } from "react";

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
      <CommentList />
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
