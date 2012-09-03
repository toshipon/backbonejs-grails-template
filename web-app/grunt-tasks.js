module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    test: {
      files: ['test/**/*.js']
    },
    lint: {
      files: ['build/**/*.js', 'test/**/*.js']
    },
    watch: {
      files: ['<config:coffee.all.src>'],
      tasks: 'default'
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
        node: true,
        es5: true
      },
      globals: {}
    },
    coffee: {
    	all: {
    		src: ['src/coffee/**/*.coffee'],
    		dest: 'build/js'
    	}
    }
  });
	  
  grunt.loadNpmTasks('grunt-coffee');
  grunt.loadNpmTasks('grunt-requirejs');

  // Load local tasks.
  grunt.loadTasks('tasks');


	  
  // Default task.
  grunt.registerTask('default', 'coffee');

};
