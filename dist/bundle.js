(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vega')) :
  typeof define === 'function' && define.amd ? define(['vega'], factory) :
  (global = global || self, (global.vega = global.vega || {}, global.vega.SPARQL = factory(global.vega)));
}(this, function (vega) { 'use strict';

  function _typeof(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
    try {
      var info = gen[key](arg);
      var value = info.value;
    } catch (error) {
      reject(error);
      return;
    }

    if (info.done) {
      resolve(value);
    } else {
      Promise.resolve(value).then(_next, _throw);
    }
  }

  function _asyncToGenerator(fn) {
    return function () {
      var self = this,
          args = arguments;
      return new Promise(function (resolve, reject) {
        var gen = fn.apply(self, args);

        function _next(value) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
        }

        function _throw(err) {
          asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
        }

        _next(undefined);
      });
    };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (typeof call === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  var p = 'http://www.w3.org/2001/XMLSchema#';
  var xsd = {
    xboolean: p + 'boolean',
    xint: p + 'int',
    xinteger: p + 'integer',
    xlong: p + 'long',
    decimal: p + 'decimal',
    xfloat: p + 'float',
    xdouble: p + 'double',
    xstring: p + 'string',
    date: p + 'date',
    dateTime: p + 'dateTime'
  };

  var DatatypeLabel =
  /*#__PURE__*/
  function () {
    function DatatypeLabel() {
      _classCallCheck(this, DatatypeLabel);
    }

    _createClass(DatatypeLabel, [{
      key: "parse",
      value: function parse() {
        throw new Error('Not implemented');
      }
    }, {
      key: "unparse",
      value: function unparse() {
        throw new Error('Not implemented');
      }
    }]);

    return DatatypeLabel;
  }();

  var DatatypeLabelInteger =
  /*#__PURE__*/
  function (_DatatypeLabel) {
    _inherits(DatatypeLabelInteger, _DatatypeLabel);

    function DatatypeLabelInteger() {
      _classCallCheck(this, DatatypeLabelInteger);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatatypeLabelInteger).apply(this, arguments));
    }

    _createClass(DatatypeLabelInteger, [{
      key: "parse",
      value: function parse(str) {
        return parseInt(str, 10);
      }
    }, {
      key: "unparse",
      value: function unparse(val) {
        return val.toString();
      }
    }]);

    return DatatypeLabelInteger;
  }(DatatypeLabel);

  var DatatypeLabelString =
  /*#__PURE__*/
  function (_DatatypeLabel) {
    _inherits(DatatypeLabelString, _DatatypeLabel);

    function DatatypeLabelString() {
      _classCallCheck(this, DatatypeLabelString);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatatypeLabelString).apply(this, arguments));
    }

    _createClass(DatatypeLabelString, [{
      key: "parse",
      value: function parse(str) {
        return str;
      }
    }, {
      key: "unparse",
      value: function unparse(val) {
        return val.toString();
      }
    }]);

    return DatatypeLabelString;
  }(DatatypeLabel);

  var DatatypeLabelFloat =
  /*#__PURE__*/
  function (_DatatypeLabel) {
    _inherits(DatatypeLabelFloat, _DatatypeLabel);

    function DatatypeLabelFloat() {
      _classCallCheck(this, DatatypeLabelFloat);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatatypeLabelFloat).apply(this, arguments));
    }

    _createClass(DatatypeLabelFloat, [{
      key: "parse",
      value: function parse(str) {
        return parseFloat(str);
      }
    }, {
      key: "unparse",
      value: function unparse(val) {
        return val.toString();
      }
    }]);

    return DatatypeLabelFloat;
  }(DatatypeLabel);

  var DatatypeLabelDate =
  /*#__PURE__*/
  function (_DatatypeLabel) {
    _inherits(DatatypeLabelDate, _DatatypeLabel);

    function DatatypeLabelDate() {
      _classCallCheck(this, DatatypeLabelDate);

      return _possibleConstructorReturn(this, _getPrototypeOf(DatatypeLabelDate).apply(this, arguments));
    }

    _createClass(DatatypeLabelDate, [{
      key: "parse",
      value: function parse(str) {
        return !str ? null : new Date(str);
      }
    }, {
      key: "unparse",
      value: function unparse(val) {
        throw new Error('Not implemented');
      }
    }]);

    return DatatypeLabelDate;
  }(DatatypeLabel);

  var defaultRdfDatatypes = {};
  defaultRdfDatatypes[xsd.xint] = new DatatypeLabelInteger();
  defaultRdfDatatypes[xsd.xinteger] = new DatatypeLabelInteger();
  defaultRdfDatatypes[xsd.xfloat] = new DatatypeLabelFloat();
  defaultRdfDatatypes[xsd.xdouble] = new DatatypeLabelFloat();
  defaultRdfDatatypes[xsd.xstring] = new DatatypeLabelString();
  defaultRdfDatatypes[xsd.date] = new DatatypeLabelDate();
  defaultRdfDatatypes[xsd.dateTime] = new DatatypeLabelDate();
  defaultRdfDatatypes[xsd.decimal] = new DatatypeLabelFloat();

  /**
   * Parses a value based on its specified datatype
   * @param {String} str Unparsed value 
   * @param {*} typeUri a datatype definition
   */

  function createTypedLiteralFromString(str, typeUri) {
    // use default RDF data types for now
    var dtype = defaultRdfDatatypes[typeUri];

    if (!dtype) {
      throw new Error('Internal error: No datatype object for: ' + typeUri + '(' + _typeof(typeUri) + ')');
    }

    return dtype.parse(str);
  }
  /**
   * Parses an RDF term to its appropiate value
   * @param {obj} nodeValue An RDF-term (https://www.w3.org/TR/sparql11-query/#defn_RDFTerm) 
   */

  function parseNodeValue(nodeValue) {
    if (!nodeValue || typeof nodeValue.type === 'undefined') throw new Error('Invalid node: ' + JSON.stringify(nodeValue));
    var datatype = nodeValue.datatype;
    var result;

    switch (nodeValue.type) {
      case 'bnode':
        result = undefined;
        break;

      case 'uri':
        result = nodeValue.value;
        break;

      case 'literal':
        result = !(datatype == null || datatype.length === 0 || datatype.trim() === '') ? createTypedLiteralFromString(nodeValue.value, datatype) : nodeValue.value;
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
   * @param {Binding} binding (https://www.w3.org/TR/sparql11-query/#docResultDesc)
   * @returns A collection 
   */


  function binding2Obj(binding) {
    var o = {};

    for (var key in binding) {
      var nodeValue = binding[key];
      o[key] = parseNodeValue(nodeValue);
    }

    return o;
  }
  /**
   * Converts all bindings from the result of an SPARQL query to a plain js collection
   * @param {JSON} json A Json SPARQL query response 
   */

  function bindingsToJsMap(json) {
    var varNames = json.head.vars,
        bindings = json.results.bindings;
    return bindings.map(function (binding) {
      return binding2Obj(binding);
    });
  }

  /**
   * Creates a Vega Transform to query data from a SPARQL endpoint
   * @constructor 
   * @param {object} params The parameters for this operator 
   * @param {string} params.endpoint - URL of the SPARQL endpoint
   * @param {string} params.query - SPARQL query
   */

  function SPARQL(params) {
    vega.Transform.call(this, [], params);
  }
  SPARQL.Definition = {
    type: 'SPARQL',
    metadata: {
      generates: true,
      changes: false
    },
    params: [{
      name: 'endpoint',
      type: 'string',
      required: true
    }, {
      name: 'query',
      type: 'string',
      required: true
    }]
  };
  var prototype = vega.inherits(SPARQL, vega.Transform);

  prototype.transform =
  /*#__PURE__*/
  function () {
    var _ref = _asyncToGenerator(
    /*#__PURE__*/
    regeneratorRuntime.mark(function _callee2(_, pulse) {
      var result, postQuery, queryResults, out;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              // data from the SPARQL result
              result = []; // Prepare the HTTP request via POST with URL-encoded parameters
              // https://www.w3.org/TR/sparql11-protocol/#query-via-post-urlencoded
              // The SPARQL protocol accepts also queries via GET or via POST directly

              postQuery =
              /*#__PURE__*/
              function () {
                var _ref2 = _asyncToGenerator(
                /*#__PURE__*/
                regeneratorRuntime.mark(function _callee() {
                  var url,
                      query,
                      response,
                      err,
                      _args = arguments;
                  return regeneratorRuntime.wrap(function _callee$(_context) {
                    while (1) {
                      switch (_context.prev = _context.next) {
                        case 0:
                          url = _args.length > 0 && _args[0] !== undefined ? _args[0] : '';
                          query = _args.length > 1 ? _args[1] : undefined;
                          _context.next = 4;
                          return fetch(url, {
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

                        case 4:
                          response = _context.sent;

                          if (!response.ok) {
                            _context.next = 11;
                            break;
                          }

                          _context.next = 8;
                          return response.json();

                        case 8:
                          return _context.abrupt("return", _context.sent);

                        case 11:
                          _context.next = 13;
                          return response.json();

                        case 13:
                          err = _context.sent;
                          throw Error((err.error + ': ' + err.message).replace(/(\r\n|\n|\r)/gm, ""));

                        case 15:
                        case "end":
                          return _context.stop();
                      }
                    }
                  }, _callee);
                }));

                return function postQuery() {
                  return _ref2.apply(this, arguments);
                };
              }();

              _context2.prev = 2;
              _context2.next = 5;
              return postQuery(_.endpoint, _.query);

            case 5:
              queryResults = _context2.sent;
              result = bindingsToJsMap(queryResults);
              _context2.next = 12;
              break;

            case 9:
              _context2.prev = 9;
              _context2.t0 = _context2["catch"](2);
              console.log(_context2.t0);

            case 12:
              result.forEach(vega.ingest);
              out = pulse.fork(pulse.NO_FIELDS & pulse.NO_SOURCE);
              out.rem = this.value;
              this.value = out.add = out.source = result;
              return _context2.abrupt("return", out);

            case 17:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this, [[2, 9]]);
    }));

    return function (_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  return SPARQL;

}));
