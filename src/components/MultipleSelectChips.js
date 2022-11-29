import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import useMediaQuery from '@mui/material/useMediaQuery'
import {
  makeStyles,
  FormLabel,
  Chip,
  Typography,
  FormHelperText
} from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '.5rem 0 .5rem',
    textAlign: 'center'
  },
  chipsDiv: {
    marginTop: '0.3rem'
  },
  chip: {
    // padding: '2px 10px',
    margin: '5px',
    justifyContent: 'center',
    alignItems: 'center',
    border: '2px solid #333333',
    borderRadius: '10% 8% 10% 10% / 12% 4% 10% 10%',
    textAlign: 'center',
    cursor: 'pointer',
    [theme.breakpoints.down('sm')]: {
      border: '1px solid #333333',
      paddingTop: '0px',
      height: '25px'
    },
    '& .MuiChip-label': {
      paddingLeft: '4px',
      paddingRight: '4px'
    }
  },
  chipText: {
    fontFamily: 'Helvetica',
    fontWeight: 400,
    padding: '0px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '10px',
      padding: '0px'
    }
  },
  formHelperText: {
    textAlign: 'center'
  }
}))

// 1.0.5

const MultipleSelectChips = ({
  value,
  setValue,
  options,
  label,
  error,
  setError,
  change
}) => {
  const classes = useStyles()
  const [selectedTags, setSelectedTags] = useState('')

  useEffect(() => {
    setSelectedTags(options.filter((option) => value.indexOf(option.value) !== -1)
      .map((option) => option.value).join(', '))
    change(options.filter((option) => value.indexOf(option.value) !== -1)
      .map((option) => parseInt(option.value)))
  }, [value])

  const handleClick = (clickedValue) => {
    if (setError) {
      setError('')
    }
    if (value.find((e) => e === clickedValue)) {
      const index = value.findIndex((e) => e === clickedValue)
      const arr = [...value]
      arr.splice(index, 1)
      setValue(arr)
    } else {
      setValue([...value, clickedValue])
    }
  }

  return (
    <>
      <div className={classes.container}>
        {/* {label && (
          <FormLabel error={Boolean(error)}>
            <Typography variant="body2">{`${label}${
              value.length ? ":" : ""
            } ${selectedTags}`}</Typography>
          </FormLabel>
        )} */}
        {Boolean(error) && (
          <FormHelperText
            className={classes.formHelperText}
            error={Boolean(error)}
          >
            {error}
          </FormHelperText>
        )}
        <div className={classes.chipsDiv}>
          {options && options.length
            ? options.map((option, i) => (
                <Chip
                  icon={option.icon}
                  className={classes.chip}
                  key={i}
                  color="primary"
                  variant={
                    value.find((e) => e === option.value)
                      ? 'default'
                      : 'outlined'
                  }
                  label={
                    <Typography className={classes.chipText}>{`${option.label}`}</Typography>
                  }
                  clickable
                  onClick={() => handleClick(option.value)}
                />
            ))
            : null}
        </div>
      </div>
    </>
  )
}

MultipleSelectChips.propTypes = {
  label: PropTypes.string,
  value: PropTypes.array.isRequired,
  setValue: PropTypes.func.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      icon: PropTypes.node
    })
  ).isRequired,
  error: PropTypes.string,
  setError: PropTypes.func,
  change: PropTypes.array
}

export default MultipleSelectChips
