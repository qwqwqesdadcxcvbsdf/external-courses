var obj = {};
function f(obj, string) {
    if (obj.hasOwnProperty(string) == true) {
        return obj;
    } else obj[string] = 'new';
    return obj;
    }