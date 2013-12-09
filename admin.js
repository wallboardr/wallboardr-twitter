define([], function () {
  'use strict';
  var plugin = {};
  plugin.config = {
    name: 'twitter',
    humanName: 'Twitter feed',
    centered: true,
    pollInterval: 600
  };

  return plugin;
});