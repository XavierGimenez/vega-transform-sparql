import defaultRdfDatatypes from './rdf/defaultRdfDatatypes';



/**
 * Parses a value based on its specified datatype
 * @param {String} str Unparsed value 
 * @param {*} typeUri a datatype definition
 */
function createTypedLiteralFromString (str, typeUri) {
    // use default RDF data types for now
    const dtype = defaultRdfDatatypes[typeUri];

    if(!dtype) {
        throw new Error('Internal error: No datatype object for: ' + typeUri + '(' + typeof(typeUri) + ')');
    }
    return dtype.parse(str);        
};



/**
 * Parses an RDF term to its appropiate value
 * @param {obj} nodeValue An RDF-term (https://www.w3.org/TR/sparql11-query/#defn_RDFTerm) 
 */
function parseNodeValue(nodeValue) {
    if (!nodeValue || typeof(nodeValue.type) === 'undefined')
        throw new Error('Invalid node: ' + JSON.stringify(nodeValue));

    const datatype = nodeValue.datatype;
        
    let result;
    switch (nodeValue.type) {
        case 'bnode':
            result = undefined;
            break;

        case 'uri':
            result = nodeValue.value;
            break;

        case 'literal':
            result = (!(datatype == null || datatype.length === 0 || datatype.trim() === ''))?
                createTypedLiteralFromString(nodeValue.value, datatype) : 
                nodeValue.value;
            break;

        case 'typed-literal':
            result = createTypedLiteralFromString(nodeValue.value, datatype);
            break;

        default:
            console.log('Unknown type: \'' + nodeValue.type + '\'');
            throw new Error('Bailing out');
    }

    return result;
} 



/**
 * Converts a binding object to a collection of {keys,values}
 * @param {Array} varNames all the projected vars existing in the query
 * @param {Binding} binding (https://www.w3.org/TR/sparql11-query/#docResultDesc)
 * @returns A collection 
 */
function binding2Obj(varNames, binding) {
    var o = {};
    varNames.forEach( varName => {
        o[varName] = null;
    });

    for (var key in binding) {
        var nodeValue = binding[key];
        o[key] = parseNodeValue(nodeValue);
    }
    return o;
};



/**
 * Converts all bindings from the result of an SPARQL query to a plain js collection
 * @param {JSON} json A Json SPARQL query response 
 */
export function bindingsToJsMap (json) {
    const varNames = json.head.vars,
          bindings = json.results.bindings;
    return bindings.map(binding => binding2Obj(varNames, binding));
};