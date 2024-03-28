import { HeadMeta } from "@/shared/components/headMeta/HeadMeta";
import { getLayout } from "@/shared/components/layout/baseLayout/BaseLayout";
import { Header } from "@/widgets/header/Header";

function Home() {
  return (
    <>
      <HeadMeta title={"Home"} />
      <Header />
      <main>🚀Hi everyone!🚀</main>
    </>
  );
}

Home.getLayout = getLayout;
export default Home;
