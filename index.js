'use strict';

var fs     = require('fs');
var path   = require('path');
var expect = require('chai').expect;

describe('convox start', function () {
    it(".dockerignore doesn't work", function () {
        var readFile = function () {
            var file   = path.join(__dirname, 'secrets', 'secret.txt');
            return fs.readFileSync(file, 'utf8');
        };
        expect(readFile).to.throw(/ENOENT/);
    });
});
