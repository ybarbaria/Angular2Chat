"use strict";
var Message = (function () {
    function Message(sender, channel, text) {
        this.Text = text;
        this.Sender = sender;
        this.Channel = channel;
    }
    return Message;
}());
exports.Message = Message;
//# sourceMappingURL=app.domain.message.js.map