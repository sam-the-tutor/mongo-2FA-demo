const mongoose = require('mongoose');
const Schema = mongoose.Schema;

userSchema = new Schema( {
	
	unique_id: Number,
	username: String,
	password: String,
	secretKey: String,
	createdAt: {
		type: Date,
		default: Date.now
	}
})

const User = mongoose.model('User', userSchema);

module.exports = User;