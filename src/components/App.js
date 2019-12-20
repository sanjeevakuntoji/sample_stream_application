import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import StreamCreate from './strems/StreamCreate';
import StreamEdit from './strems/StreamEdit';
import StreamDelete from './strems/StreamDelete';
import StreamList from './strems/StreamList';
import StreamShow from './strems/StreamShow';
import history from '../history';


// const PageOne = () =>{
//     return<div>PageOne
//         {/* ///Bad!
//         <a href="/pageTwo">navigation to pageTwo</a> */}
//         <Link to="/pageTwo">Navigate to pageTwo</Link>
//     </div>
// }
// const PageTwo = () =>{
//     return<div> PageTwo
//         {/* ///Bad!
//         <a href="/">NAvigate to pageOne</a> */}
//         <Link to="/">Navigate to pageone</Link>
//         <button>Click Me!</button>
//     </div>
// }
const App = () => {
    return (
        <div className="ui container">
            
            <Router history={history}>
                {/* <Route path="/" exact component={PageOne} />
                <Route path="/pageTwo" exact component={PageTwo} /> */}
                <Header />
                <Switch>
                <Route path="/" exact component={StreamList} />
                <Route path="/streams/new" exact component={StreamCreate} />
                <Route path="/streams/edit/:id" exact component={StreamEdit} />
                <Route path="/streams/delete/:id" exact component={StreamDelete} />
                <Route path="/streams/:id" exact component={StreamShow} />
                </Switch>
            </Router>
        </div>
    )
}

export default App;