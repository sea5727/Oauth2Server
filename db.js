var JDBC = require('jdbc');
var jinst = require('jdbc/lib/jinst');


if (!jinst.isJvmCreated()) {
    jinst.addOption("-Xrs");
    //jinst.setupClasspath(['./drivers/tibero6-jdbc-14.jar']);
    jinst.setupClasspath(['./drivers/ojdbc14.jar']);
    //jinst.setupClasspath(['./drivers/tibero6-jdbc-14.jar', './drivers/mysql-connector-java-8.0.16.jar', './drivers/hsqldb.jar', './drivers/derbyclient.jar']);
}

// var DB_VOC = new JDBC({
//     url: 'jdbc:tibero:thin:@192.168.0.194:8629:TST_DB',
//     user: 'voc',
//     password: 'voc1234',
//     minpoolsize: 5,
//     maxpoolsize: 10
// });

// exports.DB_VOC = DB_VOC;

// var DB_INS = new JDBC({
//     url: 'jdbc:tibero:thin:@192.168.0.194:8629:TST_DB',
//     user: 'ins',
//     password: 'ins1234',
//     minpoolsize: 5,
//     maxpoolsize: 10
// });
// exports.DB_INS = DB_INS;

var DB_JAPI = new JDBC({
    url: 'jdbc:oracle:thin:@192.168.0.208:1521:ORCLEMS',
    drivername : 'oracle.jdbc.driver.OracleDriver',
    user: 'japi',
    password: 'japi1234',
    minpoolsize: 5,
    maxpoolsize: 10
});
exports.DB_JAPI = DB_JAPI;

var initFlag = null;

exports.select = function (db, sql , callback) {
    if (initFlag == null) {
        db.initialize((err) => {
            console.log('initialize ' + err);
            if (err != null)
                callback(err, null);
        });
    }


    db.reserve((err, connObj) => {

        if (connObj) {

            console.log('reserve ' + err + ', conn Succ');

            let conn = connObj.conn;
            conn.createStatement((err, statement) => {
                if (err) {
                    console.log('createStatement err' + err);
                    callback(err, null);
                }
                else {
                    //statement.executeQuery("SELECT * FROM TBL_CF_EAP_ALARMMSG;",
                    statement.executeQuery(sql,
                        (err, resultset) => {
                            if (err) {
                                console.log('executeQuery err : ' + err);
                                callback(err, null);
                            }
                            else {
                                resultset.toObjArray(function (err, results) {
                                    callback(err, results);
                                    
                                });
                            }
                        });
                    

                }
            });
            db.release(connObj, (err, conn) => {
                console.log('release err : ' + err);
            });
        }
        else {
            console.log('reserve ' + err + ', conn Fail');
        }

    });
}

exports.insert = function (db, sql, callback) {
    if (initFlag == null) {
        db.initialize((err) => {
            console.log('initialize ' + err);
            if (err != null)
                callback(err, null);
        });
    }

    db.reserve((err, connObj) => {

        if (connObj) {

            console.log('reserve ' + err + ', conn Succ');

            let conn = connObj.conn;

            conn.createStatement((err, statement) => {
                if (err) {
                    console.log('createStatement err' + err);
                    callback(err, null);
                }
                else {
                    statement.executeUpdate(sql, (err, count) => {
                        if (err) {
                            console.log('executeQuery err : ' + err);
                            callback(err, null);
                        }
                        else {
                            callback(err, count);
                        }
                    });
                }
            });

        }
    });
}

exports.set = function (value) {
    if (typeof (value) === 'string') {
        if (value == '')
            return 'NULL';
        return `'${value}'`;
    }
    return value;
}

//for (var i = 0; i < 100; i++) {
//    if(i < 10) 
//        setTimeout(function () { function1(false) }, i * 1000);
//    else 
//        setTimeout(function () { function1(true) }, i * 1000);
   
//}




//tibero.createStatement(function (err, statement) {
//    if (err) {
//        console.log('createStatement err = ' + err);
//    }
//    else {

//    }
        
//});





//exports.prepare = function (db, sql, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.prepareStatement(sql, function (err, preparedstatement) {
//            release(db, connobj, err, preparedstatement, callback);
//        });
//    });
//};

//exports.prepareCall = function (db, sql, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.prepareCall(sql, function (err, callablestatement) {
//            release(db, connobj, err, callablestatement, callback);
//        });
//    });
//};

//exports.update = function (db, sql, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.createStatement(function (err, statement) {
//            if (err) {
//                release(db, connobj, err, null, callback);
//            } else {
//                statement.executeUpdate(sql, function (err, result) {
//                    release(db, connobj, err, result, callback);
//                });
//            }
//        });
//    });
//};

//exports.select = function (db, sql, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.createStatement(function (err, statement) {
//            if (err) {
//                release(db, connobj, err, null, callback);
//            } else {
//                statement.executeQuery(sql, function (err, result) {
//                    release(db, connobj, err, result, callback);
//                });
//            }
//        });
//    });


//};
//exports.tableexists = function (db, catalog, schema, name, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.getMetaData(function (err, metadata) {
//            if (err) {
//                release(db, connobj, err, null, callback);
//            } else {
//                metadata.getTables(catalog, schema, name, null, function (err, resultset) {
//                    if (err) {
//                        release(db, connobj, err, null, callback);
//                    } else {
//                        resultset.toObjArray(function (err, results) {
//                            release(db, connobj, err, results.length > 0, callback);
//                        });
//                    }
//                });
//            }
//        });
//    });
//};

//exports.metadata = function (db, callback) {
//    reserve(db, function (err, connobj, conn) {
//        conn.getMetaData(function (err, metadata) {
//            release(db, connobj, err, metadata, callback);
//        });
//    });
//};

// jdbc:oracle:thin:@192.168.0.208:1521:ORCLEMS