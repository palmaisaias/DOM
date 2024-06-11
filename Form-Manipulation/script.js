
// diving into the DOM
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('userForm');

    // when the form is submitted this kicks off. The preventDefault keeps the default submission behavior of the form which is to reload
    // after submission. setting this method keeps it from reloading and lets us handle the submission on JS 
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        //pulls the values of the form entries in the html side by 'id'
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;

        // so this validates the form BUT i did notice that the form was already creating alerts before I added this
        // Possibly incorporated into the browser? not sure but either way, this is here to satisfy the assignnet requirement
        if (name === '' || email === '' || message === '') {
            alert('Please fill out all fields :]');
            return; // Stop the form submission if validation fails
        }

        // creates a user object with the information from the form
        const user = {
            name: name,
            email: email,
            message: message
        };

        // shows the created 'user' in the console
        console.log(user);

        // clears the fields in the form. i read this was optional but definitely cleans it up for presentation purposes
        form.reset();
    });
});
