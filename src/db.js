import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = "https://dszrfthmbdvilgafevod.supabase.co";
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRzenJmdGhtYmR2aWxnYWZldm9kIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgwODA2NDMsImV4cCI6MjA0MzY1NjY0M30.1igl3OAY9TXVu5NuNdwHuD7xmcJEBtW5QqShBGUSfDE";
const supabase = createClient(supabaseUrl, supabaseKey);

// Reusable function to insert data
export async function addRow(
  teamId,
  judgeName,
  impact,
  creativity,
  validity,
  relevance,
  presentation,
  strategy,
  junior,
  creativityAward,
  panel_id,
) {
  const { data, error } = await supabase
    .from("submissions") // Replace with your table name
    .insert([
      {
        team_name: teamId,
        judge_name: judgeName,
        impact: impact,
        creativity: creativity,
        validity: validity,
        relevance: relevance,
        presentation: presentation,
        strategy: strategy,
        junior:junior,
        creativity_award:creativityAward,
        panel_id: panel_id,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Row added successfully:", data);
  }
}
