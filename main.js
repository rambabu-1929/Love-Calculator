function loveCalc() {
    var fname = document.getElementById('name').value;
    var lastName = document.getElementById('lname').value;
    if (fname == '') {
        alert('Enter valid name')
    } else if (fname.length <=2) {
        alert('Name must be atleast 4 letters')
    } else if (!isNaN(fname)) {
        alert('Numbers are not allowed')
    }

    else if (lastName == '') {
        alert('Enter valid name') 
    } else if (lastName.length <= 2) {
        alert('Name must be atleast 4 letters')
    } else if (!isNaN(lastName)) {
        alert('Numbers are not allowed')
    } 

    else{
        let loveData = Math.random() * 101;
        loveData = Math.round(loveData);
        document.getElementById('your-result').value = loveData + '%';

        if (loveData <=20) {
            document.getElementById('demo').innerHTML = 'OOPS !';
        } else if (loveData >20 && loveData <=50) {
            document.getElementById('demo').innerHTML = 'Congrats !';
        } else if (loveData > 50 & loveData<=80) {
            document.getElementById('demo').innerHTML = 'WOW !';
        } else if (loveData>80) {
            document.getElementById('demo').innerHTML = 'God Bless Your Relationship';
        }
    } 

    
}


