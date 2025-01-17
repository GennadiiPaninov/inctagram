import { WithNavigate } from "@/shared/assets/hoc/WithNavigate";
import { PageWrapper } from "@/shared/components";
import { HeadMeta } from "@/shared/components/headMeta/HeadMeta";
import { getMainLayout } from "@/shared/components/layout/mainLayout/MainLayout";

const Messenger = () => {
  return (
    <WithNavigate>
      <PageWrapper>
        <HeadMeta title={"Messenger"} />
        <div>Messenger</div>
      </PageWrapper>
    </WithNavigate>
  );
};

Messenger.getLayout = getMainLayout;
export default Messenger;
