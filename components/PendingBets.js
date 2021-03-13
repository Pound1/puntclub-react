import React from 'react'
import Link from 'next/link'
import Slider from 'react-slick'
import BetSlip from './BetSlip'

class PendingBets extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      data: props.data,
    }
  }

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
    }
    return (
      <div className="container">
        <div className="row">
          <Slider {...settings}>
            {this.state.data.map((item, key) => (
              <BetSlip bet={item} />
            ))}
            <div className="col-md-3"></div>
          </Slider>
        </div>
      </div>
    )
  }
}

export default PendingBets
