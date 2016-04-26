
# is-vowel [![PayPal](https://img.shields.io/badge/%24-paypal-f39c12.svg)][paypal-donations] [![Version](https://img.shields.io/npm/v/is-vowel.svg)](https://www.npmjs.com/package/is-vowel) [![Downloads](https://img.shields.io/npm/dt/is-vowel.svg)](https://www.npmjs.com/package/is-vowel) [![Get help on Codementor](https://cdn.codementor.io/badges/get_help_github.svg)](https://www.codementor.io/johnnyb?utm_source=github&utm_medium=button&utm_term=johnnyb&utm_campaign=github)

> Checks if an input letter is a vowel or not.

## :cloud: Installation

```sh
$ npm i --save is-vowel
```


## :clipboard: Example



```js
// Dependencies
var IsVowel = require("is-vowel");

console.log(IsVowel("a"));
// => true

console.log(IsVowel("e"));
// => true

console.log(IsVowel("c"));
// => false
```

## :memo: Documentation


### `IsVowel(input)`
Checks if the input is a vowel.

#### Params
- **String** `input`: The input letter.

#### Return
- **Boolean** `true`, if the input is a vowel, `false` otherwise.



## :yum: How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## :dizzy: Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:


 - [`khaan`](https://github.com/zuzak/node-khaan) (by Douglas Gardner)—Word elongator
 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)—Generate project names from given keywords.
 - [`never-bored`](https://github.com/geekytime/never-bored#readme) (by GeekyTime)—Generate 100s of fun and easy activities for kids to do on their own.
 - [`unvowel-last`](https://github.com/IonicaBizau/unvowel-last#readme)—Removes the last letter from a string if it is a vowel.

## :scroll: License

[MIT][license] © [Ionică Bizău][website]

[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[license]: http://showalicense.com/?fullname=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica%40gmail.com%3E%20(http%3A%2F%2Fionicabizau.net)&year=2015#license-mit
[website]: http://ionicabizau.net
[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md
