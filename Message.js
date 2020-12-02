class Message {

    constructor(text) {
        this.text = text
    }

    render() {

        const container = document.createElement('div')

        container.style.display = 'flex'
        container.style.justifyContent = 'space-between'
        container.style.padding = '4px'
        container.style.marginBottom = '4px'
        container.style.borderRadius = '4px'
        container.style.fontFamily = 'sans-serif'
        container.style.fontSize = '14px'

        container.style.backgroundColor = 'rgba(0, 0, 0, 0.025)'

        container.innerText = this.text

        return container

    }

}