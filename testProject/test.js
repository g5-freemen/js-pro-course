var assert = chai.assert;

before(() => { console.log('Tests begins') })
after(() => { console.log('Tests end') })

describe('Cars functions tests', function() {

    it('polo.calculateWay(500,11) return string', function() {
        let result = polo.calculateWay(500,11);
        assert.isString(result, `Return non string`)
    } );

    it('polo.calculateWay(500,11) return not empty string', function() {
        let result = polo.calculateWay(500,11);
        assert.isNotEmpty(result, 'Returns empty string')
    } );

    it('polo.calculateWay(500,11) return Not NaN,null,undefined values', function() {
        let result = polo.calculateWay(500,11);
        assert.notInclude(result, 'NaN', 'Return include NaN values');
        assert.notInclude(result, 'null', 'Return include null values');
        assert.notInclude(result, 'undefined', 'Return include undefined values')
    } );

    it('polo.calculateWay(500,11) return positive values', function() {
        let result = polo.calculateWay(500,11);
        let resultValues = result.split(' ');
        console.log(result, resultValues);
        for (let i of resultValues) {
            if (i == +i) {
                console.log(i)
                assert.isAtLeast(+i, 0, `Return ${+i} negative value`);
            }
        }
    } );

})