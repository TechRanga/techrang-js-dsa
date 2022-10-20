var TRStack = function(){
    this.count = 0;
    this.storage = {};

    this.push = function(input){
        this.storage[this.count] = input;
        this.count++;
    };

    this.pop = function(){
        if(this.count===0){
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    this.size = function(){
        return this.count;
    }

    this.peek = function(){
        return this.storage[this.count-1];
    }
};

var newStack = new TRStack();
newStack.push(1);
newStack.push(2);
console.log(newStack.peek());//2
console.log(newStack.pop());//2
console.log(newStack.peek());//1