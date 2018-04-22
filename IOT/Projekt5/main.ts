import {MemberEntity} from "./model";
import {gitHubAPI} from "./api";

gitHubAPI.getListOfMembers()
  .then(
  (members: Array<MemberEntity>) => {
      displayMembers(members);
    }
  )
  .catch((err) => {
    document.write("Server error");
  });
  
function displayMembers(members:Array<MemberEntity>)
{
  document.write("<span>Zadanie 1: pobrac dane (JSON), wyswietlic i renderowac za pomoca Mustache </span>");
  document.write("<p><b>Got this data from JSON:</b></p>")

  members.forEach((member) => {
    document.write(`<p>${member.userId}</p>`);
    document.write(`<p>${member.id}</p>`);
    document.write(`<p>${member.title}</p>`);
    document.write(`<p>${member.body}</p>`);
  });
}
