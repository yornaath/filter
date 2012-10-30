
var expect = require( "expect.js" ),
    filter = require( "../index" ).filter


describe("filter", function() {

  var numbers = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ],
      obj = {
        '1': 1,
        '2': 2,
        '3': 10,
        '4': '4',
        '20': '21 '
      }

  describe("filter.filter", function() {

    it("should take an array and a filter function, running the filter function against each value on the array, returning a new array with all values the function returned truthy for", function() {

      function even( n ) {
        return n % 2 === 0
      }

      function odd( n ) {
        return n % 2 !== 0
      }

      expect( filter(numbers, even) ).to.eql([ 2, 4, 6, 8, 10 ])
      expect( filter(numbers, odd) ).to.eql([ 1, 3, 5, 7, 9, 11 ])

    })

    it("should take an object and a filter function, running the filter function against each value on the object, returning a new object with all values the function returned truthy for", function() {

      function eq( a, b ) {
        return a == b
      }

      expect( filter(obj, eq) ).to.eql([ 1, 2, 4 ])

    })

    it("should return an empty array if no value match", function() {

      function allwaysFalse() { return false }

      expect( filter(numbers, allwaysFalse) ).to.eql([ ])

    })

    it("should throw a TypeError if it is passed a collection but no filter function", function() {

      expect( function() { filter(numbers) } ).to.throwException(function (e) { 
        expect( e ).to.be.a( TypeError )
      });

    })

    it("should return an empty array even if collection parameter is of wrong type", function() {

      expect( filter(false) ).to.eql([ ])
      expect( filter() ).to.eql([ ])

    })  

  })

})
