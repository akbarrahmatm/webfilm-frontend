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
                    <Button variant='dark' href='#trending'>Explore Available Film</Button>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
    )
}

export default Intro