# Github rundown

Here are the basic git commands I ran through with you on Wednesday of last week.

# Getting Started
First open up git bash and change to the github directory
From this directory we want to clone the project, or cd into the project directory if it is already cloned
```git clone https://github.com/UAHakron/club-website.git```

Be sure to git pull to get the most recent changes from Github: ```git pull```

# Creating your own branch and making changes
Next we will want to put your work in a separate branch. This step only needs to be done once (for now).
```git checkout -b <your_branch_name>```

### Now lets make some changes
Open your favorite text editor and change something! Once you're happy with your change we need to tell Github to keep track of these changes. 

We do that with ```git add -A``` to add all of the files. Or ```git add <specific_file_name>``` to just add a single file. Most of the time I just add them all. It typically won't hurt anything.

Then add your changes to your local Git system with ```git commit -m "<your_commit_message>"```. Committing puts the changes you've added in your commit history. You can see the history by typing ```git log```.

Lastly, you should push your code up to the remote github repositry on the branch you created. 
```git push```
You should be prompted to enter your username and password here.

And that's it! You can now view your changes on you branch of the project on Github.com


# Commands
```cd``` - Change directory
> Examples:
> ```cd github ```, to change to github directory
> ```cd ..```, to go up one directory level
> ```cd ~```, to go to your home directory

```git clone <directory_url>``` - Clone the directory at the specified URL

```git pull```  -  pull the most recent changes to the project from Github

```git add``` - Add your changes to your local git repository, staging them for commit

```git commit -m "<commit_message>"``` - Commit your changes to your local git repository. -m is the most common option on commits, but its not necessary and there are others. Check out the documentation for more information.

```git push``` - Pushes your local git repository commits to the remote repository
