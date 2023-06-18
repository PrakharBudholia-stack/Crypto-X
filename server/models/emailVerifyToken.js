var mongoose = require('mongoose');

const tokenSchema = new mongoose.Schema({
	userId: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	token: {
		type: String,
		required: true
	},
	createdAt: {
		type: Date,
		required: true,
		default: Date.now,
		expires: 86400 // 24 Hours
	}
});

module.exports = mongoose.model('emailTokens', tokenSchema);