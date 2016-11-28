# SideVue

A VueJs powered Sidebar to drop into your projects with ease.

> SideVue requires a bundler like Webpack or Browserify

> Sidevue now uses vue 2. If you need the sidebar for vue 1 use Sidevue version ^1.0.0

## Installation

```
npm install --save sidevue
```

## Usage

### Initialize SideVue

> You can have as many Sidebars as you want. We support from top, bottom, left, right moving sidebars.

```
import sidevue from 'sidevue';

Vue.component('sidevue', sidevue);
```

### Use the Component

E.g.:

```
<sidevue close-gap="50px" open-gap="50%" direction="top" sidevue-class="yourCustomClass">
    /* Sidebar Content */
</sidevue>

<sidevue close-gap="-50px" open-gap="400rem" direction="bottom" sidevue-class="yourCustomClass">
<sidevue close-gap="50px" open-gap="50%" direction="left" sidevue-class="yourCustomClass">
<sidevue close-gap="50px" open-gap="50%" direction="right" sidevue-class="yourCustomClass">
```

### Talk with your sidebar(s)

The `sideVueBus` lets you talk with your sidebars

```
import { sideVueBus } from 'sidevue';

sideVueBus.$emit('sidevue-close' + sidevueId, function);
sideVueBus.$emit('sidevue-open' + sidevueId, function);
sideVueBus.$emit('sidevue-toggle' + sidevueId, function);

sideVueBus.$on('sidevue-close' + sidevueId, function);
sideVueBus.$on('sidevue-open' + sidevueId, function);
sideVueBus.$on('sidevue-toggle' + sidevueId, function);
```

> If you have only one sidebar you can omit the id -> this works too

```
import { sideVueBus } from 'sidevue';

sideVueBus.$on('sidevue-toggle', function);
```
