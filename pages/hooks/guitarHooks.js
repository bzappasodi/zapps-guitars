import {useSelector} from 'react-redux';
import {useMemo} from 'react';
import {getGuitarInventoryState, getGuitarSpecsById} from '../store/selectors';

function guitarHooks() {
    const getGuitars = useMemo(getGuitarInventoryState, [])
    const guitars = useSelector(state => getGuitars(state))

    //
    const getGuitarDetails = (id) => {

        let theGuitarRequested = Number(Object.values(id))
        const newGuitarRequested = (theGuitarRequested - 1)
        let array = Object.values(guitars)
        return array[newGuitarRequested];
    }

    return {
        guitars, getGuitarDetails
    };
}

export default guitarHooks;
