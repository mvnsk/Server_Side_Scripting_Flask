from __future__ import unicode_literals
from flask import Flask, render_template , url_for, request,jsonify
from newsapi import NewsApiClient
from newsapi.newsapi_exception import NewsAPIException
import collections

import requests

from newsapi import const
from newsapi.newsapi_auth import NewsApiAuth
from newsapi.newsapi_exception import NewsAPIException
from newsapi.utils import is_valid_string, stringify_date_param
application = Flask(__name__)




@application.route('/favicon.ico',methods=['POST', 'GET'])
def favicon():
    print(" fav called")
    return application.send_static_file("favicon-16x16.png")


@application.route('/img_avatar.png',methods=['POST', 'GET'])
def avatar():
    print(" avatar called")
    return application.send_static_file("img_avatar.png")

@application.route('/notebook.jpg',methods=['POST', 'GET'])
def notebook():
    return application.send_static_file("notebook.jpg")


@application.route('/mystyle.css',methods=['POST', 'GET'])
def mystle():
    print(" css called")
    return application.send_static_file("mystyle.css")


@application.route('/code.js',methods=['POST', 'GET'])
def myjs():
    print(" js called")
    return application.send_static_file("code.js")


#@application.route('/index',methods=['POST', 'GET'])
"""with application.test_request_context('/', methods=['GET','POST']):
    # now you can do something with the request until the
    # end of the with block, such as basic assertions:
    #assert request.path == '/hello'
    #assert request.method == 'POST'
    print(request.)"""

@application.route('/',methods=['POST', 'GET'])
def Index():
    print("index called")
    return application.send_static_file("full.html")


@application.route('/headline',methods=['POST', 'GET'])
def headline():
    print("headline called")
    newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
    top_headlines =newsapi.get_top_headlines(language='en', page_size=30)
    return jsonify(top_headlines)


@application.route('/fox',methods=['POST', 'GET'])
def fox():
    newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a');
    foxnews =newsapi.get_top_headlines(sources='fox-news',page_size=30)
    return jsonify(foxnews)


@application.route('/cnn',methods=['POST', 'GET'])
def cnn():
   newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
   cnews = newsapi.get_top_headlines(sources='cnn',page_size=30)
   return jsonify(cnews)

@application.route('/sources',methods=['POST', 'GET'])
def sources():
   newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
   mysources = newsapi.get_sources()
   return jsonify(mysources)

@application.route('/changesources',methods=['POST', 'GET'])
def changesources():
   newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
   c = request.args.get("category")
   mysources = newsapi.get_sources(category=c ,language='en' )
   return jsonify(mysources)


@application.route('/search',methods=['POST', 'GET'])
def search():
    newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
    query = request.args.get("q")
    from_date = request.args.get("f")
    to_date =request.args.get("t")
    category = request.args.get("c")
    site= request.args.get("s")
    try:
       top_headlines = newsapi.get_everything(q=query, sources=site, from_param=from_date, to=to_date,language='en', sort_by='publishedAt',page_size=30)

       return jsonify(top_headlines)
    except NewsAPIException as e:
        dateerror=str(e)
        ejson=dateerror.replace("\'","\"")
        print("e is ", ejson)
        y=jsonify(ejson)
        print("y is ",y)
        return ejson


@application.route('/wordcloud',methods=['POST', 'GET'])
def wordcloud():

    newsapi = NewsApiClient(api_key='fd4c0e4b873343a3a0a7b50168a89e9a')
    top_headlines =newsapi.get_top_headlines(language='en', page_size=60)
    articles=top_headlines["articles"]
    file1 = open('myfile.txt', 'r')
    Lines = file1.readlines()
    sw=set()
    for line in Lines:
       sw.add(line.strip())
    x=set()
    mydic=collections.defaultdict(int)
    for article in articles:
       headline=article["title"]
       words=headline.split()
       #print("words is ", words)
       for word in words:
           word=word.lower()
           if  word.isalpha() and word not in sw:
               mydic[word]+=1

    mywords=[]

    mykeys=sorted(mydic, key=lambda k: mydic[k])
    mykeys=mykeys[::-1]
    #print(mykeys)
    for key in mykeys:
        e = dict()
        e["word"] = key
        e["size"] = mydic[key]
        mywords.append(e)
    #print(mywords)
    mywords=mywords[:30]
    return jsonify(cloudwords=mywords)




if __name__ == "__main__":
   application.run(debug=True)
