import sys
import json

fields = [  'year', 'abundance', 'biomass', 'ssb', 'recruits', 'av_m', 'av_f', 'landings' ]
def main():
    lines = tuple(open("cod.txt", 'r'))

    data = []
    for line in lines:
        vect = line.split()
        datum = dict()
        for index in range(len(fields)):
            datum[fields[index]] = float(vect[index])

        data.append(datum)
    
    with open('codseries.json', 'w') as outfile:
        json.dump(data, outfile)

if __name__=="__main__":
    main()