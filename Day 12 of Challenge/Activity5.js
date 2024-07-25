//Activity 5 => Gracefull Error Handling in fetch

// Task 8
try {
   fetch('https//wikipedai.com')
      .then(rep => rep.json())
      .then(data => console.log(data))
} catch (error) {
   console.log(error);
}


// Task 9
async function invalidurl() {
   try {
      let respose = await fetch('https://wikipedia.com')
      if (!respose) {
         throw new Error('Https Failed')
      }
      else {
         let data = await respose.json()
         console.log(data);
      }
   } catch (error) {
      console.log("Error", error);
   }
}

invalidurl()