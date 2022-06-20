class SortedList {
  constructor() {
    this.items = [];
    this.length = this.items.length;
  }

  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => {
      return (a - b);
    });
    this.length++;
  }

  get(pos) {
    if (pos < 0 || pos > this.length - 1) {
      throw new Error('OutOfBounds');
    } else {
      return this.items[pos];
    }
  }

  max() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[this.length - 1];
    }
  }

  min() {
    if (this.length === 0) {
      throw new Error('EmptySortedList');
    } else {
      return this.items[0];
    }
  }

  sum() {
    let sum = 0;
    for (let i = 0; i < this.items.length; i++) {
      sum += this.items[i]
    }
    return sum
  }

  sum2() {
    let sum = 0;

    this.items.forEach(item => sum += item);

    return sum;
  }

  sum3() {
    return this.length > 0 ? this.items.reduce((accumulator, item) => accumulator += item) : 0;

    //<condition> ? <operation if true> : <operation if false>;
  }

  avg() {
    if (this.length === 0)  { throw new Error('EmptySortedList'); }
    else                    { return this.sum() / this.length; }
  }
}

module.exports = SortedList;
