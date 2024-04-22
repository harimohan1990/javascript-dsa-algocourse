interface Node {
    val: number;
    next: Node|null;
    minValue: number;
}

const createNode = (val: number|null, next:Node|null, minValue: number):Node => {
    return {
        val,
        next,
        minValue
    }
}

class MinStack {
    minValue=Number.MAX_SAFE_INTEGER;
    head = createNode(null, null, this.minValue)

    push(val: number): void {
        const node = createNode(val, this.head, Math.min(val, this.minValue))
        this.head = node;
        this.minValue =  Math.min(val, this.minValue)
    }

    pop(): void {
        let next = this.head.next;
        this.head = next;
        this.minValue = this.head.minValue
    }

    top(): number {
        return this.head.val;
    }

    getMin(): number {
        return this.minValue;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */