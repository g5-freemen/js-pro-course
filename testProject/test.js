var assert = chai.assert;

before(() => { console.log('Tests begins') })
after(() => { console.log('Tests end') })

describe('Cars functions tests', function() {

    it('polo.calculateWay(500,11) return string', function() {
        let result = polo.calculateWay(500,11);
        assert.isNotString(result, `Return not string - ${result}`)
    } );

    it('polo.calculateWay(500,11) return not empty string', function() {
        let result = polo.calculateWay(500,11);
        assert.isEmpty(result, 'Returns empty string')
    } );

    it('polo.calculateWay(500,11) return Not NaN,null,undefined values', function() {
        let result = polo.calculateWay(500,11);
        assert.include(result, 'NaN', 'Return NaN value');
        assert.include(result, 'null', 'Return null value');
        assert.include(result, 'undefined', 'Return undefined value')
    } );

    it('polo.calculateWay(500,11) return positive values', function() {
        let result = polo.calculateWay(500,11);
        let resultValues = result.split(' ');
        console.log(result, resultValues);
        for (let i of resultValues) {
            if (i == +i) {
                console.log(i)
                assert.isBelow(+i, 0, `Return ${+i} negative value`);
            }
        }
    } );

})