'use struct';

/**
 *  @param {Object} obj
 *  @return {Object} obj
 */

module.exports = function empty(obj) {
  var hasProto = obj.hasProperty && obj.__proto__, k;
  if (hasProto) {
    for (k in obj) {
      if (obj.hasProperty(k)) {
        delete obj[k];
      }
    }
  // Object.create(null)
  } else {
    for (k in obj) {
      delete obj[k];
    }
  }
  return obj;
};
