//Query select to button and input area
//Add eventListener on search button
//Empty the input area
//Save the input in database
//call the API to check the result
//Print the result out

// import crypto from "crypto";

const url = "http://localhost:3000";

const searchButton = document.querySelector("#search");

function handleTextInput() {
  const textInput = document.querySelector(".text-input").value;
  return textInput;
}

function handlePasswordInput() {
  const passwordInput = document.querySelector(".passsword-input").value;
  console.log("PASSWORD: ", passwordInput);
  console.log("PASSWORDS FUNCTION: ", passwords);
  return passwordInput;
}

async function passwords() {
  console.log("GATHERFORMDATA: ", gatherFormData());
  const response = await fetch(`${url}/passwords`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(gatherFormData()),
  });
  const data = await response.json();
  console.log("DATA: ", data.body);
  // emptyInputArea();
}

function gatherFormData() {
  const searchText = handleTextInput();
  console.log("HANDLETEXTINPUT: ", searchText);
  const searchPassword = handlePasswordInput();
  console.log("HANDLEPASSWORDINPUT: ", searchPassword);
  return { searchText, searchPassword };
}

function emptyInputArea() {
  return (textInput.value = "") && (passwordInput.value = "");
}

searchButton.addEventListener("click", function (event) {
  event.preventDefault();

  passwords();
  // if (result !== {}) {
  //   return;
  // }
  // main(searchPassword);
});

// // //Requesting API data
// async function fetchApiData(passwordData) {
//   const url = "https://api.pwnedpasswords.com/range/";
//   const response = await fetch(url + passwordData);
//   const data = await response.json();
//   return data;
// }

// function getPasswordLeaksCount(response, ourPassword) {
//   const results = {};
//   let lineResults;
//   results = response.text().splitlines();
//   for (let line in results) {
//     lineResults += results.split(":");
//   }
//   for (let [h, count] of Object.entries(lineResults)) {
//     if (h === ourPassword) {
//       return count;
//     }
//     return;
//   }
// }

// //Checkes password if it exist in API response
// function pwnedApiCheck(password) {
//   // const sha1password = hashlib
//   //   .sha1(password.encode("utf-8"))
//   //   .hexdigest()
//   //   .toUpperCase();

//   const sha1password = crypto
//     .createHash("sha1")
//     .update(password, "utf-8")
//     .digest("hex")
//     .toUpperCase();

//   const first5_char = sha1password.subString(0, 5);
//   const tail = sha1password.substring(5, sha1password.length);
//   const response = fetchApiData(first5_char);
//   return getPasswordLeaksCount(response, tail);
// }

// const resultHTML = document.querySelector("h2");

// function main(password) {
//   count = pwnedApiCheck(password);

//   if (count) {
//     resultHTML.innerText = `${password} was found ${count} times... You should probably change your password`;
//   } else {
//     resultHTML.innerText = `${password} was NOT found.`;
//   }
//   return;
// }
