<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# uncapitalize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Uncapitalize the first character of a string.



<section class="usage">

## Usage

```javascript
import uncapitalize from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@deno/mod.js';
```
The previous example will load the latest bundled code from the deno branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/string-uncapitalize/tags). For example,

```javascript
import uncapitalize from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@v0.3.1-deno/mod.js';
```

#### uncapitalize( str )

Uncapitalizes the first character of a string.

```javascript
var out = uncapitalize( 'Last man standing' );
// returns 'last man standing'

out = uncapitalize( 'Hidden Treasures' );
// returns 'hidden Treasures'
```

</section>

<!-- /.usage -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
import uncapitalize from 'https://cdn.jsdelivr.net/gh/stdlib-js/string-uncapitalize@deno/mod.js';

var out = uncapitalize( 'Last man standing' );
// returns 'last man standing'

out = uncapitalize( 'Presidential election' );
// returns 'presidential election'

out = uncapitalize( 'JavaScript' );
// returns 'javaScript'

out = uncapitalize( 'Hidden Treasures' );
// returns 'hidden Treasures'
```

</section>

<!-- /.examples -->



<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string-capitalize`][@stdlib/string/capitalize]</span><span class="delimiter">: </span><span class="description">capitalize the first character in a string.</span>
-   <span class="package-name">[`@stdlib/string-lowercase`][@stdlib/string/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2026. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-uncapitalize.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-uncapitalize

[test-image]: https://github.com/stdlib-js/string-uncapitalize/actions/workflows/test.yml/badge.svg?branch=v0.3.1
[test-url]: https://github.com/stdlib-js/string-uncapitalize/actions/workflows/test.yml?query=branch:v0.3.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-uncapitalize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-uncapitalize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-uncapitalize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-uncapitalize/main

-->

[chat-image]: https://img.shields.io/badge/zulip-join_chat-brightgreen.svg
[chat-url]: https://stdlib.zulipchat.com

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[cli-section]: https://github.com/stdlib-js/string-uncapitalize#cli
[cli-url]: https://github.com/stdlib-js/string-uncapitalize/tree/cli
[@stdlib/string-uncapitalize]: https://github.com/stdlib-js/string-uncapitalize/tree/main

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-uncapitalize/tree/deno
[deno-readme]: https://github.com/stdlib-js/string-uncapitalize/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/string-uncapitalize/tree/umd
[umd-readme]: https://github.com/stdlib-js/string-uncapitalize/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/string-uncapitalize/tree/esm
[esm-readme]: https://github.com/stdlib-js/string-uncapitalize/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/string-uncapitalize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-uncapitalize/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/capitalize]: https://github.com/stdlib-js/string-capitalize/tree/deno

[@stdlib/string/lowercase]: https://github.com/stdlib-js/string-lowercase/tree/deno

<!-- </related-links> -->

</section>

<!-- /.links -->
