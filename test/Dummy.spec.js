describe('Dummy', function() {

    describe('dummy function', function() {
        it('should return true', function() {
            var d = new Dummy();
            expect(d.dummy()).toEqual(true);
        });
    });

});