import React from 'react'
import { connect } from 'react-redux'

const Items = props => (
  <div>
    {props.items.slice(0,10).map((item, idx) => (
      <Item key={idx} item={item} />)
    )}
  </div>
)

const Item = ({item}) => (
  <div className='item'>
    <img src={item.url} />
    <div>{item.title}</div>
  </div>
)

const mapStateToProps = state => ({
  items: state.items.items,
})

export default connect(mapStateToProps)(Items)
