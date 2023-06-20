module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    console.log(req.body)

    if (req.body) {
        context.bindings.msg = req.body;
        context.res = {
            body: req.body
        };
    }
    else {
        context.res = {
            status: 400,
            body: "Please pass a name on the query string or in the request body"
        };
    }
};

