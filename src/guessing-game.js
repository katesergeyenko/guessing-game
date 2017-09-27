class GuessingGame {

	constructor() {
		this.left;
		this.right;
		this.guessValue = 0;

	}


	setRange(min, max) {

  
		this.left = min;
		this.right = max;
	}


	guess() {


		this.guessValue = Math.ceil((this.left + this.right)/2);
		return this.guessValue;
	}


	lower() {

   
 		this.right = this.guessValue;
	}


	greater() {

 
   		this.left = this.guessValue;
	}

}


module.exports = GuessingGame;
