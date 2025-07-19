import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fccbemiqnloaexbcufmr.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZjY2JlbWlxbmxvYWV4YmN1Zm1yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTI4ODExMzUsImV4cCI6MjA2ODQ1NzEzNX0.gxud_ZLplbSrVr-np_f_caH_XbihZeTpC5894sZh5pA';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);