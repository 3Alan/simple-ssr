import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Routes } from 'react-router-dom';
import Detail from './pages/Detail';
import List from './pages/List';
import { fetchAppsIfNeeded } from './redux/actions';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchAppsIfNeeded());
  }

  render() {
    const { isFetching, apps } = this.props;
    const totalapps = apps.length;

    return (
      <>
        {isFetching && totalapps === 0 && <h2>Loading...</h2>}
        {!isFetching && totalapps === 0 && <h2>Empty.</h2>}
        <p>{totalapps}</p>
        <Routes>
          <Route path="/">
            <Route path="/list" element={<List />} />
            <Route path="/detail/:id" element={<Detail />} />
          </Route>
        </Routes>
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
