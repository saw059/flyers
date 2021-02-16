import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    titre: '',
    description:'',
    image:'',
  };
    
  

  handlchange = (event) => {
    const value = event.target.value;
    this.setState({ titre: value });
  };
  handlchange2 = (event) => {
    const valeur = event.target.value
    this.setState({ description: valeur });
  };
  handlchange3 = (event) => {
    const valeur3 = event.target.value
    this.setState({ image: valeur3 });
  };
  
  
  handelSubmit=(event)=>{
    event.preventDefault();
    
  }
  render(){
    return (
      <div className="App">
        <div className="toolbar">
        <h1 className="h1">FLYING FOR YOU</h1>
  
        </div>
        <div className="contenu">
          <h1>📃 FLYERS

          </h1>
        </div>
        <div className="formulaire">
          <h3>PERSONALISE TON FLYERS</h3>
          <form onSubmit={this.handelSubmit}>
            <input value={this.state.titre}
            onChange={this.handlchange}
            type="texte" placeholder="titre"></input><br/>
            <input value={this.state.description}
            onChange={this.handlchange2}
            type="texte" placeholder="descrption"
            className="descriptionInput"></input><br/>
            <input value={this.state.image}
            onChange={this.handlchange3}
            type="texte" placeholder="url de l'image"></input><br/>
            <button>🖨 IMPRIMER</button>
          </form>

        </div>
            
        
          
            <div className="rendu">

            
            <img className="image" src={this.state.image}/>
            <h1 className="titre">
              {this.state.titre}
            </h1>
            <p className="description">
            {this.state.description}
            </p>
            </div>
  

        

        
      </div>
    );
  }

  }
  

export default App;
