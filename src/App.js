import React,{Component} from 'react';
//import logo from './logo.svg';
//import Resep from './components/resep';
//import Axios from 'axios';
//import './App.css';
//import gamb from './avatar5.png';


class App extends Component {

  state = {
    resep: []
  }

  componentDidMount()
  {
    //fetch('http://jsonplaceholder.typicode.com/users')
    fetch('http://localhost:8081/resep')
    .then(res => res.json())
    .then((data) => {
      this.setState({
        resep: data
      })
    }).catch(console.log)
  }

  render()
  {
    return (
      <div>
        <header className>
          <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" integrity="sha384-JcKb8q3iqJ61gNV9KGb8thSsNjpSL0n8PARn9HuZOnIxN0hoP+VmmDGMN5t9UJ0Z" crossorigin="anonymous"></link>
        </header>
        <body>
            <center><h1>Daftar Resep</h1></center>

            <div class="container-fluid">
              <div class="alert alert-primary" role="alert">
                Home
              </div>
              
                <div class="row mb-2">
                  {
                    this.state.resep.map((row, index) =>{
                      return (
                        <div class="col-md-6">
                          <div class="card mb-3">
                            <div class="row">
                                <div class="col-md-4">
                                    <img src={row.gambar} class="card-img" alt="gambar"/>
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h3 class="card-title">{row.nama}</h3>
                                        <p class="card-text">{row.deskripsi}</p>
                                    </div>
                                </div>
                            </div>
                          </div>
                      </div>      
                      )
                    })
                  }
                </div>

                
            </div>
        </body>
      </div>
    );
  }
  
}

export default App;
