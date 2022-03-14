function limitResponse() {
    var limit = 2;
    var form = FormApp.openById("1ca-YHU5KSgwf6PpN8C4AfEEh5Ar7vYzVXFFvXynGUTQ");
    var responses = form.getResponses();
    var len = responses.length;
    Logger.log(len);
    if(len>limit){
      form.setConfirmationMessage("przekroczono limit");
    }
  }