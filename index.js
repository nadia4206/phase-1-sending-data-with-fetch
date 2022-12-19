const userInfo = {
    name: "",
    email: ""
}

function submitData() {
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userInfo)
    })
};
