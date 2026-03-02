function calculateFlames() {

    let name1 = document.getElementById("name1").value.toLowerCase().replace(/\s/g, "");
    let name2 = document.getElementById("name2").value.toLowerCase().replace(/\s/g, "");

    for (let i = 0; i < name1.length; i++) {
        let letter = name1[i];
        if (name2.includes(letter)) {
            name2 = name2.replace(letter, "");
            name1 = name1.replace(letter, "");
            i--;
        }
    }

    let count = name1.length + name2.length;
    let flames = ["F", "L", "A", "M", "E", "S"];

    while (flames.length > 1) {
        let index = (count % flames.length) - 1;

        if (index >= 0) {
            flames = flames.slice(index + 1).concat(flames.slice(0, index));
        } else {
            flames.pop();
        }
    }

    let resultMap = {
        "F": "Friends 🤝",
        "L": "Love ❤️",
        "A": "Affection 😊",
        "M": "Marriage 💍",
        "E": "Enemies 😡",
        "S": "Siblings 👨‍👩‍👧"
    };

    document.getElementById("result").innerText = resultMap[flames[0]];
}
