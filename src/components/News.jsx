var React = require('react');
var NewsList = require('./NewsList.jsx');

var ingredients = [{"id":1,"title":"Oil Declines","subtitle":"Rising U.S. Crude Stockpiles Expand Global Glut","intro":"Oil declined as rising U.S. crude stockpiles kept supplies at the highest level in more than eight decades. Futures slid as much as 1.5 percent in New York after closing little changed Wednesday.","thumbnail":"../../images/bloomberg.resized.png","location":"U.S.A.","icon":"../../images/bootstrap-logo.jpg"},{"id":2,"title":"Asian Shares Slide","subtitle":"Asian shares slide; frazzled by Fed, falling oil prices","intro":"TOKYO Asian shares and other riskier assets skidded on Tuesday, pressured by slumping crude oil prices and mixed messages from Federal Reserve policymakers on the outlook for U.S.","thumbnail":"../../images/japan.resized.jpg","location":"Japan","icon":"../../images/reuters.resized.png"}];


var News = React.createClass({
  render: function() {

    var newsItems = ingredients.map(function(item) {
      return <NewsList key={item.id} title={item.title} subtitle={item.subtitle} intro={item.intro} thumbnail={item.thumbnail} location={item.location} icon={item.icon}/>
    });
    return (<ul>{newsItems}</ul>);
  }
});


module.exports = News;
