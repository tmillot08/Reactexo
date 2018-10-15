import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class TableRow extends Component {
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
    }
    delete() {
        axios.get('http://localhost:4200/serverport/delete/'+this.props.obj._id)
            .then(() => {
              console.log('Deleted');
              //window.location.reload();
            })
            .catch(err => console.log(err));
    }

    delete() {
        axios.get('http://localhost:4200/project/delete/'+this.props.obj._id)
            .then(() => {
              console.log('Deleted');
              //window.location.reload();
            })
            .catch(err => console.log(err));
    }
    render() {
      return (
          <tr>
            <td>
              {this.props.obj._id}
            </td>
            <td>
              {this.props.obj.age}
              {this.props.obj.titre}
            </td>
            <td>
              {this.props.obj.nom}
              {this.props.obj.description}
            </td>
            <td>
              {this.props.obj.type}
              {this.props.obj.createur}
            </td>
            <td>
              <Link to={"/edit/"+this.props.obj._id} className="btn btn-primary">Edit</Link>
            </td>
            <td>
              <button onClick={this.delete} className="btn btn-danger">Delete</button>
            </td>
          </tr>
      );
    }
}

export default TableRow;
