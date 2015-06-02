module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'src/inject/js/inject.min.js': 'src/inject/js/inject.js'
                }
            }
        },
        less: {
            build: {
                files: {
                    'src/inject/css/inject.css': 'src/inject/less/inject.less'
                }
            }
        },
        cssmin: {
            options: {
                banner: '/*\n <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> \n*/\n'
            },
            build: {
                files: {
                    'src/inject/css/inject.min.css': 'src/inject/css/inject.css'
                }
            }
        },
        watch: {
            files: 'src/inject/less/*.less',
            tasks: ['less','cssmin']
        }
    });


    grunt.registerTask('default', ['uglify', 'cssmin', 'less']);

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
};
