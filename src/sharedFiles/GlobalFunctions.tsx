export const reproduceAudio = (volume: number, musicUrl: string) => {
    const audio = new Audio(musicUrl);
    audio.volume = volume / 100;
    audio.play();
};
