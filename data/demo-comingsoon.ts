import type { ProfileList } from '@/models/type';
export const comingSoonNum = 1;
export const comingSoonId = 'demo-comingsoon';

const profile: ProfileList = {
  name: 'Coming Soon...',
  image: '/demo-example.png',
};

export default {
  id: comingSoonId,
  latestReportId: comingSoonId,
  profile,
};
