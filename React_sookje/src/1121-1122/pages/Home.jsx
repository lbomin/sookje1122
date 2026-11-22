import { Container, Row, Col, } from 'react-bootstrap';
import MovieCard from "../components/MovieCard";

export default function Home({movies}){
    return(
        <div>

            <div className="main-bg"></div>

            <Container className="mt-5 mb-4">
                <h1 className="display-5 fw-bold text-center">
                    현재 상영작
                </h1>
                <p className="text-center text-secondary">
                    Ness Cinema에서 상영 중인 영화를 만나보세요.
                </p>
                <hr />
            </Container>
            <Container>
                <Row>
                    {
                        movies.map((movie, index)=>{
                            return (
                                <Col xs={4} md={4} xxl={3} key={movie.id}>
                                    <MovieCard movie={movie} movies={movies} index={index} />
                                </Col>
                            )
                        })
                    }

                </Row>
            </Container>
        </div>
    )
}