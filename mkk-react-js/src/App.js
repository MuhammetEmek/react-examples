import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_DATA =[
  {
    id:"1",
    title:"Notebook",
    amount:9500.12,
    date:new Date(2022,1,1)
  },
  {
    id:"2",
    title:"Mobile Phone",
    amount:695.18,
    date:new Date(2022,5,19)
  },
  {
    id:"3",
    title:"Watch",
    amount:105.12,
    date:new Date(2022,3,17)
  },
  {
    id:"4",
    title:"T-Shirt",
    amount:65.12,
    date:new Date(2022,5,16)
  }
]


const App=()=> {
  return(
      <div>
          <NewExpenses></NewExpenses>
          <Expenses items={DUMMY_DATA}></Expenses>
      </div>
  )
}

export default App;