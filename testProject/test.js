var assert = chai.assert;

before(() => { console.log('Tests begins') })
after(() => { console.log('Tests end') })

describe('Cars functions tests', function() {

    let testStrings = [
        `polo.calculateWay(500,11)`,
        `polo.calculateWay(-500,-11)`,
        `polo.calculateWay('','')`,
        ];
    
    for (let item of testStrings) {

        let result = eval(item);

            it( item + ' return string', function() {
                // console.log(result)
                assert.isString(result, `Return non string`)
            } );

            it( item + ' return not empty string', function() {
                // console.log(result)
                assert.isNotEmpty(result, 'Returns empty string');
            } );

            it( item + ' return Not NaN,null,undefined values', function() {
                assert.notInclude(result, 'NaN', 'Return include NaN values');
                assert.notInclude(result, 'null', 'Return include null values');
                assert.notInclude(result, 'undefined', 'Return include undefined values')
            } );

            it( item + ' return positive values', function() {
                let resultValues = result.split(' ');
                // console.log(result, resultValues);
                for (let i of resultValues) {
                    if (i == +i) {
                        console.log(i)
                        assert.isAtLeast(+i, 0, `Return include (${+i}) negative value`);
                    }
                }
            } );

    } // end of for

})