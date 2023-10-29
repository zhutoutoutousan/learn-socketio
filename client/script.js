const joinRoomButton = document.getElementById("room-button")
const roomInput = document.getElementById("room-input")

const messageInput = document.getElementById("message-input")
const form = document.getElementById("form")

form.addEventListener("submit", (e) => {
    e.preventDefault()
    const message = messageInput.value
    // socket.emit("message", message)
    messageInput.value = ""
})

joinRoomButton.addEventListener("click", () => {
    const room = roomInput.value
    socket.emit("join-room", room)
})

function displayMessage(message) {
    const div = document.createElement("div")
    div.innerText = message
    document.getElementById("message-container").append(div)
}