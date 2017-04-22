module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({
    jshint: {
      files: ['../javascripts/**/*.js'],
      options: {
        "esnext": true
      }
    },

    // Adding a watch task. When any file that matches the pattern(s)
    // in the `files` key changes, Grunt will automatically start the
    // jshint task
    watch: {
      javascripts: {
        files: ['../javascripts/**/*.js'],
        tasks: ['jshint']
      }
    }
  });


  grunt.registerTask('default', ['jshint', 'watch']);
};