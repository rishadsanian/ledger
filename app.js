$(document).ready(function () {
  // Load journal entries from localStorage on page load
  // deleteJournalEntries() //Clears Journal Entries first
  loadJournalEntries();

  // Submit form event handler
  $("#journalForm").submit(function (event) {
    event.preventDefault();
    var account = $("#account").val();
    let amountDR = $("#amountDR").val();
    let amountCR = $("#amountCR").val();
    var note = $("#note").val();

    if (account && amountDR) {
      amountCR = 0;
      addJournalEntry(account, amountDR, amountCR, note);
      $("#account").val("");
      $("#amountDR").val("");
      $("#note").val("");
      
    } else if (account && amountCR) {
      amountDR = 0;
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
  $("#journalEntriesTableBody").append(row);
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
