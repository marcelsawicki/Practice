var connection = new signalR.HubConnectionBuilder().configureLogging(signalR.LogLevel.Debug).withUrl("/dice").build();
connection.on("onWelcome", onWelcome);
connection.on("onRolled", onRolled);
connection.on("onJoined", onJoined);
connection.on("onLeft", onLeft);
connection.on("onAlert", onAlert);

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

async function onLoad() {
    view_login.classList.remove('active');
    view_room.classList.remove('active');
    let username = getCookie('dice_username');
    if (username == '') {
        view_login.classList.add('active');
        return;
    }
    view_room.classList.add('active');
    onJoined(username, true);
    connection.start();
}

function onWelcome(users, rolls) {
    users.forEach(onJoined);
    rolls.forEach(onRolled);
}

function onJoined(user, me = false) {
    let userElement = document.getElementById(`user_${user}`)
    if (!userElement) {
        userElement = document.createElement('div');
        userElement.id = `user_${user}`;
        userElement.innerText = user;
        if (me) {
            userElement.classList.add('me');
        }
        users.appendChild(userElement);
    }
}

function onLeft(user) {
    document.getElementById(`user_${user}`)?.remove();
}

function onRolled({ username, time, diceSize, value }) {
    let messageElement = document.createElement('div');
    messageElement.innerHTML = `<span class="date">${new Date(time).toLocaleTimeString()}</span> <b></b> rolled d${diceSize} <b class="value">${value}</b>`;
    messageElement.querySelector('b').innerText = username;
    content.appendChild(messageElement);
    messageElement.scrollIntoView({ behavior: "smooth", block: "end" });
}

function onAlert(message) {
    alert(message);
}

function login() {
    if (username.value != '') {
        setCookie('dice_username', username.value, 1);
        onLoad();
    }
}

function logout() {
    setCookie('dice_username', '', 1);
    window.location.reload();
}

function roll() {
    connection.invoke("Roll", parseInt(dice_size.value));
}
