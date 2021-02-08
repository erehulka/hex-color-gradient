/**
 * Linear gradient constructor, by given color, degrees and percentage of color darkness change
 */
export class Gradient {

    /**
     * 
     * @param   {String}    color       Color code (must be in HEX!)
     * @param   {Number}    degrees     
     * @param   {Number}    percent 
     */
	constructor(color, degrees, percent) {
		this.gradient = '';
		this.makeGradient(color, degrees, percent);
	}


    /**
     * Makes linear gradient, based on the percentage of color change and direction in degrees
     * 
     * @param   {String}    color       Color code (must be in HEX!)
     * @param   {Number}    degrees 
     * @param   {Number}    percent 
     */
	makeGradient(color, degrees, percent) {
		var lighter = this.lightenColor(color, percent);
		var darker = this.lightenColor(color, percent * -1);
		this.gradient = `${degrees}deg, ${lighter}, ${darker}`;
	}

    /**
     * Lightens color by given percent amount
     * 
     * @param   {String}    color       Color code (must be in HEX!)
     * @param   {Number}    percent     Percentage of how much given color should be lightened (if negative, then darken)
     * 
     * @returns {String}    Resulting HEX color code
     */
	ligtenColor(color, percent) {
		var R = parseInt(color.substring(1,3), 16);
		var G = parseInt(color.substring(3,5), 16);
		var B = parseInt(color.substring(5,7), 16);

		R = parseInt(R * (100 + percent) / 100);
		G = parseInt(G * (100 + percent) / 100);
		B = parseInt(B * (100 + percent) / 100);

		R = (R < 255) ? R : 255;
		G = (G < 255) ? G : 255;
		B = (B < 255) ? B : 255;

		var RR = String("0" + R.toString(16)).slice(-2);
		var GG = String("0" + G.toString(16)).slice(-2);
		var BB = String("0" + B.toString(16)).slice(-2);

		return "#" + RR + GG + BB;
	}

    /**
     * Returns constructed gradient
     * @returns {String}    Constructed gradient in pattern 'degrees, color1, color2'
     */
	getGradient()
	{
		return this.gradient;
	}

    /**
     * Sets linear gradient on given jQuery object
     * @param   {Object}    item    Jquery object, on which we want to set the gradient
     */
	setGradient(item) {
		item.css({
			background: "linear-gradient(" + this.gradient + ")",
		});
	}

}