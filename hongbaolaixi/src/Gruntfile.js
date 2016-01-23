module.exports = function(grunt) {
  // Project configuration
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        options: {
          style: 'compressed',
          noCache: true  
        },
        files: {
          '../build/css/style.css': 'scss/style.scss'          
        }
      }
    },
    htmlmin: {                                     // Task 
      dist: {                                      // Target 
        options: {                                 // Target options 
          removeComments: true,
          collapseWhitespace: true
        },
        files: {                                   // Dictionary of files 
          '../build/index.html': 'index.html',     // 'destination': 'source' 
        }
      }
    },
    watch: {
      css: {
        files: ['scss/*.scss'],
        tasks: ['sass']
      },
      html: {
        files: ['index.html'],
        tasks: ['htmlmin']
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-htmlmin');

  grunt.registerTask('default', ['sass', 'htmlmin']);
};
