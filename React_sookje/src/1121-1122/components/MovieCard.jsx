import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router";

//props   props.food.id
function MovieCard({ movie, movies, index }) {

    let navigate = useNavigate();

    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src={food1} /> */}
            {/* http://localhost:5173/images/food9.jpg */}
            {/*   images/food9.jpg    */}
            {/*                          "http://localhost:5173/" + "images/food1.jpg"    */}
            {/* <Card.Img variant="top" src={"http://localhost:5173/" + food.imgPath} /> */}
            <Card.Img variant="top" src={movie.imgPath}/>
            {/* <Card.Img variant="top" src={food.imgPath} /> */}
            <Card.Body>
                <Card.Title
                    style={{
                        color: movie.genre === 'SF' ? 'blue'
                            : movie.genre === '액션' ? 'red'
                            : 'green'
                    }}
                >
                    {movie.title}
                </Card.Title>
                <Card.Text>
                    {/* {food.content} */}
                    {movies[index].genre}
                </Card.Text>
                <Card.Text>
                    {movie.price}
                </Card.Text>
                <Button variant="primary" onClick={() => navigate('/reservation/' + movie.id)}>상세보기</Button>
            </Card.Body>
        </Card>
    )
}

export default MovieCard;