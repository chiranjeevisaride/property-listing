import React, { Component } from 'react';
import 'App.scss';
import { Header } from 'components/shared/Header';
import RentalList from 'components/shared/rental/rental-listing/RentalList';
import RentalDetail from 'components/shared/rental/rental-detail/RentalDetail';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import {init} from 'reducers';

class App extends Component {
  render() {
    
    return (
      <Provider store={init()}>
        <BrowserRouter>
          <div className="App">
            <Header />
            <div className='container'>
              <Route exact path="/" render={() => <Redirect to="/rentals" />} />
              <Route exact path="/rentals/" component={RentalList} />
              <Route exact path="/rentals/:id" component={RentalDetail} />
            </div>
          </div>
        </BrowserRouter>
      </Provider>

    );
  }
}

export default App;
