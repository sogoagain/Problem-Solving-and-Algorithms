def move_disk(disk_num, start_peg, end_peg):
    print("%d번 원판을 %d번 기둥에서 %d번 기둥으로 이동" % (disk_num, start_peg, end_peg))


def hanoi(num_disks, start_peg, end_peg):
    # base case
    if num_disks == 0:
        return

    # recursive case
    mid_peg = 6 - (start_peg + end_peg)
    hanoi(num_disks - 1, start_peg, mid_peg)
    move_disk(num_disks, start_peg, end_peg)
    hanoi(num_disks - 1, mid_peg, end_peg)


# 테스트 코드
hanoi(3, 1, 3)
