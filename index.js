const inpKey = document.getElementById("inpKey")
const inpValue = document.getElementById("inpValue");

const isOutput1 = document.getElementById("isOutput1");
const isOutput2 = document.getElementById("isOutput2");
const emptyArr=[{}]

const btn = document.getElementById("btn").addEventListener("click", function addStorage (e) {
    console.log("clicked");
    e.preventDefault()
    const key = inpKey.value;
    const value = inpValue.value;
    console.log(key);
    console.log(value);
    if (key && value) {
      localStorage.setItem(key, value);
        location.reload();
        viewStorage();
    }

})
    

const btnV = document.getElementById("btnV").addEventListener("click", function viewStorage(e) {
  console.log("clicked", e);
  e.preventDefault();

  for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      console.log("key",key)
    const value = localStorage.getItem(key);
   console.log("key", key,value);
    isOutput1.innerHTML += `<ul> ${key} | ${value} <ul/>`;
  }

  let storageObj = localStorage;
  console.log("obj", storageObj);
  const dataPush = Object.assign(storageObj);
  console.log("objPush", dataPush);
//   isOutput2.innerHTML += `<ul> ${dataPush.Storage} <ul/>`;

    if ("submit") {
        // let removes = Object.keys(dataPush).map((key => dataPush[key]));
        let removes = Object.keys(dataPush).map((key,index) => [
            [index],
          dataPush[key],
        ]);

        console.log("keys",removes)
        // var removeStorage = localStorage.removeItem("key", "value"
        // );
        // console.log("remove", removeStorage)
    }
});


function removeStorageKey(data) {
     
    console.log(data)
    // let removeVals = Object.values(data).map((key, index) => [
    //     [index],
    //     data[key],
    // ]);
      let removeVals = Object.keys(data).map((key) => [
        
          data[key]
      ]);
    console.log("removeVals",removeVals)
 let vals=removeVals[1].push(emptyArr)
    console.log(vals)
     
}
removeStorageKey(localStorage)