var React = require('react');
var ReactRouter = require('react-router');
var CreateHistory = require('history/lib/createHashHistory');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;

var Base = require('./components/Base.jsx');
var News = require('./components/News.jsx');
var Photos = require('./components/Photos.jsx');

var History = new CreateHistory({
    queryKey: false
});


var Routes = (
    <Router history={History}>
        <Route path="/" component={Base} >
            <IndexRoute component={News}/>
            <Route path="/photos" component={Photos} />
        </Route>
    </Router>
);

module.exports = Routes;
