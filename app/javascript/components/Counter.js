const React = require('react');
const PropTypes = require('prop-types');


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
  }
  changeCount(int) {
    console.log('changeCount', int);
    this.setState(state => {
      console.log('current state state', state)
      return Object.assign(state, { count: state.count + int });
    });
  } 
  render () {
    return (
      <div className="Counter">
        <div>count: {this.state.count}</div>
        <button onClick={() => this.changeCount(1)}>Add 1</button>
        <button onClick={() => this.changeCount(-1)}>Subtract 1</button>
      </div>
    );
  }
}

Counter.propTypes = {
  name: PropTypes.string
};

module.exports = Counter;