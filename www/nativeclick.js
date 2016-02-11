var exec = require('cordova/exec');

var nativeclick = {
  trigger: function () {
     var errorCallback = function(error){
      console.error("Native Click Error:"+error);
    };
    exec(null, errorCallback, "NativeClick", "click", []);
  }
};

module.exports = nativeclick;
