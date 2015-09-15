describe('The APP Main module', function () {
    var mainModule,
    _moduleName='app.main',
    _path="/";

    beforeEach(module('app.main'));
    
    beforeEach(function () {
        mainModule = angular.module(_moduleName);
    });

    it("should be registered", function () {
        expect(mainModule).not.toBe(null);
    });

    describe("Dependencies:", function () {
        var deps;
        beforeEach(function () {
            deps = mainModule.value(_moduleName).requires;
        });
        it("should have no module dependencies", function () {
            console.log(deps);
            expect(deps.length).toBe(1);
        });
    });
});