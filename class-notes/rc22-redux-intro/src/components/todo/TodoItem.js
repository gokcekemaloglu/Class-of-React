import React from "react";
import okLogo from "../../assets/ok.png";
import deleteLogo from "../../assets/delete.png";
import { useDispatch } from "react-redux";
import { degistir, sil } from "../../redux/actions/todoActions";

const TodoItem = ({gorev}) => {

  const dispatch = useDispatch()


  return (
    <div
      style={{textDecoration:!gorev.completed ? "none" : "line-through", background:!gorev.completed ? "orange" : "#A9A9A9", borderRadius:"5px"}}
      className="todo-list"
    >
      <h2 className="todoText">{gorev.yazi}</h2>
      <div>
        <span>
          <img
            src={okLogo}
            className="ok-logo"
            alt="ok logo"
            //! 1-  tıklanınca değiştir fonksiyonu ihtiyacı olacak, tıklanınca tıkladığım veriyi gönder
            onClick={()=>dispatch(degistir(gorev))}
          />
        </span>
        <span>
          <img
            src={deleteLogo}
            className="delete-logo"
            alt="delete logo"
            onClick={()=>dispatch(sil(gorev))}
          />
        </span>
      </div>
    </div>
  );
};

export default TodoItem;
