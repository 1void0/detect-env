"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true,
});

exports.isServerComponent =
  exports.isServer =
  exports.isRSC =
  exports.isNode =
  exports.isBrowser =
    void 0;

const isBrowser = (exports.isBrowser = false);
const isNode = (exports.isNode = true);
const isServer = (exports.isServer = isNode);
const isServerComponent = (exports.isServerComponent = false);
const isRSC = (exports.isRSC = isServerComponent);
