# template-element

> Minimal module to create a template -> give it some data -> get a dom element

# Example

```javascript
var template = require('template-element');

var mediaTemp = template(`
  <div class="media">
    <img class="image" src={avatar} />
    <span class="text">{bio}</span>
  </div>
`);

var user = {
  avatar: 'http://lorempixel.com/40/40',
  bio: 'Hi, I am a beautiful smelly cat'
};

mediaTemp(user);

/**
 *  <div class="media">
 *    <img class="image" src="http://lorempixel.com/40/40" />
 *    <span class="text">Hi, I am a beautiful smelly cat</span>
 *  </div>
 */
```

# License 

MIT