import React from 'react';
import { connect } from 'react-redux';

const Items = props => (
  <div>
    {props.items.map((item, idx) => <Item key={idx} text={item} />)}
  </div>
)

const Item = ({text}) => <div>{text}</div>

const mapStateToProps = state => ({
  items: state.items.items
})

export default connect(mapStateToProps)(Items);
