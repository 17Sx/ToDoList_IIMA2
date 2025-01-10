import "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
const supabaseUrl = "https://eylawpnbxndqpddarztn.supabase.co/";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImV5bGF3cG5ieG5kcXBkZGFyenRuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzYzMzU5NTMsImV4cCI6MjA1MTkxMTk1M30.clsy1sskYFys0A0u2feI_ifTd0J3abEg9UCvZJpQ6Ag";
const supabaseClient = supabase.createClient(supabaseUrl, supabaseKey);
export default supabaseClient;
