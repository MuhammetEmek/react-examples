
import MenuItem from "./MenuItem/MenuItem";
import classes from './AvailableMeals.module.css';
import Card from "../UI/Card";
import { useEffect, useState } from "react";


const DUMMY_MEALS = [
    {
        id: '1',
        name:'Adana Kebap',
        description: 'Adana Kebap',
        price:45.50
    },
    {
        id:'2',
        name:'İskender',
        description:' Bursa İskenderi',
        price:40.50
    },
    {
        id:'3',
        name:'Döner',
        description:' Döner İskenderi',
        price:35.50
    },
    {
        id:'4',
        name:'Lahmacun',
        description:' Antep LAHMACUN',
        price:20.50
    },
]

const AvailableMeals = () => {

    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {

        const fetchMeals = async () => {

            const response = await fetch('https://mkk-react-edu-default-rtdb.firebaseio.com/meals.json');

            if(!response.ok){
                throw new Error("No data avaiable!");
            }

            const responseData = await response.json();

            console.log(responseData);                       

            const loadedMeals = [];
        
            for(const key in responseData) {
                loadedMeals.push({
                    id:key,
                    name :responseData[key].name,
                    description :responseData[key].description,
                    price :responseData[key].price,
                })
            }
            
            setMeals(loadedMeals);
            setIsLoading(false);
        }

        fetchMeals().catch((error) => {
            console.log(error);
        })
    },[])

    if(isLoading) {
        return(
            <section>
                <p>Loading....</p>
            </section>
        )
    }

    const mealList = meals.map((meal) =>( 
        <MenuItem
        key={meal.id}
        id={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
        />
    ))

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>
        </section>

    )
}

export default AvailableMeals;