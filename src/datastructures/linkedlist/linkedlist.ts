export default abstract class LinkedList<Node> {
    constructor(head: Node | null | undefined) {
        head = null
    }

    /**
     * Create new node add it to the end of the Linked List
     * @param {Node} node
     */
    abstract push(node: Node): void

    /**
     * Deletes a node from the specified position in the LinkedList. Assumes 0 based indexing
     * @param position Index of node to delete
     * @returns {Node} deleted node
     */
    abstract deleteNodeAtPosition(position: number): Node | null | undefined

    abstract alternateSplit(): [Node, Node]

    /**
     * Checks if a Linked list is a palindrome
     * @returns {boolean} True if the linked list can be read from tail to head as from head to tail
     */
    abstract isPalindrome(): boolean

    /**
     * Swaps nodes in a linked list in pairs.
     * As there are different kinds of LinkedLists, it is up to the child class to implement this
     * The premise(idea) is to swap the data of each node with the data of the next node. This is while using 
     * an iterative approach
     * Example:
     * 1 -> 2 -> 3 -> 4
     * becomes
     * 2 -> 1 -> 4 -> 3
     * @returns {Node} new head of linked list
     */
    abstract pairwiseSwap(): Node | null
}
