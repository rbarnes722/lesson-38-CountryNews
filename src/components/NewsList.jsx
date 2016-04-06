var React = require('react');

var NewsList = React.createClass({



    render: function() {

      var divStyle = {
        width: 1000,
        //margin: 0,
        margin: "auto",
        marginBottom: 20,
        //textAlign: 'center'
      }

      var divStyle2 = {
        //width: 1000,
        //margin: 0,
        //margin: "auto",
        marginRight: 30,
        //textAlign: 'center'
      }


      return(
        <div className="panel panel-default" style={divStyle}>
          <div className="row">
            <div className="col-xs-2">
              <div>
                <img src={this.props.icon}></img>
              </div>
            </div>
            <div className="col-xs-10">
              <div>
                <h2>{this.props.title}</h2>
                <h4>{this.props.subtitle}</h4>
                <p style={divStyle2}>{this.props.intro}</p>
                <img src={this.props.thumbnail}></img>
                <p>{this.props.location}</p>
              </div>
            </div>
          </div>
        </div>

      );
    }

});

module.exports = NewsList;
