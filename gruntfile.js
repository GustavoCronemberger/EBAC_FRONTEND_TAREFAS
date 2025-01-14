module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        less: {
            development: {
                files: {
                    'dev/styles/main.css': 'src/styles/main.less'
                }
            },
            production: {
                options: {
                    compress: true,
                },
                files: {
                    'dist/styles/main.min.css': 'src/styles/main.less'
                }
            }
        },
        watch: {
            less: {
                files: ['src/styles/**/*.less'],
                tasks: ['less:development']
            },
            html: {
                files: ['src/index.html'],
                tasks: ['replace:dev']
            }
        },
        replace: {
            dev: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.css' 
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: '../src/scripts/main.js' 
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['src/index.html'],
                        dest: 'dev/'
                    }
                ]
            },
            dist: {
                options: {
                    patterns: [
                        {
                            match: 'ENDERECO_DO_CSS',
                            replacement: './styles/main.min.css' 
                        },
                        {
                            match: 'ENDERECO_DO_JS',
                            replacement: './scripts/main.min.js' 
                        }
                    ]
                },
                files: [
                    {
                        expand: true,
                        flatten: true,
                        src: ['prebuild/index.html'],
                        dest: 'dist/'
                    }
                ]
            }
        },
        htmlmin:  {
            dist: {
                options: {
                    removeComments: true,
                    collapseWhitespace: true
                },
                files: {
                    'prebuild/index.html': 'src/index.html'
                }
            }
        },
        uglify: {
            target: {
                files: {
                    'dist/scripts/main.min.js':'src/scripts/main.js'
                }
            }
        },
        clean: {
            prebuild: ['prebuild']
        }    
    })        
    //     },
    //     sass: {
    //         dist: {
    //             options: {
    //                 style: 'compressed'
    //             },
    //             files: {
    //                 'main2.css': 'main.scss'
    //             }
    //         }
    //     },
    //     concurrent: {
    //         target: ['olaGrunt', 'less', 'sass']
    //     }
    // })

    // grunt.registerTask('olaGrunt', function() {
    //     const done = this.async();
    //     setTimeout(function() {
    //         console.log('Olá Grunt');
    //         done();
    //     }, 3000);
    // })

    // grunt.loadNpmTasks('grunt-contrib-sass');
    // grunt.loadNpmTasks('grunt-concurrent');

    //Plugins
    grunt.loadNpmTasks('grunt-contrib-less'); //compila de less para css
    grunt.loadNpmTasks('grunt-contrib-watch'); // assiste as alterações e automações
    grunt.loadNpmTasks('grunt-replace'); // mudar arquivos específicos
    grunt.loadNpmTasks('grunt-contrib-htmlmin'); // minifica o html
    grunt.loadNpmTasks('grunt-contrib-clean'); // exclui uma pasta específica
    grunt.loadNpmTasks('grunt-contrib-uglify'); // minifica o js

    grunt.registerTask('default', ['watch']); // comando npm run grunt executa esta taks contendo o valor
    grunt.registerTask('build', ['less:production', 'htmlmin:dist', 'replace:dist', 'uglify', 'clean:prebuild' ]);
}