#!/usr/bin/env python
# coding: utf-8

# In[ ]:


import requests
from bs4 import BeautifulSoup
import pandas as pd
import numpy as np

data =[]
for i in range(159):
    proj = requests.get(f'https://surp-iitb.herokuapp.com/project.php?param={i+2101}')
    soup = BeautifulSoup(proj.content, 'html.parser')
    proj_id = i+2101
    temp= soup.find_all('li')
    
    title = soup.find_all("h3")[0].text
    hfours= soup.find_all("h4")
    
    prof= hfours[0].text
    
    email = hfours[1].text
    
    desc = hfours[2].text
    
    learnout = hfours[3].text
    
    prereq = hfours[4].text
    
    selproc = hfours[5].text
    
    lists = soup.find_all("li")
    
    year = lists[0].text.split("-")[1]
    
    cpi = lists[1].text.split("-")[1]
    
    nos = lists[2].text.split("-")[1]
    
    dur = lists[3].text.split("-")[1]
    
    
    row =[proj_id, title, prof, email, desc, learnout, prereq, selproc, year, cpi, dur, nos ]
   
    data.append(row)
    
df= pd.DataFrame(data, columns = ["Id", "Title", "Prof", "Email", "Desc.", "Learn.Out", "Prereq", "Sel. Proc","Year", "CPI", "Students", "Duration"])
df.to_csv(r'D:\SURP.csv', index = False)
    


# In[ ]:




