// mutfak

const initial = {
  gorevler: [
    { id: 0, yazi: "Redux Çalışıyoruz", completed: false },
    { id: 1, yazi: "köpekleri gezdir", completed: true },
  ],
};

const todoReducer = (state=initial, {type, payload}) => {
  switch (type) {
    case "EKLE":
      return {gorevler:[...state.gorevler, {id:3, yazi:payload, completed: false}]}
      
    case "SIL":
      return {gorevler: state.gorevler.filter((item)=>item !== payload)}  

      //! 3- case "DEGISTIR" ile gelindiğinde görevlerdeki completed'ı değiştir

    case "DEGISTIR":      
      return {gorevler: state.gorevler.map((item)=> item === payload ? ({...item, completed:!item.completed}) : item)}
  
    default:
      return state
  }
}

export default todoReducer