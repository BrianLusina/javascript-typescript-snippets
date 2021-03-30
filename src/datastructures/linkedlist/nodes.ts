export type LinkedListNode<T> = {
    data: T;
    next?: LinkedListNode<T> | null;
}

export interface SinglyLinkedListNode<T> extends LinkedListNode<T> {
    data: T;
    next?: SinglyLinkedListNode<T> | null;
}

export interface DoublyLinkedListNode<T> extends LinkedListNode<T> {
    data: T;
    next?: DoublyLinkedListNode<T> | null | undefined;
    previous?: DoublyLinkedListNode<T> | null | undefined;
}