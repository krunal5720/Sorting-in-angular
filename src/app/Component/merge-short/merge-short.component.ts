import { Component } from '@angular/core';

@Component({
  selector: 'app-merge-short',
  templateUrl: './merge-short.component.html',
  styleUrls: ['./merge-short.component.css']
})
export class MergeShortComponent {
  randomNumbers: number[] = [];

  ngOnInit() {
    // Generate 10 random numbers
    for (let i = 0; i < 10; i++) {
      this.randomNumbers.push(Math.floor(Math.random() * 100) + 1);
    }
    // Render the bar graph
    this.renderBarGraph(this.randomNumbers);

  }

  renderBarGraph(randomNumbers: number[]) {
    // Get the canvas element and its context
    const canvas = document.getElementById('myCanvas') as HTMLCanvasElement;
    const context = canvas?.getContext('2d');

    if (!context) {
      console.error('Canvas context is null');
      return;
    }

    // Set the dimensions of the canvas
    const canvasWidth = 400;
    const canvasHeight = 300;
    canvas.width = canvasWidth;
    canvas.height = canvasHeight;

    // Define the style for the bars
    const barColor = 'blue';
    const barWidth = 40;
    const barSpacing = 10;
    const textColor = 'Black';
    const textSize = 16;
    const textPadding = 5;

    // Draw the bars
    let x = 0;
    for (let i = 0; i < randomNumbers.length; i++) {
      const barHeight = randomNumbers[i] * (canvasHeight / 100);
      context.fillStyle = barColor;
      context.fillRect(x, canvasHeight - barHeight, barWidth, barHeight);
      context.fillStyle = textColor;
      context.font = `${textSize}px Arial`;
      context.fillText(randomNumbers[i].toString(), x + textPadding, canvasHeight - barHeight - textPadding);
      x += barWidth + barSpacing;
    }
  }

  mergeSort() {
    this.randomNumbers = this.doMergeSort(this.randomNumbers);
    this.renderBarGraph(this.randomNumbers);
  }

  doMergeSort(arr: number[]): number[] {
    if (arr.length <= 1) {
      return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return this.merge(this.doMergeSort(left), this.doMergeSort(right));
  }

  merge(left: number[], right: number[]): number[] {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }
}
