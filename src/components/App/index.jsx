import React from 'react'

export default React.createClass({
  displayName: 'App',
  propTypes: { children: React.PropTypes.node },
  render: function() {
    return React.cloneElement(this.props.children)
  }
})
