// describe('Dropdowns',()=>{

    // it('ng-option',()=>{
    //     browser.get('http://juliemr.github.io/protractor-demo/');
    //     var allOptions=element.all(by.options('value for (key, value) in operators'));

    //     allOptions.each(function(option){
    //     option.getText().then(function(optionText){
    //         console.log(optionText);
    //     })
    // })

    // var thirdOption=allOptions.get(2);
    // thirdOption.getText().then(function(optionText){
    //     console.log(optionText);
    // })
    
    // })

    // describe('Dropdowns', () => {

    

    //     it('ng-options', () => {
    
    //         browser.get("http://juliemr.github.io/protractor-demo/");
    
    //         var allOptions = element.all(by.options('value for (key, value) in operators'));
    
            
    
    //         //Printing all the options in dropdown
    
    //         allOptions.each(function(option){
    
    //             option.getText().then(function(optionText){
    
    //                 console.log(optionText);
    
    //             })
    
    //         })
    
    
    
    //         //Printing option that we want by its index
    
    //         var thirdOption = allOptions.get(2);
    
    //         thirdOption.getText().then(function(optionText){
    
    //             console.log(optionText);
    
    //         })
    
    //         // Clicking the item in a dropdown list
    
    //         thirdOption.click();
    
    //     });
    
    
    
    //     fit('dropdowns exercise', () => {
    
    //         browser.waitForAngularEnabled(false);
    
    
    
    //         //Getting all the elements from a dropdown print it
    
    //         browser.get("https://www.skout.com/");
    
            // element.all(by.id("birthday-month")).first()
    
            //     .all(by.tagName('option'))
    
            //         .getText().then(function(textArray){
    
            //             console.log(textArray);
    
            // })
    
    
    
            // //it's getting all the options starting with J, and clicks the last one
    
            // element.all(by.id("birthday-month")).first() //Finding the dropdown list
    
            //     .all(by.cssContainingText('option','J')).last().click();
    
            // browser.sleep(8000);
    
    
    
    
    
    
    
            // //will give you the first month starting with J which is January
    
            // element.all(by.id("birthday-month")).first() //Finding the dropdown list
    
            //     .element(by.cssContainingText('option','J')).click();
    
            // browser.sleep(8000);
    
    
    
            // //it's getting all the options starting with J, and clicks the secon one
    
            // //out of 3
    
            // element.all(by.id("birthday-month")).first() //Finding the dropdown list
    
            //     .all(by.cssContainingText('option','J')).get(1).click();
    
            // browser.sleep(8000);
    
    
//clicking an element with css/ value
    
    //         element.all(by.id("birthday-month")).first() //Finding the dropdown list
    
    //             .element(by.css('option[value="2"]')).click();
    
    
    
    //         browser.sleep(8000);
    
    //     });
    
        
    // })

describe('Dropdowns',()=>{
    xit('Task1 1980',function(){

        browser.waitForAngularEnabled(false);

        browser.get('https://www.skout.com/');

        browser.sleep(1000);

        element.all(by.id('birthday-year')).first()

           .element(by.css('option[value="38"]')).click(); 

        browser.sleep(6000);

    });

    it('Task1 1980',function(){

        browser.waitForAngularEnabled(false);

        browser.get('https://www.skout.com/');

        browser.sleep(1000);

    //     element.all(by.id('birthday-year')).first()

    //        .element(by.cssContainingText('option', '1980')).click(); 

    //     browser.sleep(6000);

    // });
     element.all(by.id('birthday-month')).first()
     .element(by.xpath('option[.="April"]')).click();
          browser.sleep(3000);

     });
    
    })
