var util = require('util');

function getTime(){
    var d = new Date();
    return util.format("%s-%s-%s %s:%s:%s.%s", d.getFullYear(), (d.getMonth() +1), d.getDay(), 
            d.getHours(), d.getMinutes(), d.getSeconds(), d.getMilliseconds());
}

// 로그레벨이 나오는 텍스트에 뽕(padding)을 넣어서 로그가 균일 간격으로 찍히게 함
// @deprecated
function addPadding(level, paddingSize){
    var spaces = [];
    for(var i = 0;i < paddingSize - level.length;i++){
        spaces.push(" ");
    }
    return level + spaces.join('');
}


/**
 * TODO 포매팅 기능[완료]
 * TODO 로그레벨 설정기능 : 설정에 높은 레벨을 넣으면 낮은 레벨의 로그는 안남음
 * TODO 파일로 로그남기기
 */
function Logger(){
    var LoggerProto = Logger.prototype;
    var logLevel = ['debug', 'info', 'warn', 'error', 'critical'];
    logLevel.forEach(function(level){
        LoggerProto[level] = function(format){
            var stack = (new Error()).stack.split('\n')[2];
            var path = stack.match(/\/.*\.js:\d+/g)[0];
            if(typeof format !== 'string'){
                var params = [];
                for (var i=0;i<arguments.length;i++)
                    params.push(util.inspect(arguments[i]));                         
                console.log.apply(this, ["%s '%s' %s", getTime(), level, path, params.join(" ")]);
                return;
            }
            var arr = [];
            arr.push("%s '%s' %s" + " " + arguments[0]);
            arr.push(getTime());
            arr.push(level);
            arr.push(path);
            for( var i=1;i<arguments.length;i++){
                arr.push(arguments[i]);
            }
            console.log.apply(this, arr);
            return;
        }
    });
}

module.exports = Logger;
