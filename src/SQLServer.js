
function connectToDatabase()
{
    const sql = require('mssql/msnodesqlv8');
    // Database Configuration
    var config = {
        database: 'testdb',
        server: 'DESKTOP-658IAH3\\SQLEXPRESS',
        driver: 'msnodesqlv8',
        options: {
            trustedConnection: true
        }    
    };
    
    // connect to your database
    sql.connect(config, function (err) {
        if (err) console.log(err);
        // create Request object
        var request = new sql.Request();
            
        // query to the database and get the records
        request.query('SELECT * FROM emptable', function (err, recordset) {
            if (err) {
                console.log("Something went wrong")
            }
            else{
                
                //Conver Return Data Object to string
                var result = JSON.stringify(recordset);
                document.getElementById("dbResult").innerHTML=result;

            }
        });
    });
}
window.onload=function(){
    connectToDatabase()
}