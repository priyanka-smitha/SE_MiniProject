module.exports = function(grunt) {

  grunt.initConfig({

	bower_concat: {
	all:{
	dest: 'www/js/libs.js'
	}
	},




	uglify: {
    my_target: {
      files: {
        'www/js/libs.min.js': ['www/js/libs.js']
      }
    }
  },

	jshint: {
    all: ['Gruntfile.js','test.js','d3_test.js','d3_test2.js']
  },

	  less: 
	  {
	      development: 
	      {
	        options: 
	        {
	          compress: true,
	          yuicompress: true,
	          optimization: 2
	        },
	        

					files: {
				"www/css/bootstrap.css": "bower_components/bootstrap/less/bootstrap.less",
				"www/css/local.css": "www/less/local.less"
		    },
						  				 	  	


	      }
	  }

  });

  // This will automatically load any grunt plugin you install, such as grunt-contrib-less.
  require('load-grunt-tasks')(grunt);
//Added new
grunt.loadNpmTasks('grunt-bower-concat');
//grunt.loadNpmTasks('grunt-contrib-concat');
grunt.loadNpmTasks('grunt-contrib-uglify');
grunt.loadNpmTasks('grunt-contrib-jshint');
grunt.loadNpmTasks('grunt-contrib-less');


grunt.registerTask('package', ['bower_concat','uglify']);
grunt.registerTask('validate', ['jshint']);
grunt.registerTask('build_all', ['less','bower_concat', 'uglify', 'jshint']);

grunt.registerTask('default', ['bower_concat', 'uglify', 'jshint']);
};