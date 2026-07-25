import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rvzbozhscloqgzlrpklg.supabase.co'

const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ2emJvemhzY2xvcWd6bHJwa2xnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ5MjY5NDQsImV4cCI6MjEwMDUwMjk0NH0.30EBzhCF1ARlOU5dxa-F3Jp6NX5ZqYNtN6B2ogQBmRQ'

export const supabase = createClient(
  supabaseUrl,
  supabaseAnonKey
)