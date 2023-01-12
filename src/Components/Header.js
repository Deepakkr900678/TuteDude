import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import "./Header.css"

export default function Header() {
    return (
        <>
            <div className=''>
                <Navbar bg="light" expand="lg">
                    <Container>
                        <img className='tutedude' alt="tutedude" src={require('./TuteDude.png')} />
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Nav className="ml-auto mb-2 mb-lg-0">
                            <Nav.Link className='nav' style={{ color: "rgba(128, 0, 128, 0.25)" }} >My Assignment</Nav.Link>
                            <Nav.Link className='nav' style={{ color: "rgba(128, 0, 128, 0.25)" }}>Chat with Mentor</Nav.Link>
                            <span class="material-symbols-outlined contact">
                                account_circle
                            </span>
                            <NavDropdown  className='profile' title="ProfileName" id="basic-nav-dropdown" style={{color: '#800080'}}>
                            </NavDropdown>
                        </Nav>
                    </Container>
                </Navbar>
            </div>
            <div className='refer'>
                <h6>UI/UX &gt; Refer & Earn &gt; Friends Referred</h6>
            </div>
            <div className='box'>
                <span style={{ float: "left", marginLeft: "12px" }}>
                    <h6 className='referral'> Your Referral Code</h6>
                    <Card style={{ width: '11rem', marginLeft: '100px' }} className="box1">
                        <Card.Body>E D C H 5 4</Card.Body>
                    </Card>
                </span>

                <span style={{ float: "right" }}>
                    <Card style={{ width: '10rem', marginRight: '100px' }} className="box2">
                        <Card.Body><span className='wallet'>Wallet Balance</span></Card.Body>
                        <h6>₹ 500</h6>
                    </Card>
                </span>
            </div>
            <div className="friend">
                <h3 className='three'>Friends who enrolled</h3><span >(3)</span>
            </div>

            <div className="card-deck">
                <div>
                    <Card style={{ width: '25rem' }} className="col-md-4 col-10 mx-auto card1" >
                        <Card.Body className='cardname'>
                            <Card.Title className='title' style={{ marginTop: '0px', marginRight: '55px', marginLeft: '26px' }}>Dhiraj Saxsena</Card.Title ><span className='date'>14 Sep, 2022</span>
                            <Card.Subtitle className='enrolled' style={{ marginRight: '150px' }}>Courses Enrolled(6)</Card.Subtitle>
                            <Button className="btn bg-transparent" >UI/UX</Button>
                            <Button className="btn bg-transparent" >Photoshop</Button>
                            <Button className="btn bg-transparent" >Illustrator</Button>
                            <Button className="btn bg-transparent" >Python</Button>
                            <Button className="btn bg-transparent" >MERN</Button>
                            <Button className="btn bg-transparent" >Java</Button>
                            <div>
                                <span className='date'>Referal Amount</span> <strong className='date'>₹185</strong>
                            </div>
                        </Card.Body>
                    </Card>
                </div>
                <div><Card style={{ width: '25rem' }} className="col-md-4 col-10 mx-auto card2">
                    <Card.Body className='cardname'>
                        <Card.Title className='title' style={{ marginTop: '0px', marginRight: '55px', marginLeft: '26px' }}>Subhash Mishra</Card.Title><span className='date'>14 Sep, 2022</span>
                        <Card.Subtitle className='enrolled' style={{ marginRight: '150px' }}>Courses Enrolled(6)</Card.Subtitle>
                        <Button className="btn bg-transparent" >UI/UX</Button>
                        <Button className="btn bg-transparent" >Photoshop</Button>
                        <Button className="btn bg-transparent" >Illustrator</Button>
                        <Button className="btn bg-transparent" >Python</Button>
                        <Button className="btn bg-transparent" >MERN</Button>
                        <Button className="btn bg-transparent" >Java</Button>
                        <Button className="btn bg-transparent" >C++</Button>
                        <div>
                            <span className='date'>Referal Amount</span> <strong className='date'>₹485</strong>
                        </div>
                    </Card.Body>
                </Card></div>
                <div><Card style={{ width: '25rem' }} className="col-md-4 col-10 mx-auto card3">
                    <Card.Body className='cardname'>
                        <Card.Title className='title' style={{ marginTop: '0px', marginRight: '55px', marginLeft: '26px' }}>Prafull Kumar</Card.Title><span className='date'>14 Sep, 2022</span>
                        <Card.Subtitle className="enrolled" style={{ marginRight: '150px' }}>Courses Enrolled(23)</Card.Subtitle>
                        <Button className="btn bg-transparent" >UI/UX</Button>
                        <Button className="btn bg-transparent" >Photoshop</Button>
                        <Button className="btn bg-transparent" >Illustrator</Button>
                        <Button className="btn bg-transparent" >Python</Button>
                        <Button className="btn bg-transparent" >MERN</Button>
                        <Button className="btn bg-transparent" >Java</Button>
                        <div>
                            <span className='date'>Referal Amount</span> <strong className='date'>₹485</strong>
                        </div>
                    </Card.Body>
                </Card></div>
            </div>
            <div className='footer'>
                <h6>Terms & Conditions</h6>
            </div>
        </>
    )
}
