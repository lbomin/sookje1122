import { Container, Row, Col, Button } from 'react-bootstrap';
import { useParams, useNavigate } from "react-router";
import SeatSelect from '../components/SeatSelect.jsx';

export default function Detail({movies}){
    // 상세보기를 눌렀을때
    // 특정 상품의 상세정보를 보여주는 페이지

    // url 주소창 접속 경로   /detail/:id

    //  /detail/fd001    /detail/fd008

    // 상세보기를 누르면 -> /detail/id값 
    // id값으로 넘어온 값이 무엇이냐?  ---> foods 데이터 중에 id가 같은 상품 찾기

    // fd000 fd002   fd008 ???

    // :id 위치에 있는 값 접근
    let {id} = useParams();
    console.log(id);

    // id 하고 같은 id 가진 food 데이터 찾기

    // filter
    /* let food = foods.filter((food, index)=>{
        return food.id == id;
    }) */

    // find, findIndex
    let movie = movies.find((movie)=>{          //fd001    {}
        return movie.id === id;
    })
    // food.title

    let movieIndex = movies.findIndex((movie)=>{  //fd001    1
        return movie.id === id;
    })

    // foods[foodIndex].title ;

    console.log(movie);
    console.log('id:', id);
    console.log('movie:', movie);
    console.log('movies:', movies);

    let navigate = useNavigate();

    if( movie == undefined || movie == null){
        return(
        <div>
            <h1>존재하지 않는 영화입니다.</h1>
            <Button variant='info' onClick={()=>{
                navigate('/');
            }}>집으로 가기</Button>
        </div>
    )}

    return (
        <div>
            <Container>
                {/* 첫 번째 줄: 영화 포스터 + 영화 정보 */}
                <Row className="mt-4">
                    <Col md={6}>
                        <img src={movie.imgPath} />
                    </Col>

                    <Col md={6}>
                        <h4>{movie.title}</h4>
                        <p>{movie.genre}</p>
                    </Col>
                </Row>

                {/* 두 번째 줄: 좌석 선택 */}
                <Row className="mt-5">
                    <Col md={12}>
                        <SeatSelect price={movie.price}/>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <Button onClick={() => navigate('/')}>
                            영화 목록으로 돌아가기
                        </Button>
                    </Col>
                </Row>
            </Container>

        </div>
    );


}