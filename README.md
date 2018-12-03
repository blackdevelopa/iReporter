[![Build Status](https://travis-ci.com/blackdevelopa/iReporter.svg?branch=develop)](https://travis-ci.com/blackdevelopa/iReporter) <a href="https://codeclimate.com/github/blackdevelopa/iReporter/maintainability"><img src="https://api.codeclimate.com/v1/badges/c6341af171d23107cbc1/maintainability" /></a> <a href="https://codeclimate.com/github/blackdevelopa/iReporter/test_coverage"><img src="https://api.codeclimate.com/v1/badges/c6341af171d23107cbc1/test_coverage" /></a>

# iReporter

### Introduction
iReporter seeks to provide a platform that allows users report corruption cases and interventions to designated authorities.

### iReporter Features
* Unregistered users can create an account
* Registered users can log into account
* Registered users can create red-flag (an incidence that's linked to corruption)/ intervention (a call to intervene)records
* Registered users can edit as well as delete either of their red-flag/ intervention records
* Registered users can add images/videos/geolocation to records
* Users can view red-flag/ intervention records of registered users
* Registered users can view all unresolved, resolved and rejected records
* An admin can change the status of any records
* An admin can view all records of all users

### Installation Guide
* Clone this repository [here](https://github.com/blackdevelopa/iReporter.git).
* Check to see you are in the develop branch, else run a `git checkout develop` in your terminal.
* Run `npm install` to install all dependencies

### Usage
* `npm run dev` to start the application.
* `npm run test` to run test.
* Connect to the API using Postman on port 3000.

### API Endpoints
| HTTP Verbs | Endpoints | Action |
| --- | --- | --- |
| GET | /api/v1/incidents | To get all incidents |
| GET | /api/v1/redflags | To get all redflags |
| GET | /api/v1/interventions | To get all interventions |
| GET | /api/v1/redflags/:id | To get specific redflags |


### Author
[Sylva Elendu](https://github.com/blackdevelopa)

### License
This project is available for use under the MIT License.