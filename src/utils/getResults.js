export default function getResults(seconds, wordCount) {
  return {
    seconds: Math.floor(seconds),
    minutes: Math.floor(seconds / 60),
    WPM: Math.floor(wordCount / (seconds / 60)),
    student: Math.floor((wordCount / 35) * 60),
    programmer: Math.floor((wordCount / 60) * 60),
    typist: Math.floor((wordCount / 90) * 60),
    fastest: Math.floor((wordCount / 219) * 60),
  };
}
