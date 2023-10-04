import React from 'react'
import data from '../../../../data'
import PropTypes from 'prop-types';


export const Features = (props) => {

  const {
    className,
    features,
    headline,
    ...otherProps
  } = props

  const renderListItem = (item, i) => {
    return (
      <>
        <div className={className}>
          <img className={'feature__image'} src={item.image} ></img>
          <h4 className={'feature__description'}>{item.title}</h4>
          <p className={'feature__text'}>{item.text}</p>
        </div>
      </>
    )
  }

  return (
    <section className={"features"} id="features">
      {headline}
      {/* <h2 className={"features__header"}>FEATURES</h2> */}
      <div className={"features__container"}>
        {features.list.map((item, i) => {
          return renderListItem(item, i)
        })}
      </div>
    </section>
  )
}

Features.propTypes = {
  className: PropTypes.string,
  features: PropTypes.object
}

export default Features