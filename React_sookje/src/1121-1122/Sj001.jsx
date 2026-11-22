import { Col, Row, Card, Button, Navbar, Nav, Container } from 'react-bootstrap';
import { Routes, Route } from 'react-router';
import movieData from './DB/DB.js';
import { useState } from 'react';
import Home from './pages/Home.jsx';
import Detail from './pages/detail.jsx';
import { useNavigate } from "react-router";

export default function Sj001(){

    let [movies, setMovies] = useState(movieData);

    let navigate = useNavigate();

    return(
        <div>
            <Navbar bg="dark" data-bs-theme="dark">
                <Container>
                <Navbar.Brand onClick={()=>{navigate('/')}}>
                    <img
                        src="/images/logo.PNG"
                        width="35"
                        height="35"
                        alt="로고"
                        style={{ marginRight: '10px', objectFit: 'contain' }}
                    />
                    Ness Cinema
                </Navbar.Brand>
                <Nav className="me-auto">
                    <Nav.Link onClick={()=>{navigate('/')}}>Home</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/info')}}>정보</Nav.Link>
                    <Nav.Link onClick={()=>{navigate('/test')}}>테스트</Nav.Link>
                </Nav>
                </Container>
            </Navbar>

            <Routes>
                <Route path="/" element={<Home movies={movies}/>}/>
                <Route path="/reservation/:id" element={<Detail movies={movies}/>}/>
                <Route path="/detail" element={<div><h1>김보석 디테일</h1></div>}/>
                <Route path="/info" element={<div><h1>김보석 정보</h1></div>}/>
                <Route path="/test" element={<div><h1>김보석 바보</h1></div>}/>
                <Route path="/*" element={<div><h1>404 에러!!! 너도 김보석처럼 바보</h1></div>}/>
            </Routes>

        </div>
    )
}