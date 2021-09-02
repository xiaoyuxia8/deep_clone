import { Message } from "element-ui";
export const messages = function(type, message, duration, showClose) {
    // 以下两个判断是 如果传了 时间 显示关闭按钮,那么以传递的为准 不传则按照默认的来
    // 默认不传持续时间, 为1秒
    if (!duration) {
        duration = 1000
    }
    // 默认为 没有关闭按钮
    if (!showClose) {
        showClose = false
    }
    Message({
        type: type,
        message: message,
        duration: duration,
        showClose: showClose
    });
};