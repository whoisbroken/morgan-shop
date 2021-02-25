import React from 'react';

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

  const handleClick = () => {
    window[`scrollTo`]({ top: 0, behavior: `smooth` })
  }

  return (
    <button 
      className="Scroll_Btn"
      onClick={handleClick}
    >
      { show ? "Top" : "Scroll" }
    </button>
  )
}

export default Scroll;