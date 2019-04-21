module.exports = function (grunt) {
  grunt.initConfig({
    sass: {
      dist: {
        options: {},
        files: {
          "dist/css/purple.css": "./scss/purple-admin.scss"
        }
      }
    },
    cssmin: {
      target: {
        files: {
          "dist/css/purple.min.css": "dist/css/purple.css"
        }
      }
    },

    watch: {
      sass: {
        files: ["./scss/*.scss"],
        tasks: ["sass"],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true
        }
      },
      css: {
        files: "dist/css/purple.css",
        tasks: ["cssmin"],
        options: {
          // Start a live reload server on the default port 35729
          livereload: true
        }
      }
    }
  });

  grunt.loadNpmTasks("grunt-contrib-sass");
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  grunt.loadNpmTasks("grunt-contrib-concat");
  grunt.loadNpmTasks("grunt-contrib-watch");
  grunt.registerTask("default", ["sass", "cssmin", "watch"]);
};
