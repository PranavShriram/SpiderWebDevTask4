# SpiderWebDevTask4
A social networking website for movie buffs for spider inductions

## Steps for installation 
1. Clone the repository locally

2. Install nodejs from [Nodejs official website](https://nodejs.org/en/)

3. Open the terminal in the folder where you have cloned the project.

4. Now run the following commands 
```
   npm cache clean
   npm install
```

5. Now, you should be able to see the node modules folder with all dependencies installed.

6. Install the mongodb community edition from here [Mongodb official documentation](https://docs.mongodb.com/manual/administration/install-community/)

7. Ensure that mongo service has started and is listening on port 27017

8. Now , run the following command back in the terminal at the project folder
`node index.js`

9. Navigate to http://localhost:3000/register and you should be able to view the register page

## Application User Manual

1. Register yourself by opening http://localhost:3000/register route.

2. Once you have registered, http://localhost:3000/homepage is opened automatically where some movie data is fetched.

3. In the search bar you can opt to search by movie title or IMDb id.

4. On hovering over any movie a small description of the movie appears and on clicking the view more button a popup opens.

5. In the popup, some info on the movie is provided along with the movie trailer fetched from youtube api .You can mark the movie as favourite or click the watch later button to add it to the list of movies to watch later.

6. To like the trailer on youtube or comment on a trailer click the 
**Sign in using google** button.

7. Now, the like icon and the add comment form appear.

8. To view profile click on the my profile tab on the navbar.

9. Users can make their activity private or public and share their activity on facebook.

10. To view profile of other users, user the search input on the navbar.






