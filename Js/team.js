var team=JSON.parse(teamMembers);
var text = "";
        for (var i = 0; i < team.length; i++) {
            document.getElementById('demo').innerHTML += text + "<div class='member wow bounceInDown'><h1 class='team'>"+team[i].name+"</h1><h3 class='team'>"+team[i].email+"</h3><img class='member-img' src='img/"+team[i].image+"'></div>";         
    }  