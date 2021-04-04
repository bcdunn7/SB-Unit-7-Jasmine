describe("Payments test", function() {

    it('should erase all data from input values on submitPaymentInfo()', function () {  
        billAmtInput.innerText = 'testing';
        tipAmtInput.innerText = '1234';
        submitPaymentInfo(); 

        expect(billAmtInput.value).toEqual('');
        expect(tipAmtInput.value).toEqual('');
    });

    it('should correctly return undefined when inputs are blank on createCurPayment()', function () {
        billAmtInput.innerText = '';
        tipAmtInput.innerText = '';
        
        expect(createCurPayment()).toEqual(undefined);
    })

    it('should correctly add a tr for submit on appendPaymentTable()', function () {

        testPayment = {
            billAmt: "50",
            tipAmt: "2",
            tipPercent: 4
        }

        appendPaymentTable(testPayment);

        let payTableRow = document.querySelector('#payment0');

        expect(payTableRow.firstChild.innerHTML).toEqual('$50');
    })

    it('should add a td with a value of x on appendDeleteBtn', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        paymentTbody.append(newTr);

        let table = document.querySelector('#paymentTable');

        expect(table.rows[1].cells[0].innerText).toEqual('X');
    });
    
    afterEach(function() {
        paymentTbody.innerHTML = '';
    })

  });