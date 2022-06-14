/**
 * Created by liekkas on 16/1/21.
 */
/* eslint no-eval:0 */

// Note: This regex matches even invalid JSON strings, but since we’re
// working on the output of `JSON.stringify` we know that only valid strings
// are present (unless the user supplied a weird `options.indent` but in
// that case we don’t care since the output would be invalid anyway).
const stringOrChar = /("(?:[^"]|\\.)*")|[:,]/g

function prettify(string) {
  return string.replace(stringOrChar, function (match, str) {
    if (str) {
      return match
    }
    return match + " "
  })
}

function get(options, name, defaultValue) {
  return (name in options ? options[name] : defaultValue);
}

export function stringify(obj, options = {}) {
  const indent = JSON.stringify([1], null, get(options, "indent", 2)).slice(2, -3)
  const maxLength = (indent === "" ? Infinity : get(options, "maxLength", 80))

  return (function _stringify(obj, currentIndent, reserved) {
    if (obj && typeof obj.toJSON === "function") {
      obj = obj.toJSON()
    }

    const string = JSON.stringify(obj, function (key, value) {
      if (value instanceof Function || typeof value === 'function') {
        return value.toString();
      }
      return value;
    });

    if (string === undefined) {
      return string
    }

    const length = maxLength - currentIndent.length - reserved

    if (string.length <= length) {
      const prettified = prettify(string)
      if (prettified.length <= length) {
        return prettified
      }
    }

    if (typeof obj === "object" && obj !== null) {
      const nextIndent = currentIndent + indent
      const items = []
      let delimiters
      const comma = function(array, index) {
        return (index === array.length - 1 ? 0 : 1);
      }

      if (Array.isArray(obj)) {
        for (let index = 0; index < obj.length; index++) {
          items.push(
            _stringify(obj[index], nextIndent, comma(obj, index)) || "null"
          )
        }
        delimiters = "[]"
      } else {
        Object.keys(obj).forEach(function(key, index, array) {
          const keyPart = JSON.stringify(key) + ": "
          const value = _stringify(obj[key], nextIndent,
            keyPart.length + comma(array, index))
          if (value !== undefined) {
            items.push(keyPart + value)
          }
        })
        delimiters = "{}"
      }

      if (items.length > 0) {
        return [
          delimiters[0],
          indent + items.join(",\n" + nextIndent),
          delimiters[1]
        ].join("\n" + currentIndent)
      }
    }

    return string
  }(obj, "", 0))
}

export function parse(str) {
  return JSON.parse(str, function (key, value) {
    let prefix;

    if (typeof value !== 'string') {
      return value;
    }

    prefix = value.substring(0, 8);

    if (prefix === 'function') {
      return eval('(' + value + ')');
    }

    return value;
  });
}
