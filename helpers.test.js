describe("Helpers test", function() {
  
    it('should corretly total the given amount type on sumPaymentTotal()', function() {
        allPayments = {
            payment1: {
                billAmt: "50",
                tipAmt: "2",
                tipPercent: 4
            },
            payment2: {
                billAmt: "25",
                tipAmt: "3",
                tipPercent: 12
            },
            payment3: {
                billAmt: "1",
                tipAmt: "0",
                tipPercent: 0
            },
        }
        
        expect(sumPaymentTotal("billAmt")).toEqual(76);
        expect(sumPaymentTotal("tipAmt")).toEqual(5);
        expect(sumPaymentTotal("tipPercent")).toEqual(16);
    })

    it('should correctly round and calculate tip percentage on calculateTipPercentage()', function () {  
        expect(calculateTipPercent(45,4)).toEqual(9);
        expect(calculateTipPercent(0,2)).toEqual(Infinity);
        expect(calculateTipPercent(10,0)).toEqual(0);
        expect(calculateTipPercent(1,1)).toEqual(100);
    });

    it('should correctly input value into table datacell', function () {
        let newTr = document.createElement('tr');
        appendTd(newTr, "bryce testing 123");
        expect(newTr.firstChild.innerHTML).toEqual("bryce testing 123");
    })

    it('should add a td with a value of x on appendDeleteBtn', function () {
        let newTr = document.createElement('tr');
        appendDeleteBtn(newTr);
        serverTbody.append(newTr);

        let table = document.querySelector('#serverTable');

        expect(table.rows[1].cells[0].innerText).toEqual('X');
    });

    afterAll(function () {
        updateServerTable();
    })

  });
  