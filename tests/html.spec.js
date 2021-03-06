/**
 * @jest-environment jsdom
 */

 const fs = require('fs');
 const path = require('path');
 //const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');
 const html = fs.readFileSync(require.resolve('../index.html'), 'utf8');
 describe('index.html', () => {
     beforeEach(() => {
         document.documentElement.innerHTML = html.toString();
     });
 
    //  describe('head', () => {
    //      it('has favicon', () => {
    //          let favicon = document.querySelector("head link[rel='icon']");
    //          expect(favicon).toBeTruthy();
    //      });
 
         it('has stylesheet', () => {
             let stylesheet = document.querySelector("head link[rel='stylesheet']");
             expect(stylesheet).toBeTruthy();
         });
         
         it('has title with text Search', () => {
             let title = document.querySelector("head title");
             expect(title).toBeTruthy();
             expect(title.textContent).toBe('Search');
         });

 
    describe('body', () => {
    //      it('has img (logo)', () => {
    //          let img = document.querySelector("body img");
    //          expect(img).toBeTruthy();
    //      });
         
         it('has form', () => {
             let form = document.querySelector("form");
             expect(form).toBeTruthy();
         });
 
    //      it('has footer', () => {
    //          let footer = document.querySelector("body footer");
    //          expect(footer).toBeTruthy();
    //      });
         
    //      it('footer has at least 1 link', () => {
    //          let footerLinks = document.querySelectorAll("body footer > a");
    //          expect(footerLinks.length).toBeGreaterThanOrEqual(1);
    });
 
    describe('form', () => {
        it('has search bar', () => {
            let searchBar = document.querySelector("form input[type='text']");
            expect(searchBar).toBeTruthy();
        });

        it("has a submit button with text 'Google Search'", () => {
            let submitBtn = document.querySelector("body form input[id='searchbutton']");
            expect(submitBtn).toBeTruthy();
            expect(submitBtn.value).toBe('Googol Search!');
        });

        it("has button with text 'I'm Feeling Lucky'", () => {
            let luckyBtn = document.querySelector("body form input[id='randombutton']");
            expect(luckyBtn).toBeTruthy();
            expect(luckyBtn.value).toBe("I'm feeling Lucky");
        });
    });

});
