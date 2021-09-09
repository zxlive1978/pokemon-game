import HeaderBlock from "./components/HeaderBlock";

const App=()=>{
  return(<>
      <HeaderBlock title="This is new Title"/>
      <HeaderBlock 
        title="This is new Title"
        hideBackground={true}
      
      />

  </>
  )
  
  }

  export default App;