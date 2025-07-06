fetch('https://rukoeadcdrhtzmlwpktf.supabase.co/rest/v1/products?order=id.desc&limit=1', {
  headers: {
    apikey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1a29lYWRjZHJodHptbHdwa3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NzYyNTcsImV4cCI6MjA2NjA1MjI1N30.1cRhgmPKXMW6oFtz6wtICQ2S-eWSSgdS_3f3cHhKuSQ',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ1a29lYWRjZHJodHptbHdwa3RmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTA0NzYyNTcsImV4cCI6MjA2NjA1MjI1N30.1cRhgmPKXMW6oFtz6wtICQ2S-eWSSgdS_3f3cHhKuSQ'
  }
})
  .then(res => res.json())
  .then(data => console.log("Last added product:", data[0]))
