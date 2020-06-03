import React, { Component } from 'react'

import { Cards, Chart, CountryPicker } from './components'

import styles from './App.module.css'

import { fetchData } from './api'

import image from './images/image.png'

class App extends Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetechedData = await fetchData()
        this.setState({ data: fetechedData })
    }

    handleChange = async (name) => {
        const fetechedData = await fetchData(name)
        this.setState({ data: fetechedData, country: name })
    }

    render() {
        return (
            <div className={styles.container}>
                <img className={styles.image} src={image} alt="logo" />
                <Cards data={this.state.data} />
                <CountryPicker handleChange={this.handleChange} />
                <Chart data={this.state.data} country={this.state.country} />
            </div>
        )
    }
}

export default App
