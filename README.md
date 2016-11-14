# SideVue

A VueJs powered Sidebar to drop into your projects with ease.

> It requireds a bundler like Webpack or Browserify

> Sidevue now uses vue 2. If you need the sidebar for vue 1 use Sidevue version ^1.0.0

## Installation

```
npm install --save sidevue
```

## Usage

```
Vue.component('sidevue', require('sidevue'));
```

You can control your sidebars with the vue event system.
```
    'sidevue-open'
    'sidevue-close'
    'sidevue-toggle'
```
