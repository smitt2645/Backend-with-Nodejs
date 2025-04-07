<!-- Request -->

req.app
req.baseUrl
req.body
req.cookies
req.fresh
req.host
req.hostname
req.ip
req.ips
req.method
req.originalUrl
req.params
req.path
req.protocol
req.query
req.res
req.route
req.secure
req.signedCookies
req.stale
req.subdomains
req.xhr
Methods
req.accepts()
req.acceptsCharsets()
req.acceptsEncodings()
req.acceptsLanguages()
req.get()
req.is()
req.range()

<!--  Response -->

res.app
res.headersSent
res.locals
Methods
res.append()
res.attachment()
res.cookie()
res.clearCookie()
res.download()
res.end()
res.format()
res.get()
res.json()
res.jsonp()
res.links()
res.location()
res.redirect()
res.render()
res.send()
res.sendFile()
res.sendStatus()
res.set()
res.status()
res.type()
res.vary()


<!-- // Types of Middleware:

// Mongoose has 4 types of middleware: document middleware, model middleware, aggregate middleware, and query middleware.

// Document middleware is supported for the following document functions. In Mongoose, a document is an instance of a Model class. In document middleware functions, this refers to the document. To access the model, use this.constructor.

// validate
// save
// updateOne
// deleteOne
// init (note: init hooks are synchronous)
// middleware will have always access og next !

 -->

* Communication Protocaol !
    All About HTTP: ( Hyper-Text-Transfer-Protocol )
    
    header : {
        req: client,
        res : server
        representation : encoding ,representation (usually in mobile app)
        payload : data
    }

    * Most Common Header : 
        accept : applicaion/json,text/html
        User-Agent : browser, postman ,thunder-client ,engine related info! 
        Authorization : eg. jwt Bearer Tokens,
        content-type : images ,pdf
        cookies : howmuch time user will able to login,
        cache-control : data exp time will be stored ! 3600 sec

    * Cors :
        Access-control-allow-origin
        Access-control-allow-credentials
        Access-control-allow-methos
    
    * Methods :
        HEAD : Here just we get all about header only No body message , eg. user-agent,chache-control 
        GET : Retrieve data from DB
        POST: Store date in DB
        PUT : Update data in DB : Ovverride data !
        DELETE : remove data from DB
        OPTIONS : what operation available ? , show me that which operations are available on end point we can get !
        TRACE : Loopback test , debuging about proxies , need to know about timing  
        PATCH : Ovveride Perticuler part of data !

    * Stauts Code (ISRCS) : 
        1XX : Informational
        2XX : Success
        3XX : Redirection
        4XX : Client Error
        5XX : Server Error
        