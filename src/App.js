
import HeaderBlock from "./components/HeaderBlock";
import Header from "./components/Header";
import Layout from "./components/Layout";
import Footer from "./components/Footer";

const App=()=>{
  return(<>

      <Header 
        title="Заголовок Header"
        desc="Покемон — это «карманный монстр», обладающий необычными способностями. Девятнадцать лет назад их придумала японская компания Nintendo."  
        />

      <Layout 
        title="Заголовок Бульбазавр"
        desc="Бульбазавра можно увидеть дремлющим при ярком солнечном свете. На его спине есть семя. На солнце семя растет и становится больше."
        urlBg="../../assets/bg1.jpg"
      
      />
      <Layout 
        title="Заголовок Ивизавр"
        desc="На спине этого Покемона есть почка. Для того чтобы выдержать такой вес, Ивизавру нужно иметь толстое тело и сильные ноги. Если существо начинает тратить больше времени, лежа на солнце, это признак того, что почка будет цвести и превратится в большой цветок в ближайшее время."
        colorBg="green"
        // descr= urlBg colorBg
      
      />

      <Layout 
        title="Заголовок Венузавр"
        desc="На спине Венузавра есть большой цветок. Он будет раскрашен в яркие цвета, если получит большое количество питательных веществ и солнечного света. Цветочный аромат успокаивает эмоции людей."
        urlBg="../../assets/bg3.jpg"
        
        // descr= urlBg colorBg
      
      />


      <Footer />

  </>
  )
  
  }

  export default App;