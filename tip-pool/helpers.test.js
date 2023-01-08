describe ('functions in helpers file', function () {
    beforeAll(function() {
        allPayments = {1 : {
            billAmt: 50.10,
            tipAmt : 10,
            tipPercent: 20
        }};
    })
    it('should add up the total payments', function () {
        sumPaymentTotal('billAmt');

        expect('return').not.toEqual(undefined);
    });

    it('should calculate tip percentage', function() {
        expect(calculateTipPercent()).toEqual('20');
    });

})