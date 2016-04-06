var React = require('react');

var Menu = require('./Menu.jsx');

var Header = React.createClass({
    render: function() {

      var divStyle = {
        backgroundColor: 'blue',
        color: '#fff',
        textDecoration: 'none',
        width: 1000,
        margin: 0,
        margin: "auto",
        fontWeight: "bold"
        //textAlign: 'center'
      }

      var divStyle2 = {
        marginTop: 10,
      }



      return (
        <div style={divStyle} className="row">
            <div className="col-xs-6">
                <h1>Country News</h1>
                <h3>Top stories in my country</h3>
            </div>
            <div className="col-xs-6">
                <div className="pull-right" style={divStyle2}>
                <a href="https://www.twitter.com" target="_blank"><img src="../../images/twitter2.png"></img></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.facebook.com" target="_blank"><img src="../../images/facebook2.png"></img></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.instagram.com" target="_blank"><img src="../../images/instagram.png"></img></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.linkedin.com"  target="_blank"><img src="../../images/linkedin2.png"></img></a>&nbsp;&nbsp;&nbsp;
                <a href="https://www.gmail.com" target="_blank"><img src="../../images/email.png"></img></a>

                </div>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <div className="pull-right">
                      <Menu />
                    </div>
                </div>
            </div>
        </div>
      );
    }
});

module.exports = Header;
