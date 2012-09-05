/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    meta: {
      banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */'
    },
    lint: {
      files: ['grunt.js', 'src/**/*.js', 'test/**/*.js']
    },
    qunit: {
      files: ['test/**/*.html']
    },
    concat: {
      dist: {
        src: ['<banner:meta.banner>', '<file_strip_banner:src/<%= pkg.name %>.js>'],
        dest: 'dist/<%= pkg.name %>.js'
      }
    },
    min: {
      dist: {
        src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
        dest: 'dist/<%= pkg.name %>.min.js'
      }
    },
    coffee: {
	  app: {
	    src   : ['src/coffee/**/*.coffee'],
	    dest  : 'src/js',
	    options: {
	    	preserve_dirs: true,
	        base_path: 'src/coffee'
	    }
	  },
	  test:{
	    src : ['test/spec_coffee/**/*.coffee'],
	    dest: 'test/spec/',
	    options: {
	        preserve_dirs: true,
	        base_path: 'test/spec_coffee'
	    }
	  }
	},
    stylus: {
      app: {
        src : ['src/stylus/*.styl'],
        dest: 'src/css/common.css'
      }
    },
	watch: {
      coffee: {
        files: ['<config:coffee.app.src>', '<config:coffee.test.src>'],
        tasks: 'coffee'
      },
      stylus: {
        files: ['<config:stylus.app.src>'],
        tasks: 'stylus'
      },
      lint: {
    	  files: ['<config:lint.files>'],
          tasks: 'lint'
      }
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {
        jQuery: true
      }
    },
    uglify: {},
    requirejs: {
        js : {
        	clearTarget: true,
        	dir: 'build',
            appDir: 'src',
            baseUrl: 'js',
            name: 'main',
            paths: {
                underscore: 'lib/underscore/underscore',
                jquery    : 'lib/jquery/jquery.min',
                backbone  : 'lib/backbone/backbone',
                require: 'lib/require/require',
                text: 'lib/require/text'
            },
            shim: {
	            underscore: {
	            exports: "_"
	          },
	            backbone: {
	            deps: ['underscore', 'jquery'],
	            exports: 'Backbone'
	          },
	            'backbone.localStorage': {
	            deps: ['backbone'],
	            exports: 'Backbone'
	          }
	        },
            pragmas: {
                doExclude: true
            },
            skipModuleInsertion: false,
            optimizeAllPluginResources: true,
            findNestedDependencies: true
        }
     }
  });
  
  grunt.loadNpmTasks('grunt-contrib');
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-requirejs');

  // Default task.
//  grunt.registerTask('default', 'lint qunit concat min');
  grunt.registerTask('default', 'watch');
  grunt.registerTask('release', 'coffee stylus requirejs:js');

};
