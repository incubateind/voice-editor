# Type by Voice Instructions
This Project enables the user to type using voice commands without requiring to use keyboard at all.

Please feel free to create Issues if you find a bug somewhere or send a Pull Request if you wish to improve the existing code/add a new feature. :)

## Setup

### Fork
Fork the repository on GitHub. Refer [here](https://help.github.com/en/github/getting-started-with-github/fork-a-repo) for any help.

### Clone
Clone the project locally.

```sh
$ git clone https://github.com/GITHUB-USERNAME/voice-editor.git
```

Change directory to folder voice-editor.

```sh
$ cd voice-editor
```

### Upstream
Add upstream.

```sh
$ git remote add upstream https://github.com/incubateindia/voice-editor.git
```

### Branch
Create a branch for fixing a problem or developing any feature. 
Make sure that you are executing this command from the `master` branch to avoid any conflicts later.

```sh
$ git checkout -b BRANCH-NAME
```

### Modify
Then you can go ahead and make any changes you want.

Use the following command to see the files you have modified.

```sh
$ git status
```

Use the following command to see the exact changes you have made to the files.

```sh
$ git diff
```

### Commit
If you are developing a big feature, you can go ahead and break it down into components and create individual commits for all of them. To create a commit, execute the following commands.

Add files to the staging area.

```sh
$ git add FILE-NAME.EXTENSION
```

OR 

If you have only modified some files and want to add all of them to the staging area in one go, execute the following command.

```sh
$ git add .
```

After you have add all your files to the staging area, you can commit your changes with a commit message specifying what you have done by executing the following command.

```sh
$ git commit -m "COMMIT-MESSAGE-GOES-HERE"
```

Congratulations! You have created your commit.

You can repeat this, for any changes you are making.

### Push
After commiting your changes, you are now ready to push your changes to your fork. In order to do that, execute the following command.

```sh
$ git push origin BRANCH-NAME
```

Now your changes are available online in your fork and you are now ready to create your pull request.

### Pull Request
Go back to your fork available at [https://github.com/GITHUB-USERNAME/voice-editor](). You would now see that there is a navigation bar above the navigation bar containing `Clone or download` button on the right, which contains your branch name on the left and a button stating `Compare & pull request` on the right.

Click on the `Compare & pull request` button and you would be redirected to a page asking you to specify your pull request descriptions, heading, branch name, etc. Fill them and then click on `Create pull request`.

Hurray! You have created your very first pull request :)

## Usage
You can create pull request for task modules related to planning and research by keeping your idea files inside `plans/` directory. Please make sure to include task number in your file name.

For other tasks, keep your codes inside `modules/` directory before creating the pull request and include task number somewhere in the file name.

Then we can integrate different modules into a working application. 
