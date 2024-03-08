// import statements
import { createClient } from '@supabase/supabase-js';
import express from 'express';
import cors from 'cors';

// const variables
const app = express()
const port = 3001

// allow json to be sent
app.use(express.json());

// allow cors for api calls on site
app.use(cors());

// db info
const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";
const supabase = createClient(supabaseUrl, SB);

// adduser will add a user to the database from signup.html
app.post('/adduser', async (req, res) => {
    const { fname, lname, email, number, password } = req.body;
    const { error } = await supabase
        .from("users")
        .insert({
            first_name_db: fname,
            last_name_db: lname,
            email_db: email,
            phone_number_db: number,
            password_db: password,
        });


    if (error != null) {
        res.status(403).send("user add unsuccessful")
        return
    }
    res.status(200).send("new user added")
})

// listen for port
app.listen(port, () => {
    console.log(`StudentBiz API running on port ${port}`)
})