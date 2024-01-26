// import React from 'react'
import PropTypes from 'prop-types'

const SectionHead = ({heading1,heading2}) => {
  return (
    <div className="text-center">
        <div className="py-2 border-y-2 inline-block border-[#100E0E]">
            <h3 className="text-[#a26e44]">{heading1} <span className="font-[400] text-[#100E0E]">{heading2}</span></h3>
        </div>
    </div>
  )
}

SectionHead.propTypes = {
    heading1: PropTypes.string,
    heading2: PropTypes.string,
}

export default SectionHead
