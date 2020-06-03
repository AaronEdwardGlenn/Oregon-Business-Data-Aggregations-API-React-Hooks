# 13LabCT

NOTES 18-Dec-19

## movie.js

const mongoose 
const schema = new mongoose.Schema({
    budget: {
        type: string, 
        required: true
    },
    generas: {
        datasetId: {
            type: Number, 
            required: true
        }, 
        imbdId: {
            type: String, 
            required: True
        }, 
        language: {
            type: String, 
            requied: true
        },
        overview: String, 
        popularity: {
            type: number, 
            required; true
        },
        releaseDate: {
            type: Date, 
            required: true
        },
        revenue: {
            type: Number, 
            reuqied: true
        },
        runtime: {
            type: NUmber, 
            required: true
        },
        tagline: String
        }
    }
})

obvs... moduel.exports = mongoose.model('Movies', schema)

## utils/seed-data.js

const csv = rquie(csvtoJSON), 
const movie = require('./modles/Movie)

function seedData() {
    return csv()
    .fromFile(__dirname *** from where this file is, then we can start apending the path).. so (__dirname + '/../../csv/movies_me)
    .then(movies => {
      movies.map(movie => ({
          budget: movie.budget, 
          generas: movie.
      }))
    });
}

## seed-date.js -- we are making a helper function to adjust the raw genera data and pull out the correct genera name

const parseGerneas = rawGerners => {
    JSON.parse(rawGenres.replace(/'/g, '"'))
    .map(({ name })) => name); 
}

## seed-data.test.js

cosnt { parseGenres } = require('./seed-data)

describe('parse genres', () => {
    it('parses genres from csv', () => {
        const rawGenres = ........
        const genres = parseGenres(rawGenres); 

        expect(genres).toEqual(['Drama', 'Comedy']); 
    })
}

### seed-data.js

datasetId: movie.id
imbdId: movie.imbd_id
popularity: moive.popularity
releaseDate: movie.release_date
revenue: movie.revenue, 
tagline: movie.rev.................................


## seed.js

requie('donenv').config(); 
require('./lib/utils/connect')(); 

const mongoose = requie('mongoose'); 
const { seedDate } =  require('/lib/utils/seed-data)

seedData()
.then(() => console.log('duunnnzz')); 
.finally(()=> {
    mongoose.connection.close()): 
})



**** so some movies didn't have a runtime to we needed to take off the required field in the model. 

**** now in terminal, node see.js and we get our connection running!

### routes/movies.js
======================
in app.js make sure app.use is adjusted to require ./routes/movies and '/api/v1/movies....
==================

*** models are always single  and in REST they are plualized. 

## moives.js

const { Router } = require('express'); 
const Movie = require('./models/Movie); 

module.exports= Router(); 

## app.test.js 

add the model  fields in it('can create  new movie'); 
... add dummy variables for a newly created movie.  

in POSTMAN 

in POST 

in Body, raw, set to JSON on the far right, 


add a movie object but make sure all the quotes are doubble quotes.

.split('t')[0]; 


PAGING STUFF

/page#/perpage25

?page=1&perPage=25

limit tells mongoose to find all movies but limit it to the quantitiy stipulated in the page number field. 

skip tells us to skip a certian number of entries. ... bascially taht means that we are sorting something by changng the page number from the 0 index to the 1 index. 

ex... .skip((Number(page)-1 * Number(perPage))
