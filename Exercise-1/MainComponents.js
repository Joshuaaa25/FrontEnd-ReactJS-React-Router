class Header extends React.Component {
    constructor() {
      super();
      this.state = {
        angka1: "",
        angka2: "",
        resultMultiply: "",
        resultDivide: "",
        resultSubtract: "",
        resultAdd: "",
      };
    }
  
    setValue1 = (val1) => {
      this.setState({ angka1: "" + val1 });
    };
  
    setValue2 = (val2) => {
      this.setState({ angka2: "" + val2 });
    };
  
    funcMultiply = () => {
      var hasil = parseInt(this.state.angka1) * parseInt(this.state.angka2);
      this.setState({ resultMultiply: "" + hasil });
    };
  
    funcDivide = () => {
      var hasil = parseInt(this.state.angka1) / parseInt(this.state.angka2);
      this.setState({ resultDivide: "" + hasil });
    };
  
    funcSubtract = () => {
      var hasil = parseInt(this.state.angka1) - parseInt(this.state.angka2);
      this.setState({ resultSubtract: "" + hasil });
    };
  
    funcAdd = () => {
      var hasil = parseInt(this.state.angka1) + parseInt(this.state.angka2);
      this.setState({ resultAdd: "" + hasil });
    };
  
    reset = () => {
      this.setState({
        angka1: "",
        angka2: "",
        resultMultiply: "",
        resultDivide: "",
        resultSubtract: "",
        resultAdd: "",
      });
    };
  
    render() {
      return (
        <div>
          <h1>Simple Calculator ReactJS</h1>

              <tr>
                <td>Input:</td>
                <td><input value={this.state.angka1} onChange={(e) => {this.setValue1(e.target.value);}}/>
                </td>
              </tr>
              
              <tr>
                <td>Input:</td>
                <td><input value={this.state.angka2} onChange={(e) => {this.setValue2(e.target.value);}}/>
                </td>
              </tr>
            
          <button onClick={this.funcMultiply}>Multiply</button>
          <input value={this.state.resultMultiply} />
          <br />
          <button onClick={this.funcDivide}>Division</button>
          <input value={this.state.resultDivide} />
          <br />
          <button onClick={this.funcSubtract}>Subtract</button>
          <input value={this.state.resultSubtract} />
          <br />
          <button onClick={this.funcAdd}>Addition</button>
          <input value={this.state.resultAdd} />
          <br />
          <button onClick={this.reset}>Reset</button>
        </div>
      );
    }
  }
  
  ReactDOM.render(<Header />, document.getElementById("app"));
  