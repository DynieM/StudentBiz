import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
const express = require('express')
const app = express()
const port = 3001
app.use(express.json());


const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";

const supabase = createClient(supabaseUrl, SB);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/adduser', async (req, res) => {
    const { fname, lname, email, number, password } = req.body;

    const { data, error } = await supabase
        .from("users")
        .insert({
            first_name_db: fname,
            last_name_db: lname,
            email_db: email,
            phone_number_db: number,
            password_db: password,

        });

    console.log(data)

    res.send("new user added")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})