class LinkedList{
    constructor(){
        this.head = null
        // updated by gpt
    }

    append(val){
        if (this.head === null){
            this.head = new Node(val)
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            curr.next = new Node(val)
        }
    }
    prepend(val){
        // if(this.head === null){
        //     this.head = new Node(val)
        // }else{
            // temp = this.head.next
            this.head= new Node(val, this.head)
            // this.head.next.next = temp
        // }
    }
    size(){
        if (this.head === null){
            return 0
        }else{
            let curr = this.head
            let res = 1
            while(curr.next){
                curr = curr.next
                res +=1
            }
            return res
        }
    }
    head(){
        return this.head
    }
    tail(){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            while(curr.next){
                curr = curr.next
            }
            return curr
        }
    }
    at(index){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            let counter = 0
            
            while(curr.next){
                if(counter == index){
                return curr
            }
                curr = curr.next
                counter++
            }
            return null
        }
    }
    pop(){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            while(curr.next.next){
                curr = curr.next
            }
            
            curr.next  = new Node(null,null)
        }
    }
    contains(val){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            while(curr){
                if(curr.value == val){
                    return true
                }
                curr = curr.next
            }
            return false
            

        }
    }
    find(val){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            let counter = 0
            while(curr){
                
                if(curr.value == val){
                    return counter
                }
                curr = curr.next
                counter++ 
            }
            return null
            

        }
    }
    toString(){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            let res = ''
            while(curr){
                step = `(${curr})->`
                res += step
            }
            res += 'null'
            return res
            

        }
    }
    insertAt(value, index){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            counter = 0
            
            while(curr){
                if(counter == index){
                let insert_node = new Node(value, curr.next)
                curr.next = insert_node
            }
                curr = curr.next
                counter++
            }
            
        }
    }
    removeAt(index){
        if (this.head === null){
            return null
        }else{
            let curr = this.head
            counter = 0
            
            while(curr){
                if(counter == index){
                curr.next = curr.next.next
                
            }
                curr = curr.next
                counter++
            }
            
        }
    }

}

class Node{
    constructor(value, next = null){
        this.value = value
        this.next = next
        
    }
}

let newlist = new LinkedList()

newlist.prepend(10)
newlist.append(1)
newlist.append(3)
console.log(newlist.size())
console.log(newlist)
// function append(value){
//     list_len = newlist.length
//     newlist[list_len].value = value
//     newlist[list_len -1].next = newlist[list_len]
// }

// function prepend(value){
//     for(let i = newlist.length-1; i >-1; i--){
//         newlist[i+1] = newlist[i]

//     }
// }

// function size(){
//     return newlist.length()
// }

// function head(){
//     return newlist[0].value
// }