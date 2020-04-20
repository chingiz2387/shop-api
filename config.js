const path = require('path');

const rootPath = __dirname;

let dbName;

if (process.env.NODE_ENV === "test") {
    dbName = "shop_test";
} else {
    dbName = "shop";
}

module.exports = {
    rootPath,
    uploadPath: path.join(rootPath, 'public/uploads'),
    db: {
        url: "mongodb://localhost/",
        name: dbName
    },
    getDBPath: function() {
        return this.db.url + this.db.name;
    },
    facebook: {
        appId: "1221301334742046",
        secretKey: "SECRET KEY"
    }
};
