import React from 'react';
import { connect } from 'react-redux';

const Item = ({text}) => (
  <div>{text}</div>
);

class Items extends React.Component {
  render() {
    return (
      <div>
        {this.props.items.map((item, idx) => (
          <Item text={item} key={idx} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  items: state.items.items
})

export default connect(mapStateToProps)(Items);