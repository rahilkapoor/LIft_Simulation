// Queue class
class Queue
{
	// Array is used to implement a Queue
	constructor()
	{
		this.items = [];
	}
				
	// Functions to be implemented
	// enqueue(item)
    // enqueue function
    enqueue(element)
    {	
        // adding element to the queue
        this.items.push(element);
    }

	// dequeue()
    // dequeue function
    dequeue()
    {
        // removing element from the queue
        // returns underflow when called
        // on empty queue
        if(this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }

	// front()
    // front function
    front()
    {
        // returns the Front element of
        // the queue without removing it.
        if(this.isEmpty())
            return "No elements in Queue";
        return this.items[0];
    }

	// isEmpty()
    isEmpty()
    {
        // return true if the queue is empty.
        return this.items.length === 0;
    }
	// printQueue()
    // printQueue function
    printQueue()
    {
        var str = "";
        for(var i = 0; i < this.items.length; i++)
            str += this.items[i] +" ";
        return str;
    }

}

var reqs = new Queue();
			
// Testing dequeue and pop on an empty queue
// returns Underflow

// reqs.enqueue(1000);
// reqs.enqueue(2000);
// reqs.enqueue(1500);
// reqs.enqueue(2500);
// reqs.enqueue(500);
// reqs.enqueue(1200);

let sum = 0;
const Testing = (floor) => {
    // console.log(floor);
    // var reqs = new Queue();
    reqs.enqueue(floor);
    // console.log(reqs.front());


    // const lift = document.getElementById("lift");
    // const curpos = parseInt(getComputedStyle(lift).bottom);
    // const nextpos = 120 * (floor - 1) + (floor - 1) * 10;
    // const sec = Math.abs(curpos - nextpos) / 120;
    // const timer = (1 * sec).toString();

    // lift.style.bottom = nextpos + "px";
    // lift.style.transition = "bottom " + timer + "s ease-in-out";


    while(reqs.isEmpty() === false){
        let req = reqs.front();
        // sum += req;

        const lift = document.getElementById("lift");
        const curpos = parseInt(getComputedStyle(lift).bottom);
        const nextpos = 120 * (req - 1) + (req - 1) * 10;
        const sec = Math.abs(curpos - nextpos) / 120;
        const timer = (1 * sec).toString();

        sum += sec;
        console.log(sum);

        // if(req === 2500) reqs.enqueue(400);
        setTimeout(function (){
            lift.style.bottom = nextpos + "px";
            lift.style.transition = "bottom " + timer + "s ease-in-out";
            // reqs.dequeue();
        },sum*300);
        
        reqs.dequeue();
        // sum -= sec;
    }
}
// testing();

// module.exports = {testing}
// export  Testing;


// const testing = (floor) => {
//     console.log(floor);
//     var myq = new Queue();
//     myq.enqueue(floor);
//     console.log(myq.front());
// }

export {Testing};