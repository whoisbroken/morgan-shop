import React from 'react';

import arrow from "../../images/arrow_bottom.svg";

import './Scroll.scss';

const Scroll = ({ showBelow }) => {

  const [show, setShow] = React.useState(showBelow ? false : true)

  const handleScroll = () => {
    if (window.pageYOffset > showBelow) {
      if (!show) setShow (true)
    } else {
      if (show) setShow(false)
    }
  }

  React.useEffect(() => {
    if (showBelow) {
      window.addEventListener(`scroll`, handleScroll)
      return () => window.removeEventListener(`scroll`, handleScroll)
    }
  })

  return (
    <button 
      className={show ? "Scroll_Btn Scroll_Btn--active" :  "Scroll_Btn" }
      onClick={show ? () => window.scrollTo(0, 0) : () => window.scrollTo(0, document.documentElement.scrollHeight)}
    >
			<span className="Scroll_Text">{show ? 'Top' : 'Scroll'}</span>
      <img src={arrow} alt="Scroll_Arrow" className="Scroll_Arrow"/>
    </button>
  )
}

export default Scroll;