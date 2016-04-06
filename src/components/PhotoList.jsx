var React = require('react');

var PhotoList = React.createClass({
    render: function() {

      var divStyle = {
        margin: 25,
      }

      return(
        <img style={divStyle} src={this.props.source}></img>
      );
    }
});

module.exports = PhotoList;
