const { TIMEOUT } = require('dns');
require('dotenv').config();
// Put your Client ID here------------------------>\/\/\/
const client = require('discord-rich-presence')(process.env.CLIENT_ID);
 

client.updatePresence({
  // This shows up under the name of the rich presence program.
  details: 'Building An Empire',
  // This shows up under the details.
  state: 'GodLike',
  // This starts counting the time elapsed since this program was run.
  startTimestamp: Date.now(),
  // This shows up on the left of the rich presence tab.
  largeImageKey: 'b1nzyboi',
  // Large image key goes above
  // This shows up when you hover over the large image.
  largeImageText: 'Hi! :)',
  // This shows up in the bottom right of the big image.
  smallImageKey: 'jblogo',
  // Small image key goes above
  // This shows up when you hover over the small image.
  smallImageText: 'Isn\'t this cool?!',
  // These buttons show up at the bottom of the rich presence, there's a maximum of two. 
  // Change the "label" to change the text they display and change the "url" to change the redirect when they're clicked.
  buttons: [{label: "Click Here", url: "https://twitch.tv/JoocyLad"}, {label: "Or Maybe Here", url: "https://dis.gd/threads"}],
  instance: true,
});