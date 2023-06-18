const mongoose = require("mongoose");

const sellCoinSchema = new mongoose.Schema(
	{
		wallet: {
			type: mongoose.Schema.Types.ObjectId,
			ref: "Wallet",
		},
		coinid: {
			type: String,
			required: true,
		},
		amount: {
			type: String,
			required: true,
		},
		price: {
			type: String,
			required: true,
		},
		quantity: {
			type: String,
			required: true,
		},
		status: {
			type: String,
			required: true,
			enum: ["SUCCESS", "PENDING", "FAILED"],
		},
		statusMessage: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model("sellCoin", sellCoinSchema);