with open('words.txt','r') as f:
    for line in f:
      line = line.replace('\n', ' ').replace('\r', '')
      
      print("\"{}\",".format(line))