import os

with open('all.txt', 'w', encoding='utf-8') as t:
    for file in os.listdir():
        if file.endswith('.html'):
            with open(file, 'r', encoding='utf-8') as f:
                t.write(f.read())
