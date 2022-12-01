export interface TWeather {
    data: string[];
}
const Card = (data:TWeather) => {
    return (
        <>
            {
                console.log(data)
                
            }
        </>
    );
}

export default Card;