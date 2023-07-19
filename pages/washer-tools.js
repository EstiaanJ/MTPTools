function addWasher() {
    let washerContainer = document.getElementById("washer-container");
    let newWasher = document.createElement("div");
    newWasher.innerHTML = `
                <label for="washer">Washer:</label>
                <select name="washer" id="washer">
                    <option value="flat">Flat</option>
                    <option value="construction">Construction</option>
                    <option value="none">No Washer</option>
                </select>
            `;
    washerContainer.appendChild(newWasher);
}

function addMaterial() {
    let materialContainer = document.getElementById("material-container");
    let newMaterial = document.createElement("div");
    newMaterial.innerHTML = `
                <label for="material-thickness">Material Thickness:</label>
                <input type="number" step="0.01" name="material-thickness" id="material-thickness" required>
            `;
    materialContainer.appendChild(newMaterial);
}

function calculateBoltLength() {
    const springWasherThickness = 5;
    const nutSizeToThickness = {
        "M3": 3,
        "M4": 4,
        "M5": 5,
        "M6": 6,
        "M8": 8,
        "M10": 10,
        "M12": 12,
        "M14": 14,
        "M16": 16,
        "M18": 18,
        "M20": 20,
        "M24": 24,
    };

    const boltSize = document.getElementById('bolt-size').value;
    console.log("Bolt Size: " + boltSize);
    const nutThickness = nutSizeToThickness[boltSize];
    console.log("Nut Thickness: " + nutThickness);

    if (document.getElementById('spring-washer').value === 'yes') {
        var springWasher = springWasherThickness;
    } else {
        var springWasher = 0;
    }

    console.log("Spring Washer: " + springWasher);

    let materialThickness = 0;
    const materialInputs = document.querySelectorAll('#material-container input');
    materialInputs.forEach(input => {
        materialThickness += parseFloat(input.value);
    });

    console.log("Material Thickness: " + materialThickness);

    //If no washer, thickens 0, if flat washer, thickness 2.5, if Structural washer, thickness 3
    let washerThickness = 0;

    //for each washer: If flat add 2.5, if Structural add 3, if none add 0
    const washerInputs = document.querySelectorAll('#washer-container select');
    washerInputs.forEach(input => {
        if (input.value === 'Flat') {
            washerThickness += 2.5;
        } else if (input.value === 'Structural') {
            washerThickness += 3;
        } else {
            washerThickness += 0;
        }
    });


    console.log("Washer Thickness: " + washerThickness);

    const totalLength = materialThickness + springWasher + nutThickness + washerThickness;
    document.getElementById('total-length').innerText = `Total Length: ${totalLength} mm`;
    //Excel for nearest metric =CEILING(F2/2,1)*2
    const nearestMetric = Math.ceil(totalLength / 2) * 2;
    document.getElementById('nearest').innerText = `Nearest Metric Bolt: ${boltSize}X${nearestMetric}`;
}