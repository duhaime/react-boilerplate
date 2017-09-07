import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { open, close } from '../actions/navicon';
import { Link } from 'react-router-dom';

class Navicon extends React.Component {
  constructor(props) {
    super(props)
    this.handlers = this.handleClick.bind(this)
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handleClick.bind(this), false)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClick.bind(this), false)
  }

  handleClick(e) {
    if (e.target.tagName !== 'A') this.props.close()
  }

  render() {
    return (
      <div className='navicon-container'>
        <div className='navicon' onClick={this.props.open} >
          <span />
          <span />
          <span />
        </div>
        <div className={'dropdown ' + this.props.display}>
          <Link to={'/'}>{'Home'}</Link>
          <Link to={'/about'}>{'About'}</Link>
        </div>
      </div>
    )
  }
}

Navicon.propTypes = {
  display: PropTypes.string.isRequired,
  open: PropTypes.func.isRequired,
  close: PropTypes.func.isRequired
}

const mapStateToProps = state => ({
  display: state.navicon,
})

const mapDispatchToProps = dispatch => ({
  open: () => dispatch(open()),
  close: () => dispatch(close())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navicon)