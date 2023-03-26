def total_grades(file_lines: list[str]) -> str:
    total = 0
    for line in file_lines:
        current_line = line.strip()
        if(int(current_line) < 1):
            if(int(current_line) == -999):
                break
        else:
            total += int(current_line)
    if(total == int(file_lines[0])):
        return "Empty"
    else:
        return total - int(file_lines[0])

if __name__ == "__main__":
    filename = input()
    with open(filename) as data_file:
        lines = data_file.readlines()
    print(total_grades(lines))
