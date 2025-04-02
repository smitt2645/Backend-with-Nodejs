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