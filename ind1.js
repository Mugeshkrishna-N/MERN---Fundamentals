var module = require('./dbmod1');
var url = require('url');
var querystring = require('querystring');
var http = require('http');
var email = '';
var password = '';
var bookId='';
var customerName='';
var payment='';
var address='';
var phoneNumber='';
var cusmail='';
var pass='';
var confirm_password='';
var full_name='';
var Cusaddress='';
var country='';
var mobile_number='';
var pincode='';

http.createServer(function(request, response) {
    var data1 = '';
    console.log("Hello JS ");
    request.on('data', function(chunk) { data1 += chunk; });
    request.on('end', function() {
        var qs = querystring.parse(data1);
        var name = qs['email'];
        console.log(name);
        var pass = qs['password'];
        console.log(pass);
        var qs = querystring.parse(data1);
        var bookId = qs['book-id'];
        var customerName = qs['customer-name'];
        var payment = qs['payment'];
        var address = qs['address'];
        var phoneNumber = qs['phone-number'];
        var qs = querystring.parse(data1);
        var cusmail = qs['email_address'];
        var pass = qs['password'];
        var full_name = qs['full_name'];
        var confirm_password = qs['confirm_password'];
        var Cus_address = qs['address'];
        var country = qs['country'];
        var mobile_number = qs['mobile_number'];
        var pincode = qs['pincode'];
        var conq=qs['cquery'];
        var qname=qs['cqname'];
        var srname=qs['sgname'];
        var rst=qs['sgreq'];
        if (request.url === '/login') {
            module.saveUser(name, pass, function(da) {
                response.writeHead(200, { 'Content-Type': 'text/plain' });
                response.write(da); // Send the 'da' variable in the response
                response.end();
            });
        }
        else if(request.url==='/purchase'){
            module.purchaseuser(bookId,customerName,payment,address,phoneNumber);
        }
        else if(request.url==='/register'){
            module.registeruser(cusmail,full_name,pass,confirm_password,Cus_address,country,mobile_number,pincode);
        }
        else if(request.url==='/contact'){
            module.contactadmin(qname,conq);
        }
        else if(request.url==='/suggest'){
            module.suggestadmin(srname,rst);
        }
        else if (request.url.startsWith('/fetchorder')) {
            const query = url.parse(request.url, true).query;
            const customerName = query.name;
    
            // Fetching the order details from the database
            module.fetchOrder(customerName, function(order) {
                if (order) {
                    // Sending the fetched order details as a JSON response
                    response.writeHead(200, { 'Content-Type': 'application/json' });
                    console.log(order);
                    response.end(JSON.stringify(order));
                } else {
                    // Sending a 404 response if no order was found
                    response.writeHead(404, { 'Content-Type': 'application/json' });
                    response.end(JSON.stringify({ error: 'Order not found' }));
                }
            });
        }
    });
}).listen(3000);
console.log("Server started ");





