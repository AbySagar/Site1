'use strict';

module.exports = {
	db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://' + (process.env.DB_1_PORT_27017_TCP_ADDR || 'localhost') + '/mean',
	//assets: {
		//lib: {
			//css: [
				//'public/lib/bootstrap/dist/css/bootstrap.min.css',
				//'public/lib/bootstrap/dist/css/bootstrap-theme.min.css',
			//],
			//js: [
				//'public/lib/angular/angular.min.js',
				//'public/lib/angular-resource/angular-resource.js',
				//'public/lib/angular-cookies/angular-cookies.js',
				//'public/lib/angular-animate/angular-animate.js',
				//'public/lib/angular-touch/angular-touch.js',
				//'public/lib/angular-sanitize/angular-sanitize.js',
				//'public/lib/angular-ui-router/release/angular-ui-router.min.js',
				//'public/lib/angular-ui-utils/ui-utils.min.js',
				//'public/lib/angular-bootstrap/ui-bootstrap-tpls.min.js'
			//]
		//},
		//css: 'public/dist/application.min.css',
		//js: 'public/dist/application.min.js'
	//},
	facebook: {
		clientID: process.env.FACEBOOK_ID || '384871865047214',
		clientSecret: process.env.FACEBOOK_SECRET || 'fc1cedad1ac3759a043e4b9f4334ab4e',
		callbackURL: '/auth/facebook/callback'
	},
	twitter: {
		clientID: process.env.TWITTER_KEY || 'PP9wyVx9hmZgE7aLbYb4XfoYS',
		clientSecret: process.env.TWITTER_SECRET || 'TITb95VtTXztXXW2ps2AyRl1Cw7JHWmFqHEmVtOZLz4tPOZNRW',
		callbackURL: '/auth/twitter/callback'
	},
	google: {
		clientID: process.env.GOOGLE_ID || '284262120326-f7pcoo4bibl2jshlqriuabffun0oifas.apps.googleusercontent.com',
		clientSecret: process.env.GOOGLE_SECRET || 'Px5pJ-2QRQGco5vnrMh29Qos',
		callbackURL: '/auth/google/callback'
	},
	linkedin: {
		clientID: process.env.LINKEDIN_ID || '75p41s5uns7hf9',
		clientSecret: process.env.LINKEDIN_SECRET || 'JdArIdvlY7NrYHQZ',
		callbackURL: '/auth/linkedin/callback'
	},
	github: {
		clientID: process.env.GITHUB_ID || '1aff5821ec0b15af30af',
		clientSecret: process.env.GITHUB_SECRET || '6672e8f7d48087d039796e640e1fb2ec07722fb6',
		callbackURL: '/auth/github/callback'
	},
	mailer: {
		from: process.env.MAILER_FROM || 'js.1992@live.com',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
