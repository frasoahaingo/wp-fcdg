/*global module:false*/
module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Metadata.
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n',
        // Task configuration.
        compass: {
            options: {
                sassDir: 'scss',
                cssDir: 'css',
                force: true
            },
            dist: {
                environment: 'production',
                outputStyle: 'expanded'
            },
            dev: {
                environment: 'development',
                outputStyle: 'compressed'
            }
        },
        concat: {
            options: {
                jsDir: 'js',
                banner: '<%= banner %>',
                stripBanners: true
            },
            libs: {
                src: ['bower_components/jquery/dist/jquery.min.js', 'bower_components/owl.carousel/dist/owl.carousel.min.js', 'bower_components/jquery.pep/src/jquery.pep.js','bower_components/jquery-mousewheel/jquery.mousewheel.min.js'],
                dest: 'js/dist/libs.js'
            },
            user: {
                src: ['js/user/**/*.js'],
                dest: 'js/dist/<%= pkg.name %>.js'
            }
        },
        uglify: {
            options: {
                banner: '<%= banner %>'
            },
            user: {
                src: '<%= concat.user.dest %>',
                dest: '<%= concat.user.dest %>'
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
                unused: true,
                boss: true,
                eqnull: true,
                browser: true,
                globals: {
                    jQuery: true
                }
            },
            gruntfile: {
                src: 'Gruntfile.js'
            }
        },
        watch: {
            gruntfile: {
                files: '<%= jshint.gruntfile.src %>',
                tasks: ['jshint:gruntfile']
            },
            scss: {
                files: '<%= compass.options.sassDir %>/**/*',
                tasks: ['compass:dev']
            },
            js: {
                files: '<%= concat.user.src %>',
                tasks: ['concat']
            }
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');

    // Default task.
    grunt.registerTask('default', ['compass:dev', 'concat', 'watch']);
    grunt.registerTask('prod', ['compass:dist', 'concat', 'uglify', 'watch']);

};
