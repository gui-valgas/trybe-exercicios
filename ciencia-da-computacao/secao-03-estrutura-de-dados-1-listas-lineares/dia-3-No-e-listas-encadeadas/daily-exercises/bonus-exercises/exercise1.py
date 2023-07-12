from exercises.linked_list import LinkedList


def delete_duplicates(linked_list):
    list_with_unique_elements = LinkedList()

    while linked_list:
        current_node = linked_list.remove_first()
        if list_with_unique_elements.index_of(current_node.value) == -1:
            list_with_unique_elements.insert_last(current_node.value)

    return list_with_unique_elements


# São sim realizadas iterações (for 1 a N) 2x, sendo uma vez no index_of
# e uma vez no insert_last. Contudo, como visto na aula de complexidade
# de algoritmo, o resultado de 2 x N é O(n), pois a constante 2 é descartada.
