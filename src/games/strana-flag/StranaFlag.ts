import { BaseGame } from '../BaseGame';
import { randomInteger } from '../../utils/utils';
import { Flags } from '../../types/types';

// eslint-disable-next-line global-require
const countriesData = require('../../data/flags.json') as Flags;

export type ComparisonTask = {
  task: string,
  answers: string[],
};

export class StranaFlag extends BaseGame {
  readonly countAnswers = 4;
  currentAnswer: string = '';
  taskStack: number[] = [];

  getTask(): ComparisonTask {
    return {
      task: this.getRandomTask(),
      answers: this.getRandomAnswers(),
    };
  }

  getRandomTask(): string {
    let countryInd = -1;
    do {
      countryInd = randomInteger(0, countriesData.flags.length - 1);
    }
    while (this.isTaskWas(countryInd));

    this.taskStack.push(countryInd);
    const contry = countriesData.flags[countryInd];
    this.currentAnswer = contry.flag;
    return contry.country;
  }

  isTaskWas(countryIndex: number): boolean {
    if (this.taskStack.length === 0) return false;
    const findInd = this.taskStack.findIndex((el) => el === countryIndex);
    return findInd > 0;
  }

  getRandomAnswers(): string[] {
    const answers = new Set<string>();
    answers.add(this.currentAnswer);
    while (answers.size < this.countAnswers) {
      const countryId = randomInteger(0, countriesData.flags.length - 1);
      const contry = countriesData.flags[countryId];
      answers.add(contry.flag);
    }
    answers.delete(this.currentAnswer);
    const arrAnswers = Array.from(answers);
    this.addRightAnswer(arrAnswers);
    return arrAnswers;
  }

  addRightAnswer(arr: string[]): void {
    const positionRigthAnswer = randomInteger(1, this.countAnswers);
    arr.splice(positionRigthAnswer - 1, 0, this.currentAnswer);
  }

  checkAnswer(answer: string): boolean {
    const rightAnswer = this.currentAnswer === answer;
    this.updateScore(rightAnswer);
    this.updateLevel(rightAnswer);
    return rightAnswer;
  }
}