module.exports = function(grunt){
	grunt.initConfig({
		pkg:grunt.file.readJSON('package.json'),
        connect: {
            server: {
                options: {
                    hostname:'192.168.1.3',
                    port: 8082,
                    keepalive:true
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            dist: {
                src: [
                    'assets/lib/angular.min.js',
                    'assets/lib/angular-route.min.js',
                    'assets/js/app.js',
                    'assets/js/controllers.js',
                    'assets/js/services.js'
                ],
                dest: 'dist/built.js'
            }
        },
        uglify: {
            options:{
                mangle: false,
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n' //js文件打上时间戳
            },
            bulid: {
                src: 'dist/built.js',
                dest: 'dist/built.min.js'
            }
        }



        //发布到FTP服务器 : 请注意密码安全，ftp的帐号密码保存在主目录 .ftppass 文件



	});

    grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    /*下方为配置的常用 grunt 命令*/
    grunt.registerTask('default', ['concat','uglify']);


    grunt.loadNpmTasks('grunt-contrib-connect');
};