import { Container, Col, Row, Button } from 'react-bootstrap';

const Intro = () => {
    return (
         <div className='intro'>
          <Container className='text-white d-flex justify-content-center align-items-center'>
            <Row>
              <Col>
                <div className='title'>Cari Tau Film</div>
                <div className='title'>Gak Pake Ribet</div>
                <div className='introButton'>
                    <Button className='mx-2' variant='dark' href='#trending'>Trending Movies</Button>
                    <Button className='mx-2' variant='dark' href='#movie'>Explore Movies</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro