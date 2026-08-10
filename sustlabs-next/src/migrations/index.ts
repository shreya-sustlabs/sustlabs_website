import * as migration_20260807_053904_initial from './20260807_053904_initial';

export const migrations = [
  {
    up: migration_20260807_053904_initial.up,
    down: migration_20260807_053904_initial.down,
    name: '20260807_053904_initial'
  },
];
