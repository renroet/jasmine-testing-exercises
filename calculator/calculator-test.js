
it('should calculate the monthly rate correctly', function () {
  expect(calculateMonthlyPayment({amount: '6000', years: '2', rate: '10'})).toEqual('5000');
  expect(calculateMonthlyPayment({amount: '0', years: '2', rate: '10'})).toEqual('0');
  // ...
});


it("should return a result with 2 decimal places", function() {
  expect(calculateMonthlyPayment({amount: '6357', years: '2', rate: '4'})).toEqual('2121.13');
  // ..
});

/// etc
