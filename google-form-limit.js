function onSubmit() {
  var limit = 8;
  var form = FormApp.openById("1Z52A2swfYhPujlQSlo-ReoRAOOr9rSv789JwNOP0EFI");
  var responses = form.getResponses();
  var len = responses.length;
  Logger.log(len);
  if(len>limit){
    form.setConfirmationMessage("Dostał przekroczony limit miejsc, zstał Pan/Pani wpisany na listę rezerwową.");
  }
  else
  {
    form.setConfirmationMessage("Dziekuje za wypełnienie zgłoszenia na kurs. Jest już zajętych miejsc "+len.toString() +"z mozliwych "+limit);
  }
}