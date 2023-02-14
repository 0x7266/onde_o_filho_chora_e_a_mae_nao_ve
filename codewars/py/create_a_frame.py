def frame(text, char):
    longest_word = max(text, key = len)
    print(len(longest_word))
    top_bottom = (sorted(list(map(lambda w: len(w), text)))[-1] + 2) * char
    wrapper = f"{char}{top_bottom}{char}\n"
    for w in text:
        wrapper += f"{char} {w} {(len(longest_word) - len(w)) * ' '}{char}\n"
    wrapper += f"{char}{top_bottom}{char}\n"
    return wrapper

print(frame(['Create','this','kata'], '+'))
print(frame(['This is a very long single frame'], '-'))
print(frame(['Small', 'frame'], '~'))