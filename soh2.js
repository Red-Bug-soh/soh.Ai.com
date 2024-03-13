const api = "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";
const inp = document.getElementById('inp');
const imag = document.querySelector('.imag');

const getImage = async () => {
    const methods = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${api}`
        },
        body: JSON.stringify({
            "prompt": inp.value,
            "n": 3,
            "size": "256x256"
        })
    };

    const res = await fetch("https://api.openai.com/v1/images/generations", methods);
    const data = await res.json();
    const listImages = data.data;
    listImages.map(photo => {
        const container = document.createElement("div");
        imag.append(container);
        const img = document.createElement("img");
        container.append(img);
        img.src = photo.url;
    });
};
