const express = require('express');
const app = express();
const ProjectRouter = express.Router();

const Project = require('../models/Project');

ProjectRouter.route('/add').post(function (req, res) {
  const project = new Project(req.body);
  project.save()
    .then(project => {
        res.json('Server added successfully');
    })
    .catch(err => {
    res.status(400).send("unable to save to database");
    });
});

ProjectRouter.route('/').get(function (req, res) {
    Project.find(function (err, projects){
    if(err){
      console.log(err);
    }
    else {
      res.json(projects);
    }
  });
});

ProjectRouter.route('/edit/:id').get(function (req, res) {
  const id = req.params.id;
  Project.findById(id, function (err, project){
      res.json(project);
  });
});

ProjectRouter.route('/update/:id').post(function (req, res) {
    Project.findById(req.params.id, function(err, Edit) {
    if (!Edit)
      //return next(new Error('Could not load Document'));
      return (new Error('Could not load Document'));
    else {
      // do your updates here
      Edit.titre = req.body.titre ;
      Edit.description= req.body.description;
      Edit.createur = req.body.createur;

      Edit.save().then(Edit => {
          res.json('Update complete');
      })
      .catch(err => {
            res.status(400).send("unable to update the database");
      });
    }
  });
});

ProjectRouter.route('/delete/:id').get(function (req, res) {
    Project.findByIdAndRemove({_id: req.params.id},
       function(err, project){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});

module.exports = ProjectRouter;
