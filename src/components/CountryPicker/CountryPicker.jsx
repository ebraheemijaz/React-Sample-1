import React, { useEffect, useState } from 'react'
import { NativeSelect, FormControl } from '@material-ui/core'

import styles from './CountryPicker.module.css'

import { countries } from '../../api'

function CountryPicker(props) {
    const [allcountries, setAllcountries] = useState([])

    useEffect(() => {
        const fetechCountries = async () => {
            setAllcountries(await countries())
        }
        fetechCountries()
    }, [setAllcountries])

    return (
        <FormControl className={styles.formControl}>
            <NativeSelect
                defaultValue=""
                onChange={(e) => {
                    props.handleChange(e.target.value)
                }}
            >
                <option value="">Global</option>
                {allcountries.map((each, i) => (
                    <option key={i} value={each.name}>
                        {each.name}
                    </option>
                ))}
            </NativeSelect>
        </FormControl>
    )
}

export default CountryPicker
