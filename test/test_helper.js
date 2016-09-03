import jsdom from 'jsdom';
import chai from 'chai';
import Module from 'module';
import assert from 'assert';
import chaiImmutable from 'chai-immutable';
import resolve from 'resolve';

const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
const win = doc.defaultView;

global.document = doc;
global.window = win;

Object.keys(window).forEach((key) => {
  if (!(key in global)) {
    global[key] = window[key];
  }
});

chai.use(chaiImmutable);

/**
 * Monkey-patching native require, because Webpack supports requiring files, other
 * than JavaScript. But Node doesn't recognize them, so they should be ignored.
 * IMPORTANT: don't use arrow functions because they change the scope of 'this'!
 * https://gist.github.com/tomazzaman/1e2c71e1afb6a45c1001
 */
Module.prototype.require = function( path ) {
  const types = /\.(s?css|sass|less|svg|html|png|jpe?g|gif)$/;
  if ( path.search( types ) !== -1 ) return;

  // Mimics Webpack's "alias" feature
  if ( path === 'config' ) {
    path = resolve( './src/js/secrets/test.js' );
  }

  assert( typeof path === 'string', 'path must be a string' );
  assert( path, 'missing path' );

  return Module._load( path, this );
};
