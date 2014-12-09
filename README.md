animal-namer-api
================
#Description
Implementation of an API for the [animal-namer](https://github.com/notduncansmith/animal-namer) project. Thank you, [notduncansmith](https://github.com/notduncansmith). 

#Dependencies
* [animal-namer](https://github.com/notduncansmith/animal-namer)
* [body-parser](https://www.npmjs.org/package/body-parser)
* [express](https://www.npmjs.org/package/express)

#Methods
Visit the API at [Whimsical Wordimal](http://www.whimsicalwordimal.com/) or deploy to your own box. Simply append the below to the url to access the REST API or just spend time clicking the 'Generate Name' button. 

```
/api/name
```
GETs a random alliterative adjective animal name

```
/api/name/{letter}
```
GETs a random alliterative adject animal name beginning with the supplied letter parameter

```
/api/animal
```
GETs a random animal name

```
/api/animal/{letter}
```
GETs a random animal name beginning with the supplied letter parameter

```
/api/adj
```
GETs a random adjective

```
/api/adj/{letter}
```
GETs a random adjective beginning with the supplied letter parameter

#Contributors
* [Nicole Whitehead](https://github.com/ncwhitehead)
* [David Johnson](https://github.com/dhjohn0)
* [Duncan Smith](https://github.com/notduncansmith)
