var app = new Vue({
  el: "#app",
  data: {
    inputArrStr:
      "17 37 3 7 41 62 15 38 23 89 77 5 19 16 18 42 24 8 55 65 56 88 1 10 60 36 12 48 26 80 99 54 6 49 74 94 50 86 32 2 90 30 63 75 44 57 34 76 61 25 13 51 81 100 47 82 35 69 4 72 46 33 27 79 68 52 53 91 59 70 64 11 31 73 71 22 98 92 39 96 9 40 58 97 43 78 83 95 45 66 28 84 21 20 14 85 87 93 29 67",
    run_size: 8,
    splitArr: [],
    outputArr: [],
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
      this.splitArr = [];
      for (let i = 0; i < this.inputArr.length; i++) {
        if (i % this.run_size == 0) this.splitArr.push([]);
        this.splitArr[this.splitArr.length - 1].push(this.inputArr[i]);
      }
    },
    sortSplitArr() {
      this.sorted = true;
      for (let i = 0; i < this.splitArr.length; i++)
        this.splitArr[i].sort(function (a, b) {
          return a - b;
        });
    },
    run() {
      this.splitM = -1;
      this.splitMV = 1e9;
      let check = false;
      for (let i = 0; i < this.splitArr.length; i++) {
        if (this.splitArr[i].length > 0)
          if (this.splitArr[i][0] < this.splitMV) {
            this.splitM = i;
            this.splitMV = this.splitArr[i][0];
            check = true;
          }
      }
      if (check) {
        this.outputArr.push(this.splitMV);
        this.splitArr[this.splitM].shift();
      }
    },
  },
});
//asdfasf