import {useSelector} from 'react-redux';
import {useMemo, useState} from 'react';
import {getGuitarInventoryState, getAmplifierInventoryState, getToggleEquipmentChecked} from '../../selectors';

function GuitarHooks() {
    const getGuitars = useMemo(getGuitarInventoryState, [])
    const guitars = useSelector(state => getGuitars(state))


    const getAmplifiers = useMemo(getAmplifierInventoryState, [])
    const amps = useSelector(state => getAmplifiers(state))

    const getRadioButtonSelection = useMemo(getToggleEquipmentChecked, [])
    const radioButtonSelection = useSelector(state => getRadioButtonSelection(state))

    const getGuitarDetails = (id) => {
        let theGuitarRequested = Number(Object.values(id))
        const newGuitarRequested = (theGuitarRequested - 1)
        let array = Object.values(guitars)
        return array[newGuitarRequested];
    }

    const getAmpDetails = (id) => {
        let theGuitarRequested = Number(Object.values(id))
        const newGuitarRequested = (theGuitarRequested - 1)
        let array = Object.values(amps)
        return array[newGuitarRequested];
    }

    return {
        guitars, getGuitarDetails, radioButtonSelection, getAmpDetails, amps

    };
}

export default GuitarHooks;
