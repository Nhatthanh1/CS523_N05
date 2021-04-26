var app = new Vue({
  el: "#app",
  data: {
    inputArrStr:
      "17 37 3 7 41 62 15 38 23 89 77 5 19 16 18 42 24 8 55 65 56 88 1 10 60 36 12 48 26 80 99 54 6 49 74 94 50 86 32 2 90 30 63 75 44 57 34 76 61 25 13 51 81 100 47 82 35 69 4 72 46 33 27 79 68 52 53 91 59 70 64 11 31 73 71 22 98 92 39 96 9 40 58 97 43 78 83 95 45 66 28 84 21 20 14 85 87 93 29 67",
    run_size: 8,
    blockArr: [],
    colorsArr: [],
    split_size: 1,
    block_size: 1,
    outputArr: [],
    outputColorsArr: [],
    sorted: false,
    splitM: -1,
    splitMV: -1,
  },
  computed: {
    inputArr() {
      return this.inputArrStr.split(" ").map((e) => parseInt(e));
    },
  },
  methods: {
    split() {
      this.sorted = false;
      this.outputArr = [];
      this.colorsArr = [];
      this.blockArr = [];
      for (let i = 0; i < this.block_size; i++) {
        this.blockArr.push([]);
        this.colorsArr.push(
          "#" + Math.floor(Math.random() * 16777215).toString(16)
        );
      }
      let splitIndex = 0;
      let splitCount = 0;
      for (let i = 0; i < this.inputArr.length; i++) {
        this.blockArr[splitIndex].push(this.inputArr[i]);
        splitCount++;
        if (splitCount == this.split_size) {
          splitCount = 0;
          splitIndex++;
        }
        if (splitIndex == this.block_size) splitIndex = 0;
      }
    },
    sortSplitArr() {
      this.sorted = true;
      for (let i = 0; i < this.blockArr.length; i++)
        this.blockArr[i].sort(function (a, b) {
          return a - b;
        });
    },
    run() {
      this.splitM = -1;
      this.splitMV = 1e9;
      let check = false;
      for (let i = 0; i < this.blockArr.length; i++) {
        if (this.blockArr[i].length > 0)
          if (this.blockArr[i][0] < this.splitMV) {
            this.splitM = i;
            this.splitMV = this.blockArr[i][0];
            check = true;
          }
      }
      if (check) {
        this.blockArr[this.splitM].splice(0, 1);
        this.outputArr.push(this.splitMV);
        this.outputColorsArr.push(this.colorsArr[this.splitM]);
      }
    },
  },
});
