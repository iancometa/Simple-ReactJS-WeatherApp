// Simple ReactJS Weather app

var ShowWeather = React.createClass({
  render() {
    return (
      <div className="panel panel-default">
        <div className="panel-heading">
          <h3 className="panel-title">City: {this.props.locCity}</h3>
        </div>
        <div className="panel-body">
          Weather: <strong>{this.props.weather}</strong>
        </div>
      </div>
    )
  }
});

var InputLocation = React.createClass({

  getInitialState() {
    return {
      appId: '', //please sign up to get API key
      city: '',
      weather: ''
    }
  },

  handleClick() {
    var source = "http://api.openweathermap.org/data/2.5/weather?q="+this.state.city+"&appid="+this.state.appId;
    $.get(source, function(result){
      this.setState({
        city: this.state.city,
        weather: result.weather[0].description,
      });
    }.bind(this));
  },

  handleChange(e) {
    this.setState({
      city: e.target.value
    });
  },

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="jumbotron">
              <h2>ReactJS Weather App</h2>
              <div className="col-md-6">
                <div className="input-group">
                  <input onChange={this.handleChange} type="text" refs="locInput" className="form-control" placeholder="Search for..." />
                  <span className="input-group-btn">
                    <button onClick={this.handleClick} className="btn btn-default" type="button">Search</button>
                  </span>
                </div>
              </div>
            </div>
            <ShowWeather locCity={this.state.city} weather={this.state.weather} />
          </div>
        </div>
      </div>
    )
  }
});

ReactDOM.render(<InputLocation />, document.getElementById('w-container'));
