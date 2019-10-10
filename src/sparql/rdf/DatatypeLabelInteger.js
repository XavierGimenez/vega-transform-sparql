import DatatypeLabel from './DatatypeLabel';

export default class DatatypeLabelInteger extends DatatypeLabel{

    parse(str) {
        return parseInt(str, 10);
    }

    unparse(val) {
        return val.toString();
    }
};