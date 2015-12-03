/**
 * test main file
 * @author jero
 * @date 2015-09-12
 */


var path = require('path');
var fs = require('fs');
var fis = require('fis3');
var _ = fis.util;
var expect = require('chai').expect;
var _release = fis.require('command-release/lib/release.js');
var _deploy = fis.require('command-release/lib/deploy.js');
var root = path.join(__dirname, 'src');
var dev = path.join(__dirname, 'dev');

fis.project.setProjectRoot(root);
var _self = require('../index');

function release(opts, cb) {
    opts = opts || {};

    _release(opts, function(error, info) {
        _deploy(info, cb);
    });
}

describe('fis-parser-es6', function() {


    beforeEach(function() {
        

        _.del(dev);


        // fis.log.level = fis.log.L_ALL;

        fis.match('*', {
            deploy: fis.plugin('local-deliver', {
                to: dev
            })
        });

        fis.match('**.{js,ts}', {
            parser: _self,
            rExt: '.js'
        });

    });

    it('es6 release', function(done) {
        fis.on('release:end', function(ret) {

        });


        release({
            unique: true
        }, function() {
            expect(fs.existsSync(path.join(dev, 'index.js'))).to.be.true;
            done();
            fis.log.info('release complete');
        });
    });
});

