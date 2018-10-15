import React, { Component } from 'react';
import axios from 'axios';
import TableRow from './TableRow';

export default class ProjectComponent extends Component {
  constructor(props) {
      super(props);
      this.state = {projects: []};
    }
    componentDidMount(){
      axios.get('http://localhost:4200/project')
      .then(response => {
        this.setState({ projects: response.data });
      })
      .catch(function (error) {
        console.log(error);
      })
    }
    tabRow(){
        return this.state.projects.map(function(object, i){
            return <TableRow obj={object} key={i} />
        });
    }

    render() {
      return (
        <div className="container">
            <table className="table table-striped">
              <thead>
                <tr>
                  <td>ID</td>
                  <td>Titre projet</td>
                  <td >Description projet</td>
                  <td>Createur</td>
                </tr>
              </thead>
              <tbody>
                {this.tabRow()}
              </tbody>
            </table>
        </div>
      );
    }
  }
