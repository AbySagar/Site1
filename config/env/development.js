'use strict';

module.exports = {
	db: 'mongodb://localhost/mean-dev',
	app: {
		title: 'Jacobs Homesite - Development Environment'
	},
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
		from: process.env.MAILER_FROM || 'MAILER_FROM',
		options: {
			service: process.env.MAILER_SERVICE_PROVIDER || 'MAILER_SERVICE_PROVIDER',
			auth: {
				user: process.env.MAILER_EMAIL_ID || 'MAILER_EMAIL_ID',
				pass: process.env.MAILER_PASSWORD || 'MAILER_PASSWORD'
			}
		}
	}
};
