var CharSubmit = React.createClass({
  getInitialState: function() {
    return {items: [], text: ''};
  },
  onChange: function(e) {
    this.setState({text: e.target.value});
  },
  handleSubmit: function(e) {
    e.preventDefault();
    var nextItems = this.state.items.concat([this.state.text]);
    var nextText = '';
    this.setState({items: nextItems, text: nextText});
  },
  render: function() {
    return (
      <div>
        <h3>You have 10 seconds to type as many words/characters as possible. Ready? Press the 'Start' button to go!</h3>
        <Timer />
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.text} />
          <button>{'Submit'}</button>
        </form>
      </div>
    );
  }
});

var Timer = React.createClass({
  getInitialState: function() {
    return {secondsElapsed: 0, button_press: false};
  },
  startTick: function() {
    this.setState({button_press: true});
  },
  tick: function() {
    this.setState({secondsElapsed: this.state.secondsElapsed + 1});
  },
  componentDidMount: function() {
    if(this.state.button_press){
      this.interval = setInterval(this.tick, 1000);
    }
  },
  componentWillUnmount: function() {
    clearInterval(this.interval);
  },
  render: function() {
    return (
      if(this.state.button_press){
        <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
      } else {
        <form onSubmit={this.startTick}>
          <button>{'Start Timer'}</button>
        </form>
      }
    );
  }
});

window.reactRoot = React.render(<CharSubmit />, document.getElementById("test"));
