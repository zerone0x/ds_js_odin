class HashNode{
    constructor(key, value =null, next=null){
        this.value = value
        this.key = key
        this.next = next
    }
}
class Hashmap{
    constructor(){
        this.bucketsArray = new Array(16).fill(null);
        this.loadfacoter = 0.75
        this.capacity = this.bucketsArray.length
        this.occupied = 0
    }

    hash(key){
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
            hashCode = (primeNumber * hashCode + key.charCodeAt(i))%this.capacity;
        }

        return hashCode;
    }

    set(key, value){
        const index = this.hash(key)
        let head = this.bucketsArray[index]

        while(head !=null){
            if(head.key === key){
                head.value = value
                return
            }
            head = head.next
        }
    this.occupied+=1
    const newNode = new HashNode(key, value, this.bucketsArray[index])
    this.bucketsArray[index] = newNode
    }
    get(key){
        const index = this.hash(key)
        let head = this.bucketsArray[index]
        while(head !=null){
            if(head.key === key){
                return head.value
            }
            head = head.next
        }
        return null
    }
    has(key){
        const index = this.hash(key)
        let head = this.bucketsArray[index]
        while(head !=null){
            if(head.key === key){
                return true
            }
            head = head.next
        }
        return false
    }
    length(){
        return this.occupied
    }
    clear(){
        this.bucketsArray = new Array(16).fill(null);
        this.capacity = this.bucketsArray.length
        this.occupied = 0
    }
    keys(){
        let res = []
        for(let i =0; i< this.capacity; i++){
            let head = this.bucketsArray[i]
            while(head != null){
                res.push(head.key)
                head = head.next
            }
        }
        return res
    }
    values(){
        let res = []
        for(let i =0; i< this.capacity; i++){
            let head = this.bucketsArray[i]
            while(head != null){
                res.push(head.value)
                head = head.next
            }
        }
        return res
    }
    entries(){
        let res = []
        for(let i =0; i< this.capacity; i++){
            let head = this.bucketsArray[i]
            while(head != null){
                res.push([head.key,head.value])
                head = head.next
            }
        }
        return res
    }
}