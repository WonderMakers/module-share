### Install
    npm i git+https://git.hzberg.com/modules/share#1.0.0
    
### Setup
```nuxt.config.js```

    buildModules: [
      'share'
    ],
    
```nuxt.config.js```

    share: {
      ...options
    },
    
### Usage

    this.$share.open('vk', {
        url,
        title,
        description,
        image
    })
    
### Socials
    fb, vk, tw, tg, ok, reddit 
    
### Reset cache
    VK: https://vk.com/dev.php?method=pages.clearCache&&params[v]=5.92
    Fk: https://developers.facebook.com/tools/debug/og/object/
    Tg: @WebpageBot
