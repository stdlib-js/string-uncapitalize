// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-string@esm/index.mjs";import r from"https://cdn.jsdelivr.net/gh/stdlib-js/string-format@esm/index.mjs";var s=t.isPrimitive,e=r;var i=function(t){if(!s(t))throw new TypeError(e("invalid argument. First argument must be a string. Value: `%s`.",t));return""===t?"":t.charAt(0).toLowerCase()+t.slice(1)};export{i as default};
//# sourceMappingURL=index.mjs.map
