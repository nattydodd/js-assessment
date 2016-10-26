exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      var index = arr.indexOf(item);
      return index
    },


  sum: function(arr) {
    var sum = arr.reduce( function(total, num) {
      return total + num }, 0);
      return sum
  },

  remove: function(arr, item) {
    var count = {};
      for (var i = 0; i < arr.length; i++) {
        count[arr[i]] = count[arr[i]] + 1 || 1;
      }
    var times = count[item];
      for (var i = 0; i < times; i++) {
        var index = arr.indexOf(item);
        arr.splice(index, 1);
      }
    return arr
  },

  removeWithoutCopy: function(arr, item) {
    var count = {};
      for (var i = 0; i < arr.length; i++) {
        count[arr[i]] = count[arr[i]] + 1 || 1;
      }
    var times = count[item];
      for (var i = 0; i < times; i++) {
        var index = arr.indexOf(item);
        arr.splice(index, 1);
      }
    return arr
  },

  append: function(arr, item) {

  },

  truncate: function(arr) {

  },

  prepend: function(arr, item) {

  },

  curtail: function(arr) {

  },

  concat: function(arr1, arr2) {

  },

  insert: function(arr, item, index) {

  },

  count: function(arr, item) {

  },

  duplicates: function(arr) {

  },

  square: function(arr) {

  },

  findAllOccurrences: function(arr, target) {

  }
};
