var config = module.exports;
var PRODUCTION = process.env.NODE_ENV === "production";

config.express = {
	port: process.env.PORT || "3000",
	host: "localhost",
};

config.key = {
	privateKey: "anythingCanBeUsedHere",
	tokenExpiry: "1h", // 1 hour
};

config.mongodb = {
	host: "mongodb://localhost:27017/cdac-election",
};
