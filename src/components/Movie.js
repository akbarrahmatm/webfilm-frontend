import {Card, Container, Row, Col, Button} from "react-bootstrap"
import jumanjiImg from "../asset/movie/jumanji.jpg"
import jurassicImg from "../asset/movie/jurassic.jpg"
import unchartedImg from "../asset/movie/uncharted.jpg"


const Movie = () => {
    return (
        <div>
            <Container className="p-4">
                <h1 className="text-white">Movies</h1>
                <Row>
                    <Col md={4} className="my-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={jumanjiImg} alt="Jumanji: The Next Level" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Jumanji: The Next Level</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="m-1 mb-3" variant="light">Trailer</Button>
                                <Button className="m-1 mb-3" variant="light">Synopsis</Button>
                                <Button className="m-1 mb-3" variant="light">Cast</Button>
                                <Card.Text>
                                    Last Update 3 Minutes Ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="my-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={jurassicImg} alt="Spiderman" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Jurassic World Dominion</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="m-1 mb-3" variant="light">Trailer</Button>
                                <Button className="m-1 mb-3" variant="light">Synopsis</Button>
                                <Button className="m-1 mb-3" variant="light">Cast</Button>
                                <Card.Text>
                                    Last Update 6 Minutes Ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                    <Col md={4} className="my-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={unchartedImg} alt="Strange" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Uncharted</Card.Title>
                                <Card.Text>
                                    This is a wider card with supporting text below as a natural lead-in to
                                    additional content. This content is a little bit longer.
                                </Card.Text>
                                <Button className="m-1 mb-3" variant="light">Trailer</Button>
                                <Button className="m-1 mb-3" variant="light">Synopsis</Button>
                                <Button className="m-1 mb-3" variant="light">Cast</Button>
                                <Card.Text>
                                    Last Update 3 Minutes Ago
                                </Card.Text>
                            </div>
                        </div>
                    </Card>
                    </Col>
                </Row>
            </Container>
            
        </div>
    )
}

export default Movie