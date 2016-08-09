describe('this is a test suite', function () {
    beforeEach(function () {
    });
    it('should open a new window', function () {
        expect(true).toBeTruthy();
    });
    it('should open close the window', function () {
        expect(false).toBeFalsy();
    });
});
describe('Should check for the application Headers', function () {
    var expectedMsg = 'External Template', appheader = 'Storyline Tracker', compheader = 'Component Demo';
    beforeEach(function () {
        browser.get('');
    });
    var list = element.all(by.css('h1'));
    it('should display: ' + expectedMsg, function () {
        expect(list.get(0).getText()).toBe(expectedMsg);
    });
    it('should display: ' + appheader, function () {
        expect(list.get(1).getText()).toBe(appheader);
    });
    it('should display app header: ' + compheader, function () {
        expect(element(by.css('h3')).getText()).toEqual(compheader);
    });
});
describe('Should verify the Story list', function () {
    var Storylist = element.all(by.css('article ul li'));
    var storyCharacter = element(by.css('#character'));
    it('should display the list of stories', function () {
        expect(Storylist.getText()).toEqual(['11. Chewbacca', '12. Rey']);
    });
    it('should validate the count', function () {
        expect(Storylist.count()).toBe(2);
    });
    it('should select first element from story list and display selected story', function () {
        Storylist.first().click();
        expect(element(by.className('selected')).isDisplayed());
        expect(storyCharacter.getText()).toEqual('You selected Chewbacca');
        Storylist.get(1).click();
        expect(storyCharacter.getText()).toEqual('You selected Rey');
    });
});
describe('should verify carousel and its functionality', function () {
    var carouselContainer = element(by.css('.carousel slide'));
    var clickRight = element(by.css('a.right'));
    var clickLeft = element(by.css('a.left'));
    it('should check if carousel exists in the page', function () {
        expect(carouselContainer.isPresent()).toBe(true);
    });
    it('should click right and slide the carousel to right', function () {
        clickRight.click();
    });
    it('should click left and slide the carousel to left', function () {
        clickLeft.click();
    });
});
//# sourceMappingURL=app.e2e-spec.js.map