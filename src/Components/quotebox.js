import ButtonQuote from './button'
import GetQuote from './getquote'
import './quotebox.css';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useSelector} from 'react-redux'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faTwitter} from "@fortawesome/free-brands-svg-icons";
import { Button, Stack } from 'react-bootstrap';





export default function QuoteBox () {

    const sharedQuote = useSelector((state) => state.quote.loadedQuote.content)
    
    const sharedUrl = 'https://twitter.com/intent/tweet?text=' + sharedQuote.toString()
  

    return (
        <Card style={{ width: '45rem'}} id="quote-box" >
        
        <Card.Body>
          <Stack gap={5}>
          <Card.Header>Random Quote Generator</Card.Header>
          
          <Card.Text>
            <Row>
              <Col>
              <div className="testCss">
              <FontAwesomeIcon icon={faQuoteLeft} />
              </div>
              </Col>
              <Col md={6}>
           
                <GetQuote />
          
              </Col>
              <Col>
              <div className="testCss"><FontAwesomeIcon icon={faQuoteRight}/></div>
              </Col>

         
              
              
            
            
            </Row>
              
            
          
          </Card.Text>
          </Stack>
         
          
          
       
          
        </Card.Body>
        <Row>
            <Col md={2}>
              <Stack direction="horizontal" gap={5}>
                <div></div>
             
                <a href={sharedUrl} id="tweet-quote"><Button variant="success"><FontAwesomeIcon icon={faTwitter} /></Button></a>
                
              
              
              <Button variant="warning"> <FontAwesomeIcon icon={faFacebook} /></Button>
             

              </Stack>
              
            </Col>

            <Col md={{ span: 8, offset: 1 }} >
             
               
                <Stack direction="horizontal" gap={2}>
   
      <div className="ms-auto"> <ButtonQuote /></div>
   
    </Stack>
          
              </Col> 
          </Row>
          <br />
      </Card>
    );
}




