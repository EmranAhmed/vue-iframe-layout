const store = {

    state : {
        content : "Global Contents"
    },

    setContent(value) {
        this.state.content = value
    },

    getContent() {
        return this.state.content
    }
}

export default store