/// <binding />
// This file in the main entry point for defining grunt tasks and using grunt plugins.
// Click here to learn more. http://go.microsoft.com/fwlink/?LinkID=513275&clcid=0x409

module.exports = function (grunt) {
    grunt.initConfig({
        uglify: {
            my_target: {
                options: {
                    sourceMap: true
                },
                files: { 'public/site.js': ['src/js/**/*.js'] }
            }
        },
        less: {
            development: {
                options: {
                    paths: ["src/less"],
                    compress: true
                },
                files: {
                    "public/style.css": "src/less/style.less"
                }
            }
        },
        watch: {
            scripts: {
                files: ['src/js/**/*.js'],
                tasks: ['uglify']
            },
            css: {
                files: ['src/less/**/*.less'],
                tasks: ['less']
            }
        },
        imagemin: {                          // Task
            dynamic: {                         // Another target
                files: [{
                    expand: true,                  // Enable dynamic expansion
                    cwd: 'public/img/',                   // Src matches are relative to this path
                    src: ['**/*.{png,jpg,gif}'],   // Actual patterns to match
                    dest: 'public/img/'                  // Destination path prefix
                }]
            }
        },
        image_resize: {
            resize: {
                options: {
                    width: 220,
                    height: 400
                },
                src: 'public/img/*.{png,jpg,gif}',
                dest: 'public/img/thumbs/'
            }
        }
    });
    
    grunt.registerTask("default", ['uglify', 'less', 'imagemin']);
    
    // The following line loads the grunt plugins.
    // This line needs to be at the end of this this file.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-image-resize');
};