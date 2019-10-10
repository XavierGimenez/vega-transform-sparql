import { inherits, ingest, Transform } from "vega";
import { bindingsToJsMap } from './sparql/ResultSet';

/**
 * Creates a Vega Transform to query data from a SPARQL endpoint
 * @constructor 
 * @param {object} params The parameters for this operator 
 * @param {string} params.endpoint - URL of the SPARQL endpoint
 * @param {string} params.query - SPARQL query
 */
export default function SPARQL(params) {
    Transform.call(this, [], params);
}

SPARQL.Definition = {
    type: 'SPARQL',
    metadata: {
        generates: true,
        changes: false
    },
    params: [
        {
            name: 'endpoint',
            type: 'string',
            required: true
        },
        {
            name: 'query',
            type: 'string',
            required: true
        }
    ]
};

var prototype = inherits(SPARQL, Transform);

prototype.transform = async function(_, pulse) {
    // data from the SPARQL result
    let result = [];

    // Prepare the HTTP request via POST with URL-encoded parameters
    // https://www.w3.org/TR/sparql11-protocol/#query-via-post-urlencoded
    // The SPARQL protocol accepts also queries via GET or via POST directly

    const postQuery = async function(url = '', query) {
        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: { 
                // must set this content type when querying via POST
                'Content-Type': 'application/x-www-form-urlencoded',
                // get sure we get a JSON instead default XML
                'Accept': 'application/sparql-results+json'
            },
            body: 'query=' + query
        });

        // fetch won’t reject on HTTP error status even if the response
        // is an HTTP 404 or 500. Instead, it will resolve normally with
        // ok status set to false
        if(response.ok)
            return await response.json();
        else {
            // capture the error message
            const err = await response.json();            
            throw Error(
                (err.error + ': ' + err.message).replace(/(\r\n|\n|\r)/gm, "")
            );
        }
    };

    try {
        const queryResults = await postQuery(_.endpoint, _.query);
        result = bindingsToJsMap(queryResults);        
    } catch (error) {
        console.log(error);
    }

    result.forEach(ingest);

    const out = pulse.fork(pulse.NO_FIELDS & pulse.NO_SOURCE);
    out.rem = this.value;
    this.value = out.add = out.source = result;

    return out;
}