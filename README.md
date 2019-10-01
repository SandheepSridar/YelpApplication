# YelpApplication Project in progress - Expected completion by December 2019


Business Case:  ARC (Aggie Restaurant Consulting) | Yelp Dataset
	
1. Introduction
ARC is an application dedicated to providing suggestions for restaurant business owners. For the people who want to open a new restaurant, the application will provide different aspects recommendation of the restaurant as a choice, such as location, food category, or price level, based on the geographical data. For example, the application will provide a potential list of locations where there is a lack of high-rated Mediterranean restaurants in an area, and that means opening a Mediterranean restaurant might be a good choice to make more profit. In another aspect, the application can also show the information if the user provides all aspects, for example giving suggestions based on the proposed location, food category, and price level. So for the entrepreneur who owns a restaurant already, the application will help them improve the business. 

Data Description
The data we will use is the Yelp’s dataset. In the platform, customers share their feelings and reviews for a restaurant, and the restaurant provides an introduction of their food. There are two files in the dataset. “yelp_business” contains 174,568 records. We will filter and just use restaurant records. It includes the basic information about a restaurant, such as name, location, stars, number of reviews, currently open or not, and their categories. “yelp_review” contains 5,261,668 reviews from customers. Besides ID, each record provide a review from a customer, which has the stars, the date, and text about the review, and three rating number (useful, funny, and cool). Based on the data, we can summarize the customer consuming ability and habit in an area, and provide suggestions to the business owner. 

2. Opportunity & Business Value
With the trend of individuals being more community-conscious, there is a rise in individuals wanting to support local businesses - especially local restaurants. It doesn’t matter if the individual is a local or a tourist  - there is a desire to help support the local community. Therefore, we saw a need to help local restaurants to start or continue to grow their business by leveraging the data from yelp we find. A corporation has the data and the resources to strategically place themselves in a location and cater their menu to the demographic. However, small business doesn’t have that yet currently. In order to start a business, a lot of time and monetary support goes into the process. In order for restaurants to succeed - they should see the type of business already in the area they are wanting to start and find ways to differentiate themselves. The key value of creating this application is allowing small entrepreneur restaurants to kick start their business. 

3. Challenges 
Architectural Choices
The first challenge in building our data-driven application is to model the database in a way that it is compatible with the application to perform analyses upon and also avail us the benefits of clustering at the same time. This poses another set of difficult choices regarding the architectural choices and topology of the data. We would need to decide on what architecture and topology to use for clustering: Master-Master or Master-Slave, Active-Active or Active/Passive, the number of nodes, etc. Making these choices is especially hard because little market research is done by us on the demand for an application like ours. It is thus hard to estimate the kind of traffic our application would attract and should be able to handle. But for educational purposes we, we will make according presumptions within the scope of our class to make such decisions.

ETL
The next big challenge is to clean and modify source data so as to make it consistent all across. It’s a crucial step as the accuracy of our consulting application’s recommendations depends on the degree of precision of analyses performed on the data. The reviews in ‘yelp_review’ are actual reviews that our application will derive inferences from. So they need to need to be loaded in a consistent format for our application to process. The clearer and more consistent the data, the more accurate will the recommendations be.This step requires use of multiple strategies which include manual corrections, use of scripts, etc. Currently, the data is incomplete, spread across different categories, and in denormalized form. ‘Neighborhood’ fields are missing which may need to be manually entered. After that has been done, the data needs to be extracted, loaded, and integrated onto the database using ETL tools like a customized parser or running scripts. This is an especially difficult process because of the enormous size of the data.

Unfamiliarity with technology
Another general difficulty for our team is a lack of background knowledge on these new technologies - MariaDB, Galera- for building our application, creating an integrated database, and orchestrating its instances on a virtual machines. We will continue to educate ourselves on these new technologies as the course progresses and train ourselves to successfully build our project.   



4. Key features 
The following are the key features of ARC:
Find all restaurants based on zip-code and sorted by ratings
When a user enters the website, he/she should be able to find restaurants based on the zip code entered. When the zip code is given as an input, the restaurants in proximity will be ranked and displayed in best to worst order.
Find the type of restaurant based on zip code
Apart from listing out the names and ratings of the restaurants, the website will also display the number of restaurants based on categories. For example, if the user enters the zip code as 77840, the website should show the user that there are 5 sandwich shops, 3 Mexican places, and 3 Italian restaurants. 
Recommend zip-codes suited for starting a certain type of restaurant
The website will have a feature to identify specific zip codes where a particular category of a restaurant is not present. This will help the business owners to expand their business or help them start one.
Competition Analysis based on restaurant category
It is important for business owners to understand competition. This feature will help them understand the quality of certain categories of restaurants based on user reviews.
Compare the score in each aspects (useful, funny, and cool) between two similar restaurant
This feature will rank the restaurants based on the score. That is if there are two similar categories of restaurants the user can further drill down based on their detailed score, such as usefulness, fun, and cool. 

5. Implementation Strategy
The approach planned for this project is as follows:
Design and Develop the schema required for the Database table. This table would be the final table which would be used for the API calls
Datasets will be extracted from the Kaggle, perform filtering and ETL operations to remove unwanted and dirty data and convert into useful format
MariaDB with galera clusters will be used for completing the project using Relational Database. Three nodes on the cluster will act as a backend database
For the second part of the project, the project will be implemented with MongoDB without any application-level changes.
The transformed and filtered dataset will be loaded into the Galera Cluster and MongoDB
The services will be developed using Spring Boot using REST APIs. For more seamless output, ReactJS will be used for developing the web pages.
The application will be hosted locally

           	Tools Used: Spring Boot for services, ReactJS for UI 
           	Database Technology: Maria DB with Galera cluster, MongoDB



6. Timeline for completing the project
Week
Deliverables
Week 37 (Sept 12-14)
Team contract
Week 38 (Sept 16 -21)
Business Case approval
Week 39 (Sept 21-Sept 29)
Cleaning the dataset, Galera nodes setup and loading data into MariaDB
Week 39-40 (Sept 24-Oct 1)
Front-end and Back-end application development and testing
Week 44-46 (Oct 28- Nov 20)
MongoDB setup, load data into MongoDB. Connect application with MongoDB and testing
Week 47 (Nov 21)
Presentations and Project delivery



