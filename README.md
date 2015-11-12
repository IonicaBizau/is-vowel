# is-vowel [![Support this project][donate-now]][paypal-donations]

Checks if an input letter is a vowel or not.

## Installation

```sh
$ npm i is-vowel
```

## Example

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

## Documentation

### `IsVowel(input)`
Checks if the input is a vowel.

#### Params
- **String** `input`: The input letter.

#### Return
- **Boolean** `true`, if the input is a vowel, `false` otherwise.

## How to contribute
Have an idea? Found a bug? See [how to contribute][contributing].

## Where is this library used?
If you are using this library in one of your projects, add it in this list. :sparkles:

 - [`name-it`](https://github.com/IonicaBizau/name-it#readme)

 - [`unvowel-last`](https://github.com/IonicaBizau/unvowel-last#readme)

## License

[KINDLY][license] © [Ionică Bizău][website]

[license]: http://ionicabizau.github.io/kindly-license/?author=Ionic%C4%83%20Biz%C4%83u%20%3Cbizauionica@gmail.com%3E&year=2015

[website]: http://ionicabizau.net
[paypal-donations]: https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=RVXDDLKKLQRJW
[donate-now]: http://i.imgur.com/6cMbHOC.png

[contributing]: /CONTRIBUTING.md
[docs]: /DOCUMENTATION.md