console.log("page loaded...");


function editName() {
    let profileName = document.getElementById("profileName");
    console.log(profileName);
    profileName.innerHTML = "Lena Smith";
}

function aceptar(element) {
    let notificationsNumber = document.getElementById("notificationsNumber");
    let notifications = parseInt(notificationsNumber.innerHTML);
    let connectionsNumber = document.getElementById("connectionsNumber");
    let connections = parseInt(connectionsNumber.innerHTML);

    console.log(notificationsNumber.innerHTML, typeof (notifications));
    console.log(element.parentNode.parentNode);
    element.parentNode.parentNode.remove();
    notificationsNumber.innerHTML = notifications - 1;
    connectionsNumber.innerHTML = connections + 1;

    console.log(element.parentNode.parentNode.firstElementChild.innerHTML);
    const info = element.parentNode.parentNode.firstElementChild.innerHTML;
    const newConnection = `
        <li class="card-list-item start">
            ${info}
        </li>`
    console.log(newConnection);
    let conectionList = document.getElementById("conectionList");
    conectionList.innerHTML += newConnection;


}

function rechazar(element) {
    let notificationsNumber = document.getElementById("notificationsNumber");
    let notifications = parseInt(notificationsNumber.innerHTML);

    console.log(notificationsNumber.innerHTML, typeof (notifications));
    console.log(element.parentNode.parentNode);
    element.parentNode.parentNode.remove();
    notificationsNumber.innerHTML = notifications - 1;
}