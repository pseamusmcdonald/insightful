import { createClient } from '@supabase/supabase-js'

const anonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImlhdCI6MTY0MjEyNTYxMiwiZXhwIjoxOTU3NzAxNjEyfQ.0s3QMMDGfJ1sCP3GOW1BMaSSq9UaOnG11Kdl_ZdUJdU'
const supabaseUrl = 'https://nnbhqzckdadxjdyowtml.supabase.co'

const supabase = createClient(supabaseUrl, anonKey)

export default supabase