# template-element

> Minimal module to create a template -> give it some data -> get a dom element

# Example

```javascript
var template = require('template-element');

var media = template(`
  <div class="media">
    <span class="image">{avatar}</span>
    <span class="text">{bio}</span>
  </div>
`);

var user = {
  avatar: '...',
  bio: '...'
};

element.appendChild(media(user));
```

# License 

MIT