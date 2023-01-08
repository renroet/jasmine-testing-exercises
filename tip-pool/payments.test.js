describe ("Payments tests", function () {
    beforeEach(function() {
      billAmtInput.value = '50.10';
      tipAmtInput.value = '10';
    });
  
    it('should submit payment info and create object in allPayments array', function () {
      submitPaymentInfo();
      expect(allPayments['payment1']).toEqual({billAmt: '50.10',
      tipAmt: '10',
      tipPercent: 20,});
    });
  
    it('should append the payment table', function () {
      appendPaymentTable();
  
      expect(newTr.id).toEqual('payment1');
      (document.querySelector('table tbody tr td').innerText).toEqual('$50.10');
    })
  
    it('should calculate payment', function () {
      expect(createCurPayment()).toEqual(
        {billAmt: '50.10',
        tipAmt: '10',
        tipPercent: 20});
    });
  
    it('should update summary', function () {
      updateSummary();
      expect(Object.keys(allPayments).length).toEqual(1);
      expect(summaryTds[0].innerHTML).toEqual('$50.1');
    })
  
  afterEach(function() {
    billAmtInput.value = '';
    tipAmtInput.value = '';
  });
  });
  
  
  
  describe ('payment info with blank input', function () {
    beforeEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '10';
    })
  
    it('should calculate to undefined', function () {
      expect(createCurPayment()).toEqual(undefined)
    })
  
    afterEach(function() {
      billAmtInput.value = '';
      tipAmtInput.value = '';
    })
  
  });
  
  
  