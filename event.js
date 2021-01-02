window.onload = () => {
    const $ = document.querySelector.bind(document)
    $('#creat__room').onclick = () => {
        app.createRoom()
    }
}