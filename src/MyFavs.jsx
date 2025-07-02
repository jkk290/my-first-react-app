function ListItem(props) {
    return <li>{props.food}</li>
}

function List(props) {
    return (
        <>
            {!props.foods ? (
                <div>Loading...</div>
            ) : props.foods.length > 0 ? (
                <ul>
                    {props.foods.map((food) => {
                        return <li key={food}>{food}</li>;
                    })}
                </ul>
            ) : (
                <div>There are no foods in the list!</div>
            )}
        </>
    )
    
}

function MyFavs() {
    const foods = ['Pizza', 'Ramen', 'Tonkatsu', 'Flauta', 'Cheeseburger'];
    return (
    <div>
        <h1>Foods: </h1>
        <List foods={foods}/>
    </div>
    )
}

export { MyFavs };