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
                    paths: ["src/less"]
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
            },
            img: {
                files: ['public/img/**/*.png','public/img/**/*.jpg'],
                tasks: ['smushit']
            }
        },
        smushit: {
            mygroup: {
                src: ['public/img/**/*.png','public/img/**/*.jpg'],
                dest: 'public/img'
            }
        }
    });
    
    grunt.registerTask("default", ['uglify', 'less', 'smushit']);
    
    // The following line loads the grunt plugins.
    // This line needs to be at the end of this this file.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-smushit');
};