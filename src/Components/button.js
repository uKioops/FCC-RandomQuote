import './button.css'
import Button from 'react-bootstrap/Button';
import {getRandomQuote, loadingQuote} from '../Redux/Reducers/quote'
import {useDispatch } from 'react-redux'


export default function ButtonQuote () {
    const dispatch = useDispatch()

    function handleClick() {
        dispatch(loadingQuote())
        dispatch(getRandomQuote());
        

        
        
        
           
        

        

    }
    return (
       <Button onClick={handleClick} id="new-quote">Next Quote Please</Button>
    )
}