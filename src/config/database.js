module.exports = {
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'root',
    database: 'empresarest3',
    define:{
        timestamps: true,
        underscored: false,
        timezone: "-03:00"
    },
};
// bd7578395d7a7e:df201cb3@us-cdbr-east-02.cleardb.com/heroku_89b16f0f06faa82?reconnect=true

// mysql://bd7578395d7a7e:df201cb3@us-cdbr-east-02.cleardb.com/heroku_89b16f0f06faa82?reconnect=true
// heroku config:set DATABASE_URL='mysql://bd7578395d7a7e:df201cb3@us-cdbr-east-02.cleardb.com/heroku_89b16f0f06faa82?reconnect=true'