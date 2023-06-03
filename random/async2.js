function doItSlow() {
    return new Promise(resolve => {
      setTimeout( () => {
        console.log( "resolving" );
        resolve();
      }, 1000 );
     }); 
   }

async function waitForIt( done ) {

    console.log( "awaiting" );
    await doItSlow();
    console.log( "awaited" );
    done();
}

waitForIt(() => {
    console.log( "completed test" );
});

console.log( "passed by the test" );