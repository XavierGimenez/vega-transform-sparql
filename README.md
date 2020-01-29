# Vega Transform to query SPARQL endpoints

A Vega Data Transform to fetch data from an [SPARQL endpoint](https://en.wikipedia.org/wiki/SPARQL).

This package extends Vega's set of data transforms to support fetching data from an SPARQL endpoint and parsing the results, in Vega version 5.0 and higher. A demo can be found [here](https://github.com/XavierGimenez/vega-transform-sparql-demo).

## Usage Instructions

Install the transform with

```
npm install vega-transform-sparql
```
To use the transform, just add it to the existing set of Vega data transforms as follows:
```js
import * as vega from 'vega';
import SPARQL from 'vega-transform-sparql';

vega.transforms['sparql'] = SPARQL;
```

## Vega Specifications
When adding the transform in a Vega specification, the SPARQL transform expects two parameters:
- endpoint: the URL of the endpoint
- query: the SPARQL query
```js
{
    "type": "sparql",
    "endpoint": "https://query.wikidata.org/sparql",
    "query": `SELECT ?item ?itemLabel ?pic
                WHERE
                {
                    ?item wdt:P31 wd:Q146 .
                    ?item wdt:P18 ?pic
                    SERVICE wikibase:label { bd:serviceParam wikibase:language "[AUTO_LANGUAGE],en" }
                }`
}
```
