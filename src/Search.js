import React , {useState} from 'react'
import './Search.css';
import SearchIcon from '@material-ui/icons/Search';
import MicIcon from '@material-ui/icons/Mic';
import {useHistory} from 'react-router-dom';
import {Button} from '@material-ui/core';
import {useStateValue} from './StateProvider';
import {actionTypes} from './reducer';

function Search() {

    const [state,dispatch] = useStateValue();

    const[input, setInput] = useState('')
    const history = useHistory();
    
    const search = e => {
        e.preventDefault();

        history.push('/search')

        dispatch({
            type: actionTypes.SET_SEARCH_TERM,
            term: input
        })
    }

    return (
        <form className="search">
            <div className="search__input">
                <SearchIcon className="search__inputIcon" />
                <input value={input} type='text'  to="/search" autocomplete="off" onChange={e => setInput(e.target.value)}  placeholder="Search Google or type a URL" />
                <input onClick={search} ></input> 
                <MicIcon />
            </div>
           <div ClassName="search__button">
               <Button type="submit" onClick={search}> </Button>
           </div>
        </form>
    )
}

export default Search
