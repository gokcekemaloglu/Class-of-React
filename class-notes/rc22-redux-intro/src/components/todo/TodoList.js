

import { useSelector } from "react-redux";
import TodoItem from "./TodoItem";

const TodoList = () => {

  const {gorevler} = useSelector((state)=>state.todoReducer)
  // console.log(gorevler);
  

  return (
    <div>
      <div>
        {gorevler.map((gorev) => (
          <TodoItem gorev={gorev} key={gorev.id}
         />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
