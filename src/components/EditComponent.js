import React, { Component } from 'react';
import axios from 'axios';

export default class EditComponent extends Component {

    constructor(props) {
        super(props);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeNom = this.onChangeNom.bind(this);
        this.onChangeType = this.onChangeType.bind(this);
        this.onChangeTitre = this.onChangeTitre.bind(this);
        this.onChangeDescription = this.onChangeDescription.bind(this);
        this.onChangeCreateur = this.onChangeCreateur.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.onSubmitProject = this.onSubmitProject.bind(this);

        this.state = {
            age: '',
            nom: '',
            type: '',
            titre:'',
            description:'',
            createur: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4200/serverport/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ age: response.data.age, nom: response.data.nom, type: response.data.type});
            })
            .catch(function (error) {
                console.log(error);
            })
        axios.get('http://localhost:4200/project/edit/'+this.props.match.params.id)
            .then(response => {
                this.setState({ titre: response.data.titre, description: response.data.description, createur: response.data.createur});
            })
            .catch(function (error) {
                console.log(error);
            })
        }

        

        onChangeAge(e) {
            this.setState({
                age: e.target.value
            });
        }
        onChangeNom(e) {
            this.setState({
                nom: e.target.value
            });
        }
        onChangeType(e) {
            this.setState({
                type: e.target.value
            });
        }

        onChangeTitre(e) {
            this.setState({
                titre: e.target.value
            });
        }
        onChangeDescription(e) {
            this.setState({
                description: e.target.value
            });
        }
        onChangeCreateur(e) {
            this.setState({
                createur: e.target.value
            });
        }
        onSubmit(e) {
            e.preventDefault();
            const Edit = {
                age: this.state.age,
                nom: this.state.nom,
                type: this.state.type
            }
            
        axios.post('http://localhost:4200/serverport/update/'+this.props.match.params.id, Edit)
        .then(res => console.log(res.data));
        this.setState({
            age: '',
            nom: '',
            type: ''
        })
        this.props.history.push('/index');
    }

    onSubmitProject(e) {
        e.preventDefault();
        const Project = {
            titre: this.state.titre,
            description: this.state.description,
            createur: this.state.createur,
        }
        axios.post('http://localhost:4200/project/update/'+this.props.match.params.id, Project)
        .then(res => console.log(res.data));

        this.setState({
            titre: '',
            description: '',
            createur: ''
        })
        this.props.history.push('/index');
    }

    render() {
        return (
          <div className="mgnTop50">
              <h3>Modifier un utilisateur</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label> Age: </label>
                      <input type="text" value={this.state.age} className="form-control" onChange={this.onChangeAge}/>
                  </div>
                  <div className="form-group">
                      <label> Nom: </label>
                      <input type="text" value={this.state.nom} className="form-control" onChange={this.onChangeNom}/>
                  </div>
                  <div className="form-group">
                      <label> Type: </label>
                      <input type="text" value={this.state.type} className="form-control" onChange={this.onChangeType}/>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="modifier " className="btn btn-primary"/>
                  </div>
              </form>

              <h3>Modifier Un Projet</h3>
              <form onSubmit={this.onSubmit}>
                  <div className="form-group">
                      <label> Titre: </label>
                      <input type="text" value={this.state.titre} className="form-control" onChange={this.onChangeTitre}/>
                  </div>
                  <div className="form-group">
                      <label> Description: </label>
                      <input type="text" value={this.state.description} className="form-control" onChange={this.onChangeDescription}/>
                  </div>
                  <div className="form-group">
                      <label> createur: </label>
                      <input type="text" value={this.state.createur} className="form-control" onChange={this.onChangeCreateur}/>
                  </div>
                  <div className="form-group">
                      <input type="submit" value="modifier " className="btn btn-primary"/>
                  </div>
              </form>
          </div>
        )
    }
}
