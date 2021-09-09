import HeaderBlock from "./components/HeaderBlock";

const App=()=>{
  return(<>
      <HeaderBlock title="This is new Title"/>
      <HeaderBlock 
        title="This is new Title"
        hideBackground={true}
        decription ="This new description"
      
      />

  </>
  )
  
  }

  export default App;