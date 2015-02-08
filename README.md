Milestone 1- CSC591 DevOps
----------------------

Project Team Members:

1] Priyanka Shankaran (priyan)

2] Smitha Sathyanarayana (ssathya)

###Build Section
-------------------------------

Our build server has been setup by configuring Jenkins. 
The Windows version of Jenkins has been installed, on our local machine, on port 8080. Using the web GUI of Jenkins, we have configured the features required for this milestone. The steps below describe each capability of the build server:

****Step 1: The ability to trigger a build in response to a git commit via a git hook.****

The following plugins were installed to accomplish this task:

1] On Jenkins' side- GitHub plugin and Git plugin

2] On the Git repository side (remote)- The Jenkins Git plugin

![alt Jenkins Git plugin](screenshots/1a.png)