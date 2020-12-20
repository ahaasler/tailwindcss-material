# tailwindcss-material

Material plugin for tailwindcss 2.0.0 and up.

## Install plugin

Install the plugin as devDependency (or normal dependency if needed):

```bash
# Using npm
npm install --save-dev tailwindcss-material

# Using yarn
yarn add --dev tailwindcss-material
```

If you want to use the complete plugin:

```javascript
// tailwind.config.js
module.exports = {
  plugins: [
    require("tailwindcss-material")
  ]
}
```

## Colors

> Obtained from [Material.io](https://material.io/design/color/the-color-system.html#tools-for-picking-colors).

### Curate colors

If you don't want the complete material color palette available to you import `"tailwindcss-material/colors"` and choose the ones you prefer:

```javascript
// tailwind.config.js
const colors = require("tailwindcss-material/colors")

module.exports = {
  theme: {
    colors: {
      // Specify your palette
      gray: colors.blueGray,
      red: colors.red,
      blue: colors.lightBlue,
      yellow: colors.amber
    }
  }
}
```

### Replace tailwind default color

If you'd like to use a material color without losing the remaining default tailwind colors you can replace a specific tailwind color with a material one:

```javascript
// tailwind.config.js
const colors = require("tailwindcss-material/colors")

module.exports = {
  theme: {
    extend: {
      colors: {
        // Replace gray color
        gray: colors.gray
      }
    }
  }
}
```

To add a color without replacing any tailwind color, prefix it with `"material"` or use an unused color name:

```javascript
// tailwind.config.js
const colors = require("tailwindcss-material/colors")

module.exports = {
  theme: {
    extend: {
      colors: {
        // Add material gray color
        materialGray: colors.gray
      }
    }
  }
}
```

You may also replace a specific shade without affecting the rest of the palette:

```javascript
// tailwind.config.js
const colors = require("tailwindcss-material/colors")

module.exports = {
  theme: {
    extend: {
      colors: {
        // Replace gray-500 color shade
        blue: {
          500: colors.blue.500
        }
      }
    }
  }
}
```
