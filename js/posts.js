const BASE_URL = "https://dummyjson.com";
const wrapperEl = document.querySelector(".wrapper")
const btnEl = document.querySelector(".btn")
const loadingEl = document.querySelector(".loading")

let offset = 0
const limit = 4

btnEl.addEventListener("click", () => {
    offset++
    manageLoading("flex")
    fetchData("posts", createRecipes, `?limit=${limit}&skip=${limit * offset}`, manageLoading);
})

function createRecipes(data) {
    const fragment = document.createDocumentFragment()
    data.posts.forEach((item) => {
        const cardEl = document.createElement("div")
        cardEl.classList.add("card")
        cardEl.innerHTML = `
            <h3>Title: ${item.title}</h3>
            <p>Body: ${item.body}</p>
            <p>Reactions: ${item.reactions}</p>
            <p>Views: ${item.views}</p>
            <p>UserId: ${item.userId}</p>
        `
        fragment.appendChild(cardEl)
    })
    wrapperEl.appendChild(fragment)

}

function manageLoading(type) {
    loadingEl.style.display = type
}

function fetchData(endpoint, cl, query = "", loading) {
    fetch(`${BASE_URL}/${endpoint}${query}`, {
        method: "GET"
    })
        .then(res => {
            if (!res.ok) {
                throw new Error("Something went wrong")
            }
            return res.json()
        })
        .then(data => {
            cl(data);

        })
        .catch(err => {
            console.error(err);
        })
        .finally(() => {
            loading("none")
        })
}
window.onload = () => {
    fetchData("posts", createRecipes, `?limit=${limit}&skip=0`, manageLoading);
}