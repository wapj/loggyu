var Logger = require('../lib/logger');
var log = new Logger();

console.log("==============================================");
log.debug('logger test');
log.info('info log');
log.warn('warning!');
log.error('somethine wrong!!!!');
log.critical('You should resolve this error!!!');

console.log("==============================================");
log.debug("디버그 로그를 남기세요");
log.info("정보를 찍는 로그입니다");
log.warn("Warning! 뭔가 이상해요!");
log.error("에러!! 뭔가 잘못됐어요!");
log.critical("오이런! 이건 당장 해결해야해요!");

console.log("==============================================");
log.debug("%s %d %j", "이건 글자", 12345, {"JSONObject": "이거슨  제이슨입니당"});
console.log("==============================================");
