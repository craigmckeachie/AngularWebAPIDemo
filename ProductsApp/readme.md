


---------------------------------------------------------------------
.NET Core
If you prefer a File | New Project experience and are using ASP.NET Core, then consider the experimental ASP.NET Core + Angular template for Visual Studio 2015. Note that the resulting code does not map to the docs. Adjust accordingly.
https://angular.io/guide/visual-studio-2015#aspnet-4x-project
See this article for a detailed explanation.
https://dzone.com/articles/create-an-application-with-angular-6-and-net-core
Another approach includes disabling TypeScript compilation by Visual Studio
http://www.talkingdotnet.com/how-to-create-an-angular-6-app-with-visual-studio-2017/

Pluralsight- Dan Whahlin
https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService

The project has the following goals:

* Keep the Angular project code completely separate from the ASP.NET Core code to make updates of either technology easier in the future. This was a key consideration when organizing the folders/files in the project.

-- Provide a way to serve an Angular application using an MVC view.

-- Allow standard MVC controllers/views to be used in situations where part of the application runs outside of Angular.

* Support running the Angular project completely separate from the ASP.NET Core Web API if desired (CORS is enabled in the Startup.cs project). See the notes below if you want to use this option.

https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/tree/master/Client
Client folder inside customersservice project folder

Instead of building to dist, build to wwwroot/dist/
https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Client/angular.json#L16


https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Views/Shared/_Layout.cshtml#L49
Scripts generated with ng build BUT without cache busting
generated file names have changed between versions of the cli
generated files have become fewer between versions of the cli and are different between dev and prod builds

https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Views/Home/Index.cshtml#L2
<app-component></app-component> included in the Home Controller's default (index) view

https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Startup.cs#L89
https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Startup.cs#L129
CORS enabled

SPA redirect to Home/Index
https://github.com/DanWahlin/AngularCLI-ASPNET-Core-CustomersService/blob/master/Startup.cs#L143

XSRF-TOKEN not necessary if using JWTs for token authentication

----------------------------------------------------
Restore Packages
npm install
Start with IISExpress
ng serve -o


------------------
ASP.NET Web API 2 (.NET Framework)
Download web api demo from:
https://docs.microsoft.com/en-us/aspnet/web-api/overview/getting-started-with-aspnet-web-api/tutorial-your-first-web-api

Create ProductsClient directory using Angular CLI.
cd Sample code of.../C#
ng new ProductsClient

Note: Many solutions put Angular inside the WebAPI project (ProductsApp in this example), I have found this harder to maintain.

Including Productclient folder/project:
Just use the Solutions and Folders Link in the toolbar of the solution explorer.

How do I use the Angular CLI from within VS Code?
Not a good embedded command prompt.
https://docs.microsoft.com/en-us/dotnet/framework/tools/developer-command-prompt-for-vs
Just right-click folder to open in command prompt outside Visual Studio.

Web API Configuration to work with VS Code:
Summary: CORS, Serialiazation to camelCasing

Notes
Don't need to send origin header in request (Angular won't let you set), the browser does this for you.
Do need to server to say it allows origin as described in the CORS article article.
Properties are case-sensitive by default.

Reference
https://docs.microsoft.com/en-us/aspnet/web-api/overview/security/enabling-cross-origin-requests-in-web-api
https://stackoverflow.com/questions/21001455/should-a-rest-api-be-case-sensitive-or-non-case-sensitive
https://stackoverflow.com/questions/22130431/web-api-serialize-properties-starting-from-lowercase-letter

Changed the start page to http://localhost:57144/api/products/ from index.html


Deploy Client to IIS:

Redirect Angular app (client) when hosted in IIS.
https://angular.io/guide/deployment#fallback






