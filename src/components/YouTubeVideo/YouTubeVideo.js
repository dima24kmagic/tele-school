import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid/Grid'

const propTypes = {
  /** @ignore */
  classes: PropTypes.object.isRequired,
}

const defaultProps = {}

const styles = {}

/**
 * Youtube Video
 */
export function YouTubeVideo({ classes }) {
  return (
    <Grid container> </Grid>
  )
}

YouTubeVideo.propTypes = propTypes
YouTubeVideo.defaultProps = defaultProps

const enhance = withStyles(styles)

export default enhance(YouTubeVideo)