import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

export const fetchData = async (country = '') => {
    const changeableurl = country === '' ? url : `${url}/countries/${country}`
    try {
        const {
            data: { confirmed, recovered, deaths, lastUpdate },
        } = await axios.get(changeableurl)
        return { confirmed, recovered, deaths, lastUpdate }
    } catch (error) {}
}

export const fetechDaily = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`)
        const modifiedData = data.map((each) => ({
            reportDate: each.reportDate,
            confirmed: each.confirmed.total,
            deaths: each.deaths.total,
        }))
        return modifiedData
    } catch (error) {}
}

export const countries = async () => {
    try {
        const { data } = await axios.get(`${url}/countries`)
        return data.countries
    } catch (error) {}
}
