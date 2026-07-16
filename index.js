module.exports = async function (context, req) {


    context.res = {
        status: 301,
        headers: {
            'Location': 'https://demowebshop.tricentis.com/'
        }
    };
};