let stupidButton = {
	init: function() {
		this.attachEvents();
	},

	attachEvents: function() {
		$('#runaway-container').on('hover', this.flyAway);
		$('#runaway').on('click', this.showWin);
		$('#runaway-container').on('click', this.showWinno);
	},

	flyAway: function(e) {
		mLeft = Math.random() * 300;
		mTop = Math.random() * 300;

		$('#runaway-container').css('margin-left', mLeft);
		$('#runaway-container').css('margin-top', mTop);
		$('#runaway-container').css('margin-bottom', mBottom);
		$('#runaway-container').css('margin-right', mright);
	},

	showWin: function(e) {
		alert('YeY Thank U Love U');
	},
	showWinno: function(e){
		alert('Rude');
	}
	
};

stupidButton.init();
let counterDisplayElem = document.querySelector('.counter-display');
let counterMinusElem = document.querySelector('#runaway-container');
let counterPlusElem = document.querySelector('#runaway');

let count = 0;

updateDisplay();

counterPlusElem.addEventListener("click",()=>{
    count++;
    updateDisplay();
}) ;

counterMinusElem.addEventListener("click",()=>{
    count--;
    updateDisplay();
});

function updateDisplay(){
    counterDisplayElem.innerHTML = count;
};


    function sendEmail(e) {
        Email.send({
            SecureToken: "",
            To: "dan1.designas@gmail.com",
            From: "em1696.idk",
            Subject: "Subject...",
            Body: document.getElementById('#runaway').value
        }).then( 
            message => alert("mail sent successfully")
        );
    }
