import DatatypeLabel from './DatatypeLabel';

export default class DatatypeLabelBoolean extends DatatypeLabel{

    parse(str) {
        return (str === 'true');
    }

    unparse(val) {
        return val.toString();
    }
};