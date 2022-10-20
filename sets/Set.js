

var TRSet = function(){

    this.collection = [];

    this.has = function(element){
        return (this.collection.indexOf(element) !== -1);
    };

    this.values = function(){
        return this.collection;
    };

    this.add = function(element){
        if(!this.has(element)){
            this.collection.push(element);
            return true;
        }
        return false;
    };

    this.remove = function(element){
        if(this.has(element)){
            let index = this.collection.indexOf(element);
            this.collection.splice(index,1);
            return true;
        }
        return false;
    };

    this.size = function(){
        return this.collection.length;
    };

    /* This function will return the union of two sets, the second set is provided as an argument */
    this.union = function(newSet){
        var unionSet = new TRSet();
        var firstSet = this.values();
        var secondSet = newSet.values();
        firstSet.forEach(function(item){unionSet.push(item)});
        secondSet.forEach(function(item){unionSet.push(item)});
        return unionSet;
    };

    this.intersection = function(secondSet){
        var intersections = new TRSet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(secondSet.has(e)){
                intersections.add(e)
            }
        })
        return intersections;
    }

    this.difference = function(secondSet){
        var difference = new TRSet();
        var firstSet = this.values();
        firstSet.forEach(function(e){
            if(!secondSet.has(e)){
                difference.add(e)
            }
        })
        return difference;
    }


}