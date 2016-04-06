var React = require('react');

var PhotoList =  require('./PhotoList.jsx')

var images = [{"id":1,"source":"../../images/photo1.resized.jpg"},{"id":2,"source":"../../images/photo2.resized.jpg"},{"id":3,"source":"../../images/photo3.resized.jpg"},{"id":4,"source":"../../images/photo4.resized.jpg"},{"id":5,"source":"../../images/photo5.resized.jpg"},{"id":6,"source":"../../images/photo6.resized.jpg"},{"id":7,"source":"../../images/photo7.resized.jpg"},{"id":8,"source":"../../images/photo8.resized.jpg"},{"id":9,"source":"../../images/photo1.resized.jpg"},{"id":10,"source":"../../images/photo2.resized.jpg"}];



var Photos = React.createClass({
    render: function() {
      var divStyle = {
        width: 1000,
        margin: "auto",
      }

      var divStyle2 = {
        //margin: 10,
        textAlign: "center"
      }

      var photoList = images.map(function(item){
        return <PhotoList key={item.id} source={item.source} />
      });
      return (
        <div className="panel panel-default" style={divStyle}>
            <div className="row">
                <div className="col-sm-12 panel-body" style={divStyle2}>
                      {photoList}
                </div>
            </div>
        </div>
      );
    }
});

module.exports = Photos;
