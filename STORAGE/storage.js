let theme = localStorage.getItem("theme");

document.body.className = theme;



const button = document.createElement("button");
button.textContent = "LUNA";
button.addEventListener("click", () => {
    if (theme === "light"){
        theme = "dark";
        button.textContent = "SOL";
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    } else {
        theme = "light";
        button.textContent = "LUNA";
        document.body.className = theme;
        localStorage.setItem("theme", theme);
    }
});

document.body.append(button);