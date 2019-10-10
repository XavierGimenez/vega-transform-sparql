import DatatypeLabel from './DatatypeLabel';

export default class DatatypeLabelFloat extends DatatypeLabel{

    parse(str) {
        return parseFloat(str);
    }

    unparse(val) {
        return val.toString();
    }
};
