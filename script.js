import fetch from "node-fetch";
fetch("https://dog.ceo/api/breeds/image/random")
    .then((res) => res.json())
    .then((data) => {
            console.log(data.message)
        let image=document.createElement("img")
        image.src="https://images.dog.ceo/breeds/shihtzu/n02086240_2526.jpg"
        document.body.appendChild(image)

    })