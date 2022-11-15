import {useSelector} from 'react-redux';
import {useMemo, useState} from 'react';
import {getGuitarInventoryState, getGuitarSpecsById, getIsApiLoading} from '../../selectors';

function GuitarHooks() {
    const getGuitars = useMemo(getGuitarInventoryState, [])
    const guitars = useSelector(state => getGuitars(state))

    // const getIsTheApiRunning = useMemo(getIsApiLoading, [])
    const [loading, setLoading] = useState(false);


    const getGuitarDetails = (id) => {

        let theGuitarRequested = Number(Object.values(id))
        const newGuitarRequested = (theGuitarRequested - 1)
        let array = Object.values(guitars)
        return array[newGuitarRequested];
    }

    return {
        guitars, getGuitarDetails, loading, setLoading

    };
}

export default GuitarHooks;
