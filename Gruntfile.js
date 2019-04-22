module.exports = function(grunt) {
	grunt.initConfig({
		copy: {
			common: {
				files: [
					// includes files within path and its sub-directories
					{
						expand: true,
						cwd: './node_modules/simple-line-icons/',
						src: '**',
						dest: './dist/simple-line-icons/'
					}
				],
			},
			flatpickr: {
				files: [{
					expand: true,
					cwd: './node_modules/flatpickr/',
					src: '**',
					dest: './dist/flatpickr/'
				}]
			}
		},
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
		uglify: {
			stylejs: {
				src: [
					"./node_modules/jquery/dist/jquery.min.js",
					"./node_modules/bootstrap/dist/js/bootstrap.min.js",
					"./node_modules/bootstrap/dist/js/bootstrap.bundle.js",
				],
				dest: "dist/js/common.min.js"
			}
		},

		watch: {
			copy: {
				files: ["./node_modules/simple-line-icons/**"],
				tasks: [
					"copy"
				]
			},
			js: {
				files: ["node_modules/js/test/**/*.js"],
				tasks: [
					"uglify:stylejs",
				]
			},
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
	grunt.loadNpmTasks("grunt-contrib-uglify");
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks("grunt-contrib-watch");
	grunt.registerTask("default", ["sass", "cssmin", "uglify", "copy", "watch"]);
};