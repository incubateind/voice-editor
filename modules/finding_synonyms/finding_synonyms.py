from nltk import download
from nltk.corpus import wordnet
download('wordnet', quiet=True)

def synonyms(word):
    '''
    Takes input a word
    Outputs a set of synonyms
    '''
    synonyms = []

    for syn in wordnet.synsets(word):
        for l in syn.lemmas():
            synonyms.append(l.name())
    return set(synonyms)
