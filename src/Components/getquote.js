
import { useSelector} from 'react-redux'
import { Container } from 'react-bootstrap';

import './getquote.js';

export default function GetQuote() {
    const testQuote = useSelector((state) => state.quote.loadedQuote)


    return (
            
            <Container>

                 <div className="text-center" variant="primary" id="text">
                <p><em>{testQuote.content}</em></p>
                
            
            </div>
            <hr></hr>
            <div className="text-center" id="author">
                <p><b>{testQuote.author}</b></p>
            </div>
            
            </Container>
           
            
       
    )

}
