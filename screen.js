define(['jquery', 'require', './admin', './lib/twitterFetcher_v10_min'], function ($, require) {
  'use strict';
  var plugin = require('./admin'),
      fetcher = require('./lib/twitterFetcher_v10_min'),
      formatTweets = function (data) {
        return {tweets: data};
      },
      twitterScreen = function () {
        var self = this;
        return {
          getViewData: function () {
            var defer = $.Deferred();
            fetcher.fetch(self.props.data.widgetId, 'tweet-deck', self.props.data.number, false, true, true, 'default', false, function (data) {
              defer.resolve(formatTweets(data));
            }, false);
            return defer.promise();
          },
          preShow: function () {
            self.maximizeTextSize();
          }
        };
      };

  twitterScreen.config = plugin.config;
  return twitterScreen;
});