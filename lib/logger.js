var util = require('util');

function getTime(){
    var d = new Date();
    return util.format("%s-%s-%s %s:%s:%s.%s", d.getFullYear(), (d.getMonth() +1), d.getDay(), 
            d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
}

/**
 * 로깅함수를 커스터마이스 할 경우에 패딩을 넣어주는게 좋을 것 같아서 미리 만들었으나
 * 지금은 쓸데없는 연산을 할뿐이니 일단 나중을 위해 함수만 정의
 */
function maxLength(arr){
    var len = 5; 
    for(var i = 0; i<arr.length;i++){
        if(arr[i].length > len) len = arr[i].length; 
    }
    return len;
}

// 로그레벨이 나오는 텍스트에 뽕(padding)을 넣어서 로그가 균일 간격으로 찍히게 함
function addPadding(level, paddingSize){
    var spaces = [];
    for(var i = 0;i < paddingSize - level.length;i++){
        spaces.push(" ");
    }
    return level + spaces.join('');
}


/**
 * TODO 포매팅 기능
 * TODO 설정기능
 */
function Logger(){
    var LoggerProto = Logger.prototype;
    var logLevel = ['debug', 'info', 'warn', 'error', 'critical'];
    var paddingSize = 8;    //maxLength(logLevel);
    logLevel.forEach(function(level){
        LoggerProto[level] = function(message){
                var stack = (new Error()).stack.split('\n')[2];
                var line = stack.match(/\(.*?\)/g)[0];
                if(typeof message !== 'string')
                    message = util.inspect(message);
                console.log.apply(this, ["[ %s ] %s | %s: %s ", 
                    addPadding(level.toUpperCase(), paddingSize), getTime(), line, message]);
        }
    });
}

module.exports = Logger;
