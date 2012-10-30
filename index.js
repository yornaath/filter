

function filterArray( array, fn ) {
  var out, i, val
  out = [ ]
  for( i = 0; i < array.length; i++ ) {
    val = array[ i ]
    if( fn(val, i, array) )
      out.push( val )
  }
  return out
}

function filterObject( object, fn ) {
  var out, key, val
  out = [ ]
  for( key in object ) {
    val = object[ key ]
    if( fn(val, key, object) )
      out.push( val )
  }
  return out
}


module.exports.filter = function ( val, fn, context ) {
  return toString.call( val ) == "[object Array]" ? filterArray.apply( this, arguments ) :
         typeof val === "object" ?                  filterObject.apply( this, arguments ) :
                                                    [ ]
}