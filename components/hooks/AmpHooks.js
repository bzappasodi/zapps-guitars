import {useSelector} from 'react-redux';
import {useMemo, useState} from 'react';
import {getAmpInventoryState} from '../../selectors';

function AmpHooks() {
    const getGuitars = useMemo(getAmpInventoryState, [])
    const guitars = useSelector(state => getAmps(state))

    const [loading, setLoading] = useState(false);

    const getGuitarDetails = (id) => {
        let theAmpRequested = Number(Object.values(id))
        const newAmpRequested = (theAmpRequested - 1)
        let array = Object.values(amps)
        return array[newAmpRequested];
    }

    return {
        guitars, getAmpDetails, loading, setLoading

    };
}

export default AmpHooks;
