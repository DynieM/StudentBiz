import { createClient } from 'https://cdn.skypack.dev/@supabase/supabase-js';
const express = require('express')
const app = express()
const port = 3001


const supabaseUrl = "https://ufszhsluvumwklqoxtax.supabase.co";
const SB = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVmc3poc2x1dnVtd2tscW94dGF4Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwOTE1Njc2MCwiZXhwIjoyMDI0NzMyNzYwfQ.4sAKoiqIDkMaRcy9RKIKTtlBSAn2Y3PXxM8dh_LBMqQ";

const supabase = createClient(supabaseUrl, SB);

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.post('/adduser', async (req, res) => {
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