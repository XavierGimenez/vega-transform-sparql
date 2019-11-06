import xsd from '../vocab/xsd';
import DatatypeLabelInteger from './DatatypeLabelInteger'
import DatatypeLabelString from './DatatypeLabelString';
import DatatypeLabelFloat from './DatatypeLabelFloat';
import DatatypeLabelDate from './DatatypeLabelDate';
import DatatypeLabelBoolean from './DatatypeLabelBoolean';

let defaultRdfDatatypes = {};
defaultRdfDatatypes[xsd.xint] = new DatatypeLabelInteger();
defaultRdfDatatypes[xsd.xinteger] =  new DatatypeLabelInteger();
defaultRdfDatatypes[xsd.xfloat] = new DatatypeLabelFloat();
defaultRdfDatatypes[xsd.xdouble] = new DatatypeLabelFloat();
defaultRdfDatatypes[xsd.xstring] = new DatatypeLabelString();
defaultRdfDatatypes[xsd.date] = new DatatypeLabelDate();
defaultRdfDatatypes[xsd.dateTime] = new DatatypeLabelDate();
defaultRdfDatatypes[xsd.decimal] = new DatatypeLabelFloat();
defaultRdfDatatypes[xsd.boolean] = new DatatypeLabelBoolean();

export default defaultRdfDatatypes;