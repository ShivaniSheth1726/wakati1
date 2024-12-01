export function calculateReadingTime(sentence:string,wpm:number){
    const wordsCount:number = sentence.split(/\s+/).length;
    const minutes:number = wordsCount / wpm;
    const seconds:number = minutes * 60;
    return {
      wordsCount,
      minutes: Number(minutes.toFixed(2)),
      seconds: Number(seconds.toFixed(2)),
      wpm,
    };
  }