// Redux
import { useSelector, useDispatch } from "react-redux";
import { getFilter } from 'redux/filter/filter-selectors';
import { setFilter } from "redux/filter/filter-slice";
//MaterialUI
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

export function Filter() {
    
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();

    const handleChange = (e) => {
        const {value} = e.target;
        dispatch(setFilter(value));
    }

    return (
        <>
            <Typography variant="h6" sx={{mt:2, mb: 1}}>Find contacts by name</Typography>
            <TextField
                size="small"
                variant="standard"
                type="text"
                name="filter"
                value={filter}
                onChange={handleChange} />        
        </>
    )
}