var url = "https://api.github.com/users/bworth94/repos";

$(document).ready(function(){
    
    getGitRepos(url,parseRepos);

    $('#git').hover(function(){
        $('#git-img').css("width",35);
    },function(){
        $('#git-img').css("width",25);
    });

    $('#linkedin').hover(function(){
        $('#linkedin-img').css("width",35);
    },function(){
        $('#linkedin-img').css("width",25);
    });
});

function getGitRepos(url, callback) {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
       callback(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
  }
  
  function parseRepos(xhttp) {
    var repos = JSON.parse(xhttp.responseText);
    var ul = document.getElementById("my-repos");

    for(var i = 0; i < repos.length; i++){
        var listItem = document.createElement("li"); 
        var anchorTag = document.createElement("a");
        anchorTag.innerHTML = repos[i].name;
        anchorTag.setAttribute("href", repos[i].html_url);
        listItem.appendChild(anchorTag);
        ul.appendChild(listItem);
    }
    console.log(repos);
  }

  
