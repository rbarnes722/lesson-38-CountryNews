var React = require('react');

var Header = require('./Header.jsx');
var Footer = require('./Footer.jsx');

var Base = React.createClass({
    render: function() {
      return(
        <div>
          <Header />
          {this.props.children}
          <Footer />
        </div>
      );
    }
});

module.exports = Base;
