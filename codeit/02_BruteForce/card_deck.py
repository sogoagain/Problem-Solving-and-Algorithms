def max_product(left_cards, right_cards):
    max_value = left_cards[0] * right_cards[0]
    for left_card in left_cards:
        for right_card in right_cards:
            value = left_card * right_card
            if value > max_value:
                max_value = value

    return max_value


# 테스트
print(max_product([1, 6, 5], [4, 2, 3]))
print(max_product([1, -9, 3, 4], [2, 8, 3, 1]))
print(max_product([-1, -7, 3], [-4, 3, 6]))
