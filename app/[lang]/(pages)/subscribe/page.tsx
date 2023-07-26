import type { Metadata } from 'next';
import Subscribe from '~/components/widgets/Subscribe';

export const metadata: Metadata = {
  title: 'Subscribe',
};

const Page = () => {
  return (
    <>
      <Subscribe />
      {/* <Features2 {...featuresData2} /> */}
    </>
  );
};

export default Page;
