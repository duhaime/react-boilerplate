import React from 'react';
import { Link } from 'react-router-dom';
import './navicon.css';

export default class Navicon extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      opened: false
    }

    this.handleClick = this.handleClick.bind(this)
    this.open = this.open.bind(this)
    this.close = this.close.bind(this)
  }

  componentDidMount() {
    window.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    window.removeEventListener('mousedown', this.handleClick, false)
  }

  handleClick(e) {
    e.target.tagName == 'A' ? {} : this.close()
  }

  open() {
    this.setState({opened: true})
  }

  close(e) {
    this.setState({opened: false})
  }

  render() {
    var dropdown = this.state.opened ? 'opened' : 'closed';

    return (
      <div className='navicon-container'>
        <div className='navicon' onClick={this.open} >
          <span />
          <span />
          <span />
        </div>
        <div className={'dropdown ' + dropdown}>
          <Link to={'/'}>{'Home'}</Link>
          <Link to={'/about'}>{'About'}</Link>
        </div>
      </div>
    )
  }
}