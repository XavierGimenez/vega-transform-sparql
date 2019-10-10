import DatatypeLabel from './DatatypeLabel';

export default class DatatypeLabelDate extends DatatypeLabel{

    parse(str) {
        return !str ? null : new Date(str);
    }

    unparse(val) {
        throw new Error('Not implemented');
    }
};
