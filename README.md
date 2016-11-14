# SideVue

A VueJs powered Sidebar to drop into your projects with ease.

> It requireds a bundler like Webpack or Browserify

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
<sidevue close-gap="50px" open-gap="50%" direction="top">
<sidevue close-gap="-50px" open-gap="400rem" direction="bottom">
<sidevue close-gap="50px" open-gap="50%" direction="left">
<sidevue close-gap="50px" open-gap="50%" direction="right">
```

### Talk with your component

The `sideVueBus` lets you talk with your sidebars

```
import { sideVueBar } from 'sidevue';

sideVueBus.$on('sidevue-close' + sidevueId, function);
sideVueBus.$on('sidevue-open' + sidevueId, function);
sideVueBus.$on('sidevue-toggle' + sidevueId, function);
```

> If you have only one sidebar you can omit the id -> this works too

```
import { sideVueBar } from 'sidevue';

sideVueBus.$on('sidevue-toggle', function);
```
