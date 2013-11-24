!function(exports) {
  'use strict';

  var idCounter = 0;

  function uniqueId(prefix) {
    var id = ++idCounter + '';
    return prefix ? prefix + id : id;
  }

  function Nested(options) {
    this.cid = uniqueId('nested');
    console.log(this.cid);
  }

}(this);
