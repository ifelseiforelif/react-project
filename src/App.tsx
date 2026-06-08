import './App.css'
import Card from "./components/Card.tsx";
import type {CardType} from "./types/CardType.ts";
import Product from "./components/Product.tsx";

function App() {
  const card:CardType={
    title:"One Card",
    description:"Description for card",
    views:120,
    is_show:true
  }
  const card2:CardType={
    title:"Two Card",
    description:"Description for two card",
    views:220,
    is_show:false
  }
  return (
      <>Hello React
        <Card card={card} />
        <Card card={card2}/>
        <Product />
        {/*<Card title={"Test Card"}*/}
        {/*      description={"Test Description"}*/}
        {/*      views={300}*/}
        {/*      is_show={true} />*/}
      </>
  )
}

export default App
