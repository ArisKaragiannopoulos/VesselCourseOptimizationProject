var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

app.use(bodyParser.json());

Ports = require('./models/portSchema');
Centroids = require('./models/centroidSchema');
Polygons = require('./models/polygonSchema');
portDistances = require('./models/portDistanceSchema');
centroidDistances = require('./models/centroidDistanceSchema');
pointDistances = require('./models/pointDistanceSchema');
Distances10Nm = require('./models/distances10NmSchema');
Distances70Nm = require('./models/Distances70NmSchema');
Distances10NmSpd = require('./models/Distances10NmSpdSchema');
Distances70NmSpd = require('./models/Distances70NmSpdSchema');
PolygonCoordsDistances = require('./models/PolygonCoordsSchema');


//Connect to Mongoose
const uri = "mongodb+srv://ArisK:ak12081991ak@cluster0-pnfpp.mongodb.net/VesselCourseOptimization?retryWrites=true&w=majority";
mongoose.connect(uri,{ useUnifiedTopology: true });
var client = mongoose.connection;


app.all('/*', function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header('Access-Control-Allow-Methods', 'GET,POST,OPTIONS');
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	if (req.method == 'OPTIONS') {
		res.status(200).end();
	} else {
		next();
	}
});


app.get('/api/ports', function (req, res) {
    Ports.getPorts(function (err, ports) {
        if (err) {
            throw err;
        }
        res.json(ports);
    });
});



app.get('/api/ports/:port', function(req, res){
	Ports.getPortByName(req.params.port, function(err, port){
		if(err){
			throw err;
		}
		res.json(port);
	});
}); 

app.get('/api/centroids', function (req, res) {
    Centroids.getCentroids(function (err, centroids) {
        if (err) {
            throw err;
        }
        res.json(centroids);
    });
});

app.get('/api/centroids/:centroid', function(req, res){
	Centroids.getCentroid(req.params.centroid, function(err, centroid){
		if(err){
			throw err;
		}
		res.json(centroid);
	});
}); 

app.get('/api/polygons', function (req, res) {
    Polygons.getPolygons(function (err, polygons) {
        if (err) {
            throw err;
        }
        res.json(polygons);
    });
});

app.get('/api/polygons/:polygon', function(req, res){
	Polygons.getPolygon(req.params.polygon, function(err, polygon){
		if(err){
			throw err;
		}
		res.json(polygon);
	});
}); 



app.get('/api/portDistances', function (req, res) {
    portDistances.getPortDistances(function (err, portDistances) {
        if (err) {
            throw err;
        }
        res.json(portDistances);
    });
});

app.get('/api/centroidDistances', function (req, res) {
    centroidDistances.getCentroidDistances(function (err, centroidDistances) {
        if (err) {
            throw err;
        }
        res.json(centroidDistances);
    });
});

app.get('/api/pointDistances', function (req, res) {
    pointDistances.getPointDistances(function (err, pointDistances) {
        if (err) {
            throw err;
        }
        res.json(pointDistances);
    });
});

app.get('/api/Distances10Nm', function (req, res) {
    Distances10Nm.getDistances10Nm(function (err, Distances10Nm) {
        if (err) {
            throw err;
        }
        res.json(Distances10Nm);
    });
});

app.get('/api/Distances10NmSpd', function (req, res) {
    Distances10NmSpd.getDistances10NmSpd(function (err, Distances10NmSpd) {
        if (err) {
            throw err;
        }
        res.json(Distances10NmSpd);
    });
});

app.get('/api/Distances70Nm', function (req, res) {
    Distances70Nm.getDistances70Nm(function (err, Distances70Nm) {
        if (err) {
            throw err;
        }
        res.json(Distances70Nm);
    });
});

app.get('/api/Distances70NmSpd', function (req, res) {
    Distances70NmSpd.getDistances70NmSpd(function (err, Distances70NmSpd) {
        if (err) {
            throw err;
        }
        res.json(Distances70NmSpd);
    });
});

app.get('/api/PolygonCoords', function (req, res) {
    PolygonCoordsDistances.getPolygonCoords(function (err, PolygonCoordsDistances) {
        if (err) {
            throw err;
        }
        res.json(PolygonCoordsDistances);
    });
});


app.listen(3000);
console.log('Running on port 3000');