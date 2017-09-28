define(function(require,exports,module){
    //require,exports,module为三个参数，可以是0，1，2，3个，
    //但可以省略后面的参数，不能省略前面的参数，或者都省略，
    //但有顺序问题！
    //切参数名是不允许修改的，必须是require,exports,module,在函数内也不可复制更改，相当与关键字一样，不能更改！
    // require作用：模块间依赖的接口。
    // exports作用：对外提供接口的对象。
    // module作用：一些有关模块的信息。（id模块的唯一标识,uri模块的绝对路径，dependencies当前模块的依赖，exports当前模块对外接口）
    // require('./module3');//var a=100;结果直接为a;
    var a = require('./module3');//为模块时，结果为对应模块的exports
    function shows(){
        alert('shows2');
    }
    function alerts(){
        alert('alerts2');
    }
    function alerta(){
        alert(a.ak.a);
    }
    exports.module1 = {
        alerts:alerts,
        shows:shows,
        alerta:alerta,
        ab:a.ak.aa
    };
});