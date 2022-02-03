import logo from './logo.svg';
import './App.css';
import Expenses from './components/Expenses/Expenses';
import NewExpenses from './components/NewExpenses/NewExpenses';

const DUMMY_DATA =[
  {
    id:"1",
    title:"Notebook",
    amount:9500.12,
    date:new Date(2020,3,1)
  },
  {
    id:"2",
    title:"Mobile Phone",
    amount:695.18,
    date:new Date(2021,5,19)
  },
  {
    id:"3",
    title:"Watch",
    amount:105.12,
    date:new Date(2020,3,17)
  },
  {
    id:"4",
    title:"T-Shirt",
    amount:65.12,
    date:new Date(2022,5,16)
  },
  {
    id:"5",
    title:"Notebook",
    amount:9500.12,
    date:new Date(2021,1,1)
  },
  {
    id:"6",
    title:"Mobile Phone",
    amount:695.18,
    date:new Date(2022,5,19)
  },
  {
    id:"7",
    title:"Watch",
    amount:105.12,
    date:new Date(2022,3,17)
  },
  {
    id:"8",
    title:"T-Shirt",
    amount:65.12,
    date:new Date(2020,1,16)
  }
]


const App=()=> {
  const addExpenseData = (expenseData) => {
    DUMMY_DATA.push(expenseData);
  }

  return(
      <div>
          <NewExpenses addOnExpense={addExpenseData}></NewExpenses>
          <Expenses items={DUMMY_DATA}></Expenses>
      </div>
  )
}

export default App;