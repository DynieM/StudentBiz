const express = require('express')
const app = express()
const port = 3001




app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/adduser', (req, res) => {
    const { data, error } = await supabase
        .from("users")
        .insert({
            first_name_db: first_name,
            last_name_db: last_name,
            email_db: email,
            phone_number_db: phone_number,
            password_db: password,

        });
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})