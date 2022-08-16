from fileinput import filename
from flask import Flask
import pandas as pd 
import numpy as np
import matplotlib.pyplot as plt
import pickle

model=pickle.load(open(r"C:\Users\thisi\Desktop\SmartIndiaHack\machine-learning\server\tmodel.pkl",'rb'))



app= Flask(__name__)

@app.route('/')
def home():
    test=np.array([[4,48.6,7]])
    pred=model.predict(test)
    return pred


if __name__ == "__main__":
    app.run(debug=True)




