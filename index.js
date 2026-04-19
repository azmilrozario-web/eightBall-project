function getAnswer() {
    const ball = document.getElementById('eight-ball');
    const display = document.getElementById('answer-text');

    // Start shake animation
    ball.classList.add('shake');
    display.innerText = ""; // Clear old answer

    // Wait 500ms (match CSS animation time) then show answer
    setTimeout(() => {
        ball.classList.remove('shake');

        let randomNumber = Math.floor(Math.random() * 8);
        let eightBall = "";

        // ... insert your switch(randomNumber) logic here ...
        switch (randomNumber) {
            case 0:
                eightBall = 'It is certain';
                break;
            case 1:
                eightBall = 'It is decidedly so';
                break;
            case 2:
                eightBall = 'Reply hazy try again';
                break; 
            case 3:
                eightBall = 'Cannot predict now';
                break;
            case 4:
                eightBall = 'Do not count on it';
                break;
            case 5:
                eightBall = 'My sources say no';
                break;
            case 6:
                eightBall = 'Outlook not so good';
                break;
            case 7:
                eightBall = 'Signs point to yes';
                break;
            default:
                console.log("")


        }

        display.innerText = eightBall;
    }, 500);
}
