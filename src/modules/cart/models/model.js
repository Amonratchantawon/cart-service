'use strict';

var Model = "Cart";
exports.model = Model;

// use model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ModelSchema = new Schema({
    products: {
        type: [{
            id: {
                type: String
            },
            product: {
                id: {
                    type: String
                },
                name: {
                    type: String
                }
            },
            price: {
                type: Number
            },
            qty: {
                type: Number
            },
            amount: {
                type: Number
            }
        }]
    },
    netamount: {
        type: Number
    },

    created: {
        type: Date,
        default: Date.now
    },
    updated: {
        type: Date
    },
    createby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayName: {
            type: String
        }
    },
    updateby: {
        _id: {
            type: String
        },
        username: {
            type: String
        },
        displayName: {
            type: String
        }
    }
});

mongoose.model(Model, ModelSchema);