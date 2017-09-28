module.exports = function(grunt) {
    grunt.initConfig({
        pkg:grunt.file.readJSON('package.json'),
        concat:{
            webqq:{
                files:{
                    'dist/main.js':['module1.js','module2.js','module3.js']
                }
            }
        },
        uglify:{
            webqq:{
                files:{
                    'dist/uglifymin.js':['dist/main.js']
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask('default',['concat','uglify']);
}