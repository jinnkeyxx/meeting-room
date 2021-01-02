class video {
    constructor() {
        this.roomId = ""
        this.render()
    }
    render() {
        this.renderHTML(this.renderButton())

    }
    renderHTML(children = '') {
        const html = `<div class="container">${children}</div>`
        document.getElementById('root').innerHTML = html
    }
    async createRoom() {
        const room = await api.createRoom()
        const roomToken = await api.getRoomToken()
        console.log(roomToken);
    }
    renderButton() {
        let html
        if (!this.roomId) html = `<button id="creat__room"> create room </button>`
        return html
    }
}
const app = new video()