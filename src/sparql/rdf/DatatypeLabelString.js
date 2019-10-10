import DatatypeLabel from './DatatypeLabel';

export default class DatatypeLabelString extends DatatypeLabel{

    parse(str) {
        return str;
    }

    unparse(val) {
        return val.toString();
    }
};