import {Card, Container, Row, Col, Button} from "react-bootstrap"
import dunkrikImg from "../asset/trending/dunkrik.jpg"
import spidermanImg from "../asset/trending/spiderman.jpg"
import strangeImg from "../asset/trending/dr-strange.jpg"


const Trending = () => {
    return (
        <div>
            <Container className="p-4">
                <h1 className="text-white">Trending Movies</h1>
                <Row>
                    <Col md={4} className="my-2">
                    <Card className="bg-dark text-white">
                        <Card.Img src={dunkrikImg} alt="Dunkrik" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Dunkrik</Card.Title>
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
                        <Card.Img src={spidermanImg} alt="Spiderman" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Spiderman : No Way Home</Card.Title>
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
                        <Card.Img src={strangeImg} alt="Strange" className="movieImg"  />
                        <div className="bg-dark">
                            <div className="p-2 m-1 text-center">
                                <Card.Title >Dr. Strange : Multiverse Of Madness</Card.Title>
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

export default Trending