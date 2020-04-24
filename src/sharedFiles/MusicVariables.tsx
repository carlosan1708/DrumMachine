const basemusicUrl = 'https://s3.amazonaws.com/freecodecamp/drums/';
const getmusicUrl = (str: string) => `${basemusicUrl}${str}.mp3`;

export type MusicElement = {
  musicKey: string;
  musicText: string;
  musicUrl: string;
}

export const musicList: MusicElement[] = [
  {
    musicKey: 'Q',
    musicText: 'Heater 1',
    musicUrl: getmusicUrl('Heater-1'),
  }, {
    musicKey: 'W',
    musicText: 'Heater 2',
    musicUrl: getmusicUrl('Heater-2'),
  }, {
    musicKey: 'E',
    musicText: 'Heater 3',
    musicUrl: getmusicUrl('Heater-3'),
  }, {
    musicKey: 'A',
    musicText: 'Heater 4',
    musicUrl: getmusicUrl('Heater-4_1'),
  }, {
    musicKey: 'S',
    musicText: 'Heater 6',
    musicUrl: getmusicUrl('Heater-6'),
  }, {
    musicKey: 'D',
    musicText: 'Dsc Oh',
    musicUrl: getmusicUrl('Dsc_Oh'),
  }, {
    musicKey: 'Z',
    musicText: 'Cev H2',
    musicUrl: getmusicUrl('Cev_H2'),
  }, {
    musicKey: 'X',
    musicText: 'RP4 Kick 1',
    musicUrl: getmusicUrl('RP4_KICK_1'),
  }, {
    musicKey: 'C',
    musicText: 'Kick n Hat',
    musicUrl: getmusicUrl('Kick_n_Hat'),

  }
];