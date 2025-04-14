import {createClient} from '@supabase/supabase-js'

const supabaseUrl = 'https://uysujvmrkmyrvjbnpobh.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InV5c3Vqdm1ya215cnZqYm5wb2JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDIzMjk0MjcsImV4cCI6MjA1NzkwNTQyN30.r85IL-i6vL21n1-P0H5ZkHYwp05oInPBBe_5EzyDrN4"
const supabase = createClient(supabaseUrl, supabaseKey)
export default supabase;