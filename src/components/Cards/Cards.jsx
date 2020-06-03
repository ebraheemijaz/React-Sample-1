import React from 'react'
import { Card, CardContent, Typography, Grid } from '@material-ui/core'

import styles from './Cards.module.css'

import CountUp from 'react-countup'
import cx from 'classnames'

function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
    if (!confirmed) {
        return <div>Loading...</div>
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid
                    xs={12}
                    md={3}
                    item
                    component={Card}
                    className={cx(styles.card, styles.infected)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Infected
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={1.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body1">
                            Number of cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    xs={12}
                    md={3}
                    item
                    component={Card}
                    className={cx(styles.card, styles.recovered)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Recovered
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={1.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body1">
                            Number of cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
                <Grid
                    xs={12}
                    md={3}
                    item
                    component={Card}
                    className={cx(styles.card, styles.deaths)}
                >
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>
                            Death
                        </Typography>
                        <Typography variant="h5">
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={1.5}
                                separator={','}
                            />
                        </Typography>
                        <Typography color="textSecondary">
                            {new Date(lastUpdate).toDateString()}
                        </Typography>
                        <Typography variant="body1">
                            Number of cases of covid-19
                        </Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
