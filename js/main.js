var intro = alert('Let’s make a story together!');

var colour = prompt('A colour (orange, indigo, etc.)');

var creature = prompt('A creature (dragon, moth, etc.)');

var adjective = prompt('An adjective (beautiful, super, etc.)');

var verb = prompt('A past tense verb (ran, burped, etc.)');

var story = prompt('Which story would you like?\n[a] Snacking\n[b] Escaping\n[c] Winning\nEnter the letter below.');

var abcStory = ['a', 'b', 'c'];

switch (abcStory) {
  case 'a' :
    document.write('After snacking on ' + adjective + ' treats, the ' + colour + ' bellied ' + creature + ' ' + verb + ' for hours.');
    break;

  case 'b' :
    document.write('Ameilia ' + verb + ' through the ' + adjective + ' ' + colour + ' nebula escaping the space ' + creature + '.');
    break;

  case 'c' :
    document.write('Jackson chose his ' + adjective + ', ' + colour + ' ' + creature + ' card and ' + verb + ' it to the table knowing he won.');
    break;
}
