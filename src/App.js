
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import QuoteBox from '../src/Components/quotebox'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {useDispatch} from 'react-redux';
import { useEffect } from 'react';
import {getAllQuote} from './Redux/Reducers/quote';

function App() {


  const dispatch = useDispatch();

  async function updateQuote() {
    try {
      const response = await fetch("https://api.quotable.io/quotes");
      const { statusCode, statusMessage, ...data } = await response.json();
      if (!response.ok) throw new Error(`${statusCode} ${statusMessage}`);
      console.log("api call App")
      return data.results
      
    } catch (error) {
      // If the API request failed, log the error to console and update state
      // so that the error will be reflected in the UI.
      console.error(error);
      
    }
  }


  useEffect(() => {
    
    updateQuote().then(el => dispatch(getAllQuote(el)))
    
    
  });
  
  return (
    <Container>
    <Row>
      <Col>
      
      <QuoteBox />
      
      </Col>
    </Row>
  </Container>
    
  );
}

export default App;
