function Message() {
const name = 'Lior';
if (name) {
    return <h1>Hello {name}</h1>;
}
return <h1>Hello World</h1>;
}

export default Message;