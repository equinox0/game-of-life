// 40 x 24 [20-21 x 12-13]

const CELLS_SETTINGS = [
  {
    name: "Clear",
    aliveCells: []
  },
  {
    name: "Glider",
    aliveCells: [
      { x: 20, y: 10 },
      { x: 21, y: 11 },
      { x: 19, y: 12 },
      { x: 20, y: 12 },
      { x: 21, y: 12 },
    ]
  },
  {
    name: "Small exploder",
    aliveCells: [
      { x: 20, y: 10 },
      { x: 19, y: 11 },
      { x: 20, y: 11 },
      { x: 21, y: 11 },
      { x: 19, y: 12 },
      { x: 21, y: 12 },
      { x: 20, y: 13 },
    ]
  },
  {
    name: "Exploder",
    aliveCells: [
      { x: 18, y: 10 },
      { x: 20, y: 10 },
      { x: 22, y: 10 },
      { x: 18, y: 11 },
      { x: 22, y: 11 },
      { x: 18, y: 12 },
      { x: 22, y: 12 },
      { x: 18, y: 13 },
      { x: 22, y: 13 },
      { x: 18, y: 14 },
      { x: 20, y: 14 },
      { x: 22, y: 14 }
    ]
  },
  {
    name: "10 cell row",
    aliveCells: [
      { x: 15, y: 11 },
      { x: 16, y: 11 },
      { x: 17, y: 11 },
      { x: 18, y: 11 },
      { x: 19, y: 11 },
      { x: 20, y: 11 },
      { x: 21, y: 11 },
      { x: 22, y: 11 },
      { x: 23, y: 11 },
      { x: 24, y: 11 },
    ]
  },
  {
    name: "Tumbler",
    aliveCells: [
      { x: 18, y: 10 },
      { x: 19, y: 10 },
      { x: 21, y: 10 },
      { x: 22, y: 10 },
      { x: 18, y: 11 },
      { x: 19, y: 11 },
      { x: 21, y: 11 },
      { x: 22, y: 11 },
      { x: 19, y: 12 },
      { x: 21, y: 12 },
      { x: 17, y: 13 },
      { x: 19, y: 13 },
      { x: 21, y: 13 },
      { x: 23, y: 13 },
      { x: 17, y: 14 },
      { x: 19, y: 14 },
      { x: 21, y: 14 },
      { x: 23, y: 14 },
      { x: 17, y: 15 },
      { x: 18, y: 15 },
      { x: 22, y: 15 },
      { x: 23, y: 15 },
    ]
  }
]

export default CELLS_SETTINGS;
