import { createPool } from 'mysql'

const pool = createPool({
    host: `localhost`,
    user: `root`,
    port:`3306`,
    password: '',
    database:`7ctech`,
    
})

if(!pool){
    pool.getConnection((err) => {
        if(err){
            console.log('Error in connection')
        }
        console.log("Connected!")
    })
}

const executeQuery = async(query, arraParms) => {
    return new Promise((resolve, reject) => {
        try {
            pool.query(query,arraParms, (err,data) => {
                if (err) {
                    console.log(err);
                    reject(err);
                }
                resolve(data);
            })
            
        } catch (error) {
            reject(err)
        }
    })
    
}


export {executeQuery, pool}