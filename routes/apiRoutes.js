//Importing modules and files

const fs = require('fs');
const path = require ('path');
const uuvid1  = require('uuid/v1');
const router = express.router();
const express = require('express');

const db = require('../Develop/db/db.json');
// set up API routes and export the module

module.exports = function(app) {

    // API get request
    app.get('/api/notes', (req, res) => {
        // add id to each note when sending response
        res.json(db.map((note, i) => ({...note, id: i + ""})))

    })
    //API post request
    app.post('/api/notes', (req, res) => {
        //add new note to the notes data 
        db.push(req.body);
        (req.body).id = uuid/v1

        //Write the update note to db.json
        fs.readFileSync('../Develop/db/db.json', JSON.stringify(db), err => {
            if (err) throw err;
            console.log('Saved notes updated');
        })

        // Return new note to user
        res.json(req.body)
    });

    // API delete request
    app.delete('/api/notes/:id', (req, res) => {
        //remove note with given id
        db.splice(req.params.id, 1)
        // write the update de db.json
        fs.readFileSync('../Develop/db/db.json', JSON.stringify(db),err => {
            if (err) throw err;
            console.log('Note deleted and Saved notes updated');
        })

        // send response back without body
        res.status(200).end();

    });
}