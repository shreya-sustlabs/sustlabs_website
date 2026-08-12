import * as migration_20260807_053904_initial from './20260807_053904_initial';
import * as migration_20260812_143154_lead_utm from './20260812_143154_lead_utm';

export const migrations = [
  {
    up: migration_20260807_053904_initial.up,
    down: migration_20260807_053904_initial.down,
    name: '20260807_053904_initial'
  },
  {
    up: migration_20260812_143154_lead_utm.up,
    down: migration_20260812_143154_lead_utm.down,
    name: '20260812_143154_lead_utm'
  },
];
