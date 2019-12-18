import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import data from './data/coins'
import DataTable from "./components/data-table";
import './App.css';

class App extends Component{
    constructor(props) {
        super(props);
        this.state = {
            data: data,
            direction: {
                price_usd: 'asc',
                percent_change_1h: 'asc',
                percent_change_24h: 'asc',
                percent_change_7d: 'asc'
            }
        }
        this.sortBy = this.sortBy.bind(this)
    }
    sortBy(key){
        console.log(key)
      this.setState({
          data: data.sort( (a,b) =>
              this.state.direction[key] === 'asc' ? parseFloat(a[key]) - parseFloat(b[key]) : parseFloat(b[key]) - parseFloat(a[key])
          ),
          direction:{
             [key]:  this.state.direction[key] === 'asc' ? 'desc' : 'asc'
          }

      })
    }
    render() {
        return(
            <div className="App">
                <DataTable data={this.state.data} sortBy={this.sortBy} direction={this.state.direction}/>
            </div>
        )
    }
}

export default App;
