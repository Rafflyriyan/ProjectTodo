import TodoItem from "./TodoItem";
const Todos = ({ todosProp }) => {
  return (
    <div style={styles.container}>
      {todosProp.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </div>
  );
};

const styles = {
  container: {
    width: "40%",
    margin: "0 auto",
  },
};

export default Todos;
