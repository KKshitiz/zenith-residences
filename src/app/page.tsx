import BuildingScene from "./ui/components/BuildingScene";
import { supabase } from "./utils/supabase_client";

const Home = async () => {
  const { data: apartments, error } = await supabase
    .from("apartments")
    .select("*");

  if (error) {
    console.error(error);
    return <div>Error loading apartments</div>;
  }

  return <BuildingScene apartments={apartments} />;
};

export default Home;
