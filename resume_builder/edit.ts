const makeEditable = (): void => {
    const editableFields = document.querySelectorAll<HTMLLIElement>('.editable');
    const button = document.getElementById('editButton');

    if (button) {
       
        console.log('Current button text:', button.textContent);

        if (button.textContent?.trim() === 'Edit') {
       
            editableFields.forEach((editable) => {
                editable.setAttribute('contenteditable', 'true');
                editable.classList.add('bg-yellow-100');
            });
            button.textContent = 'Save';
            console.log('Switched to Save mode');
        } else {
            // Save changes
            editableFields.forEach((editable) => {
                editable.setAttribute('contenteditable', 'false');
                editable.classList.remove('bg-yellow-100');
            });
            button.textContent = 'Edit';
            console.log('Switched to Edit mode');
        }
    } else {
        console.error('Button with id "editSaveButton" not found');
    }
};

