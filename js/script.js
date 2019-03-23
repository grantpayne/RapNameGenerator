

/** 
 *  RAP NAME GENERATOR
 *  The user will insert their first name and on click receive one of several
 *  possible outputs (i.e. Jill).
 *
 *       "Inspectah Jill"
 *       "J.I.L.L. the Genius"
 *       "Chief Jill the Disciple"
 *       "Jill the Disciple"
 *       "Inspectah J"
 **/

function Generator() {
    /* Name Arrays: Customize names to change possible output */
    this.last_names = ['the Chef', 'Digital', 'Wise', 'Knight', 'Wrecka', 'the Genius', 'the Zoo Keeper', 'the Monk', 'the Scientist', 'the Disciple', 'the Darkman', 'Pellegrino', 'the Ill Figure', 'Rocks The World', 'the Baptist',];
    this.first_names = ['Inspectah', 'Masta', 'Poppa', 'Five Foot', 'Ghostface', 'Old Dirty'];
}

Generator.prototype.outputRapName = function(inputName) {
    let rapName = inputName.toString();

    /*  Generate random:
        
        -Value to determine if and how to manipulate name.
        ex.) 0 => do nothing, 1 => create acronym, 2 => use first letter only
       
        -Booleans to determine which names to apply

        -Index in both arrays to determine which name to apply

    */
    let howToManipulateName = Math.floor(Math.random() * 3);
    let applyFirstName = Math.random() >= 0.5;
    let applyLastName = Math.random() >= 0.5;
    let lastNameRandomIndex = Math.floor(Math.random() * this.last_names.length);
    let firstNameRandomIndex = Math.floor(Math.random() * this.first_names.length);
    console.log(firstNameRandomIndex);

    if (howToManipulateName === 1) {
        rapName = rapName.toUpperCase().split('').join('.') + '.';
    }
    else if (howToManipulateName === 2) {
        rapName = rapName[0].toUpperCase();
    };
    
    if (applyFirstName) {
        rapName = this.first_names[firstNameRandomIndex] + ' ' + rapName;
    };
    
    if (applyLastName) {
        rapName = rapName + ' ' + this.last_names[lastNameRandomIndex];
    };

    //We want to apply at least one of the rap names.  Apply both names if random returns double false.
    if (!applyFirstName && !applyLastName) {
        rapName = this.first_names[firstNameRandomIndex] + ' ' + rapName;
        rapName = rapName + ' ' + this.last_names[lastNameRandomIndex];
    }
    
    return rapName;
}


$(document).ready(function () {
    var engine = new Generator;
    const playButton = document.getElementById('enter');
    const inputForm = document.getElementById('user-input');
    const noNameMessage = document.getElementById('no-name-alert');
    const rapNameDisplay = document.getElementById('rap-name-display');

    playButton.addEventListener('click', () => {
        if (inputForm.value === '') {
            noNameMessage.classList.remove('hidden')
            rapNameDisplay.classList.add('hidden');
        }
        else {
            rapNameDisplay.innerHTML = engine.outputRapName(inputForm.value);
            noNameMessage.classList.add('hidden');
            rapNameDisplay.classList.remove('hidden');
        };
    });

});