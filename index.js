class Formatter {
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z\d 0-9-']+/g,'');
  }

  static titleize(string) {
    let ar = string.split(' ');
    let firstWord = ar.shift();
    let firstWordCap = firstWord.charAt(0).toUpperCase() + firstWord.slice(1)
    let shortPhrase = ar.map((word) => {
      if (['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'].indexOf(word) === -1) {
        return word[0].toUpperCase() + word.substring(1);
      } else {
        return word
      }
    }).join(" ");
    let phrase = `${firstWordCap + " " + shortPhrase}`;
    return phrase
  }
}