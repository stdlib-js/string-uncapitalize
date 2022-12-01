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

# uncapitalize

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Uncapitalize the first character of a string.

<section class="installation">

## Installation

```bash
npm install @stdlib/string-uncapitalize
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm` branch][esm-url].
-   If you are using Deno, visit the [`deno` branch][deno-url].
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd` branch][umd-url].

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

</section>

<section class="usage">

## Usage

```javascript
var uncapitalize = require( '@stdlib/string-uncapitalize' );
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
var uncapitalize = require( '@stdlib/string-uncapitalize' );

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

* * *

<section class="cli">

## CLI

<section class="installation">

## Installation

To use the module as a general utility, install the module globally

```bash
npm install -g @stdlib/string-uncapitalize
```

</section>

<!-- CLI usage documentation. -->

<section class="usage">

### Usage

```text
Usage: uncapitalize [options] [<string>]

Options:

  -h,    --help                Print this message.
  -V,    --version             Print the package version.
         --split sep           Delimiter for stdin data. Default: '/\\r?\\n/'.
```

</section>

<!-- /.usage -->

<!-- CLI usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

### Notes

-   If the split separator is a [regular expression][mdn-regexp], ensure that the `split` option is either properly escaped or enclosed in quotes.

    ```bash
    # Not escaped...
    $ echo -n $'Beep\nBoop' | uncapitalize --split /\r?\n/

    # Escaped...
    $ echo -n $'Beep\nBoop' | uncapitalize --split /\\r?\\n/
    ```

-   The implementation ignores trailing delimiters.

</section>

<!-- /.notes -->

<section class="examples">

### Examples

```bash
$ uncapitalize Beep
beep
```

To use as a [standard stream][standard-streams],

```bash
$ echo -n 'Beep' | uncapitalize
beep
```

By default, when used as a [standard stream][standard-streams], the implementation assumes newline-delimited data. To specify an alternative delimiter, set the `split` option.

```bash
$ echo -n 'Beep\tBOOP' | uncapitalize --split '\t'
beep
bOOP
```

</section>

<!-- /.examples -->

</section>

<!-- /.cli -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/string/capitalize`][@stdlib/string/capitalize]</span><span class="delimiter">: </span><span class="description">capitalize the first character in a string.</span>
-   <span class="package-name">[`@stdlib/string/lowercase`][@stdlib/string/lowercase]</span><span class="delimiter">: </span><span class="description">convert a string to lowercase.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2022. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/string-uncapitalize.svg
[npm-url]: https://npmjs.org/package/@stdlib/string-uncapitalize

[test-image]: https://github.com/stdlib-js/string-uncapitalize/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/string-uncapitalize/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/string-uncapitalize/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/string-uncapitalize?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/string-uncapitalize.svg
[dependencies-url]: https://david-dm.org/stdlib-js/string-uncapitalize/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/string-uncapitalize/tree/deno
[umd-url]: https://github.com/stdlib-js/string-uncapitalize/tree/umd
[esm-url]: https://github.com/stdlib-js/string-uncapitalize/tree/esm
[branches-url]: https://github.com/stdlib-js/string-uncapitalize/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/string-uncapitalize/main/LICENSE

[standard-streams]: https://en.wikipedia.org/wiki/Standard_streams

[mdn-regexp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

<!-- <related-links> -->

[@stdlib/string/capitalize]: https://github.com/stdlib-js/string-capitalize

[@stdlib/string/lowercase]: https://github.com/stdlib-js/string-lowercase

<!-- </related-links> -->

</section>

<!-- /.links -->
