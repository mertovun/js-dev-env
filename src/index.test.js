import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';


describe ('Our first test',() => {
  it('should pass', () =>{
    expect(true).to.equal(true);
  });
});

describe('index.html', () => {
  it('should say hello', (done) => { // done is placed because of async testing
    const index = fs.readFileSync('./src/index.html', "utf-8");
    const { JSDOM } = jsdom;
    const dom = new JSDOM(index);
    const h1 = dom.window.document.getElementsByTagName('h1')[0];
    expect(h1.innerHTML).to.equal('Hello World!?');
    done();
    //jsdom.env(index, function(err, window){
    //  const h1 = window.document.getElementsByTagName('h1')[0];
      //expect(h1.innerHTML).to.equal('Hello World!?');
    //  window.close();
    //});
  });
});
