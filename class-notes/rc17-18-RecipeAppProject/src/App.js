import React from "react";
import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";




const App = () => {
 
  //! context sayfamız ile bütün browser'ı sarmalladık
  
   return (
    <div>
      <RecipeProvider>
        <AppRouter/>
      </RecipeProvider>
      
    </div>
   );
   
  
  
};

export default App;
