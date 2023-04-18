$(document).ready(function () {

  // deleteJournalEntries() //Clears Journal Entries first

  // Load journal entries from localStorage on page load
  loadJournalEntries();


  //create form jquery function

  // Create the form element
  var form = $("<form>", { id: "journalForm" });
  var entryNumber = 0;
  var lengthEntry = 2;
  var entries = $("<div>").addClass('entries').css({ "display": "inline-block" });

  for (entryNumber = 0; entryNumber < lengthEntry; entryNumber++) {
    // Create the Account input field
    var accountLabel = $("<label>", { for: "account" + (entryNumber + 1), html: "&nbsp Account: &nbsp" });
    var accountInput = $("<input>", { type: "text", id: "account" + (entryNumber + 1) });

    // Create the Debit Amount input field
    var amountDRLabel = $("<label>", { for: "amountDR" + (entryNumber + 1), html: "&nbsp Debit Amount: &nbsp" });
    var amountDRInput = $("<input>", { type: "number", id: "amountDR" + (entryNumber + 1) });

    // Create the Credit Amount input field
    var amountCRLabel = $("<label>", { for: "amountCR" + (entryNumber + 1), html: "&nbsp Credit Amount: &nbsp" });
    var amountCRInput = $("<input>", { type: "number", id: "amountCR" + (entryNumber + 1) });

    // Append input fields and labels to each entry
    var entry = $("<div>").addClass('entry');
    entry.append(accountLabel, accountInput, amountDRLabel, amountDRInput, amountCRLabel, amountCRInput);

    // Append each entry to entries div
    entries.append(entry);
  }

  // Create the Note input field
  var notes = $("<div>").addClass('notes').css({ "display": "block" });
  var noteLabel = $("<label>", { for: "note", html: "Note: &nbsp" });
  var noteInput = $("<input>", { type: "text", id: "note" });
  notes.append(noteLabel, noteInput);

  //Create Buttons
  var buttons = $("<div>").addClass('buttons').css({ "display": "block" });

  //Add row event button

  // Create a button to add another instance of input fields
  var addButton = $("<button>").text("Add Another").click(function () {
    var newEntry = $("<div>").addClass('entry');
    var newAccountLabel = $("<label>", { for: "account" + (entryNumber + 2), html: "&nbsp Account: &nbsp" });
    var newAccountInput = $("<input>", { type: "text", id: "account" + (entryNumber + 2) });
    var newAmountDRLabel = $("<label>", { for: "amountDR" + (entryNumber + 2), html: "&nbsp Debit Amount: &nbsp" });
    var newAmountDRInput = $("<input>", { type: "number", id: "amountDR" + (entryNumber + 2) });
    var newAmountCRLabel = $("<label>", { for: "amountCR" + (entryNumber + 2), html: "&nbsp Credit Amount: &nbsp" });
    var newAmountCRInput = $("<input>", { type: "number", id: "amountCR" + (entryNumber + 2) });
    newEntry.append(newAccountLabel, newAccountInput, newAmountDRLabel, newAmountDRInput, newAmountCRLabel, newAmountCRInput);
    entries.append(newEntry);
    entryNumber++;
  });

  // Create the Submit input button
  var submitInput = $("<input>", { type: "submit", value: "Submit" });


  //Append each button to buttons
  buttons.append(addButton, submitInput);

  // Append all the input fields and labels to the form
  form.append(entries, notes, buttons);

  // Append the form to the desired DOM element
  $("#entry").append(form);



  //Add row event button function
  $("#journalForm").submit(function (event) {

  })

  // Submit form event handler
  $("#journalForm").submit(function (event) {
    event.preventDefault();
    var account = $("#account").val();
    let amountDR = $("#amountDR").val();
    let amountCR = $("#amountCR").val();
    var note = $("#note").val();

    if (account && amountDR) {

      addJournalEntry(account, amountDR, amountCR, note);
      $("#account").val("");
      $("#amountDR").val("");
      $("#note").val("");

    } else if (account && amountCR) {
      addJournalEntry(account, amountDR, amountCR, note);
      $("#account").val("");
      $("#amountCR").val("");
      $("#note").val("");


    }
  });
});

// Function to add a new journal entry to the table
function addJournalEntry(account, amountDR, amountCR, note) {
  var timestamp = new Date().toLocaleString();
  var transactionNumber = generateTransactionNumber();
  var userName = "User1";

  var row =
    "<tr><td>" +
    userName +
    "</td><td>" +
    timestamp +
    "</td><td>" +
    transactionNumber +
    "</td><td>" +
    account +
    "</td><td>" +
    amountDR +
    "</td><td>" +
    amountCR +
    "</td><td>" +
    note +
    "</td><td></td></tr>";
  $("#journalEntriesTableBody").prepend(row);
  saveJournalEntries();
}

// Function to load journal entries from localStorage
function loadJournalEntries() {
  var journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
  if (journalEntries) {
    $("#journalEntriesTableBody").html(journalEntries);
  }
}

// Function to save journal entries to localStorage
function saveJournalEntries() {
  var journalEntries = $("#journalEntriesTableBody").html();
  localStorage.setItem("journalEntries", JSON.stringify(journalEntries));
}

// Function to generate a random transaction number
function generateTransactionNumber() {
  var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var transactionNumber = "";
  for (var i = 0; i < 8; i++) {
    transactionNumber += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return transactionNumber;
}
// Function to delete journal entries from localStorage
function deleteJournalEntries() {
  localStorage.removeItem("journalEntries");
}

/*
var journalEntriesArray = []; // Array to store journal entries

// Function to add a new journal entry to the table
function addJournalEntry(account, amountDR, amountCR, note) {
  var timestamp = new Date().toLocaleString();
  var transactionNumber = generateTransactionNumber();
  var userName = "User1";
  
  var entry = {
    userName: userName,
    timestamp: timestamp,
    transactionNumber: transactionNumber,
    account: account,
    amountDR: amountDR,
    amountCR: amountCR,
    note: note
  };

  // Append the row to the table
  var row =
    "<tr><td>" +
    userName +
    "</td><td>" +
    timestamp +
    "</td><td>" +
    transactionNumber +
    "</td><td>" +
    account +
    "</td><td>" +
    amountDR +
    "</td><td>" +
    amountCR +
    "</td><td>" +
    note +
    "</td><td></td></tr>";
  $("#journalEntriesTableBody").prepend(row);

  // Push the entry object into the journalEntriesArray
  journalEntriesArray.push(entry);

  // Save the journal entries array to localStorage
  saveJournalEntries();
}

// Function to save journal entries to localStorage as an array of objects
function saveJournalEntries() {
  localStorage.setItem("journalEntries", JSON.stringify(journalEntriesArray));
}

// Function to load journal entries from localStorage
function loadJournalEntries() {
  var journalEntries = JSON.parse(localStorage.getItem("journalEntries"));
  if (journalEntries) {
    // Clear the table before loading entries
    $("#journalEntriesTableBody").html("");
    // Loop through the entries array and append rows to the table
    $.each(journalEntries, function(index, entry) {
      var row =
        "<tr><td>" +
        entry.userName +
        "</td><td>" +
        entry.timestamp +
        "</td><td>" +
        entry.transactionNumber +
        "</td><td>" +
        entry.account +
        "</td><td>" +
        entry.amountDR +
        "</td><td>" +
        entry.amountCR +
        "</td><td>" +
        entry.note +
        "</td><td></td></tr>";
      $("#journalEntriesTableBody").append(row);
    });
  }
}
*/