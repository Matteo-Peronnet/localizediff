function flattenMessage (nestedMessages, prefix) {
    if (prefix === void 0) { prefix = ''; }
    if (nestedMessages === null) {
        return {};
    }
    return Object.keys(nestedMessages).reduce(function (messages, key) {
        var _a;
        var value = nestedMessages[key];
        var prefixedKey = prefix ? prefix + "." + key : key;
        if (typeof value === 'string') {
            Object.assign(messages, (_a = {}, _a[prefixedKey] = value, _a));
        }
        else {
            Object.assign(messages, flattenMessages(value, prefixedKey));
        }
        return messages;
    }, {});
}


module.exports = flattenMessage;