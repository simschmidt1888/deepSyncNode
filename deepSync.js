function _deepSync(){
  this.test = "asdf";
  
  this.logType = {
    INFO: 0,
    WARN: 1,
    ERR:  2
  };
  this.log = function(type, text){
    var pre = "" + new Date();
    
    console.log( pre + "  " + text + "");
  }
}


var deepSync = new _deepSync();
deepSync.log(0, "test");
