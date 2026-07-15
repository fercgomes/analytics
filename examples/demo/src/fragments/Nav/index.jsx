import React from 'react'
import { Link } from "react-router-dom"
import ForkMe from '../../components/ForkMe'
import posthog from '../../posthog.js'
import './Nav.css'

const Navigation = () => {
  return (
    <div className="navigation">
      <Link to='/'>Home</Link>
      <Link to='/listeners'>Listeners</Link>
      <Link to='/state'>State</Link>
      <Link to='/kitchen-sink'>Kitchen Sink</Link>
      <a href='https://getanalytics.io/' className='doc-link' target='_blank' rel='noopener noreferrer' onClick={() => posthog.capture('docs_link_clicked')}>
        Documentation
      </a>
      <a className='doc-link' href='https://github.com/DavidWells/analytics/tree/master/examples' target='_blank' rel='noopener noreferrer' onClick={() => posthog.capture('github_examples_link_clicked')}>
        More Examples
      </a>
      <ForkMe url='https://github.com/DavidWells/analytics' />
    </div>
  )
}

export default Navigation
