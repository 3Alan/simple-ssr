import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAppsIfNeeded } from '../redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mountVariable: 'server render'
    };
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppsIfNeeded());
    this.setState({
      mountVariable: 'client render'
    });
  }

  render() {
    const { isFetching, apps } = this.props;
    const totalapps = apps.length;

    return (
      <>
        {isFetching && totalapps === 0 && <h2>Loading...</h2>}
        {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
        <p>{totalapps}</p>
        <span className="123">{this.state.mountVariable}</span>
      </>
    );
  }
}
function mapStateToProps({ isFetching, apps }) {
  return {
    isFetching,
    apps
  };
}
export default connect(mapStateToProps)(App);
