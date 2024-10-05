import { createClient } from "@supabase/supabase-js";

// Initialize Supabase client
const supabaseUrl = process.env.REACT_APP_SUPABASE_URL;
const supabaseKey = process.env.REACT_APP_SUPABASE_KEY;
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
  strategyBox
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
        strategy_box: strategyBox,
      },
    ])
    .select();

  if (error) {
    console.error("Error inserting data:", error);
  } else {
    console.log("Row added successfully:", data);
  }
}
