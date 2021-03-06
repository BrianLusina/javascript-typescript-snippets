const Trinary = require('./trinary')

test('1 is decimal 1', () => {
  expect(new Trinary('1').toDecimal()).toEqual(1)
})

test('2 is decimal 2', () => {
  expect(new Trinary('2').toDecimal()).toEqual(2)
})

test('10 is decimal 3', () => {
  expect(new Trinary('10').toDecimal()).toEqual(3)
})

test('11 is decimal 4', () => {
  expect(new Trinary('11').toDecimal()).toEqual(4)
})

test('100 is decimal 9', () => {
  expect(new Trinary('100').toDecimal()).toEqual(9)
})

test('112 is decimal 14', () => {
  expect(new Trinary('112').toDecimal()).toEqual(14)
})

test('222 is 26', () => {
  expect(new Trinary('222').toDecimal()).toEqual(26)
})

test('1122000120 is 32091', () => {
  expect(new Trinary('1122000120').toDecimal()).toEqual(32091)
})

test('invalid trinary is decimal 0', () => {
  expect(new Trinary('carrot').toDecimal()).toEqual(0)
})
