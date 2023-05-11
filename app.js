$(document).ready(function () {
  //deleteJournalEntries() //Clears Journal Entries first

  // Load journal entries from localStorage on page load
  loadJournalEntries();

  //create form jquery function

  // Create the form element
  var form = $("<form>", { id: "journalForm" });
  var entryNumber = 0;
  var lengthEntry = 2;
  var entries = $("<div>").addClass("entries").css({ display: "inline-block" });

  for (entryNumber = 0; entryNumber < lengthEntry; entryNumber++) {
    // Create the Account input field
    var accountLabel = $("<label>", {
      for: "account" + (entryNumber + 1),
      html: "&nbsp Account: &nbsp",
    });
    var accountInput = $("<input>", {
      type: "text",
      id: "account" + (entryNumber + 1),
    });

    // Create the Debit Amount input field
    var amountDRLabel = $("<label>", {
      for: "amountDR" + (entryNumber + 1),
      html: "&nbsp Debit Amount: &nbsp",
    });
    var amountDRInput = $("<input>", {
      type: "number",
      id: "amountDR" + (entryNumber + 1),
    });

    // Create the Credit Amount input field
    var amountCRLabel = $("<label>", {
      for: "amountCR" + (entryNumber + 1),
      html: "&nbsp Credit Amount: &nbsp",
    });
    var amountCRInput = $("<input>", {
      type: "number",
      id: "amountCR" + (entryNumber + 1),
    });

    // Append input fields and labels to each entry
    var entry = $("<div>").addClass("entry");
    entry.append(
      accountLabel,
      accountInput,
      amountDRLabel,
      amountDRInput,
      amountCRLabel,
      amountCRInput
    );

    // Append each entry to entries div
    entries.append(entry);
  }

  // Create the Note input field
  var notes = $("<div>").addClass("notes").css({ display: "block" });
  var noteLabel = $("<label>", { for: "note", html: "Note: &nbsp" });
  var noteInput = $("<input>", { type: "text", id: "note" });
  notes.append(noteLabel, noteInput);

  //Create Buttons
  var buttons = $("<div>").addClass("buttons"); //.css({ display: "block" });

  //Add row  button

  // Create a button to add another instance of input fields
  var addButton = $("<button>")
    .addClass("addRow")
    .text("Add Row")
    .click(function (event) {
      event.preventDefault();
      var newEntry = $("<div>").addClass("entry");
      var newAccountLabel = $("<label>", {
        for: "account" + (lengthEntry + 1),
        html: "&nbsp Account: &nbsp",
      });
      var newAccountInput = $("<input>", {
        type: "text",
        id: "account" + (lengthEntry + 1),
      });
      var newAmountDRLabel = $("<label>", {
        for: "amountDR" + (lengthEntry + 1),
        html: "&nbsp Debit Amount: &nbsp",
      });
      var newAmountDRInput = $("<input>", {
        type: "number",
        id: "amountDR" + (lengthEntry + 1),
      });
      var newAmountCRLabel = $("<label>", {
        for: "amountCR" + (lengthEntry + 1),
        html: "&nbsp Credit Amount: &nbsp",
      });
      var newAmountCRInput = $("<input>", {
        type: "number",
        id: "amountCR" + (lengthEntry + 1),
      });
      newEntry.append(
        newAccountLabel,
        newAccountInput,
        newAmountDRLabel,
        newAmountDRInput,
        newAmountCRLabel,
        newAmountCRInput
      );
      entries.append(newEntry);
      lengthEntry++;
    });

  // Create the Submit input button
  var submitInput = $("<input>", {
    class: "submit",
    type: "submit",
    value: "Submit",
  });

  //Append each button to buttons
  buttons.append(addButton, submitInput);

  // Append all the input fields and labels to the form
  form.append(entries, notes, buttons);

  // Append the form to the desired DOM element
  $("#entry").append(form);

  // Submit form event handler
  $("#journalForm").submit(function (event) {
    event.preventDefault();

    // Get the length of entries
    var entryLength = $(".entry").length;

    // Loop through each entry
    for (var i = 0; i < entryLength; i++) {
      var account = $("#account" + (i + 1)).val();
      var amountDR = $("#amountDR" + (i + 1)).val();
      var amountCR = $("#amountCR" + (i + 1)).val();
      var note = $("#note").val();


      //TODO - generate one transaction number instead of individual per submit.


      if (account && amountDR) {
        addJournalEntry(account, amountDR, amountCR, note);
        $("#account" + (i + 1)).val("");
        $("#amountDR" + (i + 1)).val("");
      } else if (account && amountCR) {
        addJournalEntry(account, amountDR, amountCR, note);
        $("#account" + (i + 1)).val("");
        $("#amountCR" + (i + 1)).val("");
      }
    }
    $("#note").val("");
    location.reload(true);
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
    "</td></tr>";
  $("#journalEntriesTableBody").prepend(row);
  saveJournalEntries();
}

form.appendTo($('h3:contains("Journal Entry")').first().parent());
accountInput.appendTo(form);
addButton.appendTo(form);

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

//TODO gernerate unique transaction number by validating against general journal
// Function to generate a random transaction number
function generateTransactionNumber() {
  var characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  var transactionNumber = "";
  for (var i = 0; i < 8; i++) {
    transactionNumber += characters.charAt(
      Math.floor(Math.random() * characters.length)
    );
  }
  return transactionNumber;
}
// Function to delete journal entries from localStorage
function deleteJournalEntries() {
  localStorage.removeItem("journalEntries");
}
