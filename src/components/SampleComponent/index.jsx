import React from 'react'

require('./index.scss')

export default React.createClass({
  displayName: 'SampleComponent',
  render: function() {
    return <div className="SampleComponent">
      <h1> React Redux Scaffolding </h1>
      <h2> Hello Squirrel! </h2>
    </div>
  }
})
