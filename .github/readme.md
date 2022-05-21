#   Github Actions
```
    Exist two type of virtual machine
    1.  Windows
    2.  Linux & Mac Os

    -   What is a runner:
    any machine with the github actions runner application installed
    a runner is responsible for runnings you jobs
    it can be hosted by github or you can host your own runner
    
    -   Github hosted runners
        Linux, Windows or Mac Os virtual enviroments with pre-installed software
    
    -   Self-hosted-Runner
        a machinge manage and mantain with the runner application installed

    -   Pre-Installed Softwares
        Tools like curl, git, npm, yarn and pip
        lenguages like python ruby. node js ... etc.
        Andriod SDK and Xcode.

        Github actions run in a yml Format
        Installation required minimum:
        1.  YAML
        2.  YAML TO JSON
```

##  Sumary
```
    1.  Event ->
        2.  Workflow
            3.  Job
                4.  Step
                    5.  Action
                        6.  Virtual Enviroment
                            7.  Runners ( github Runner / self hosted runner )
```

##  Some consideration
```
    *   For Public Repository Github Actions is not free
    1.  Folder directory
        1.  .github
            1.1 workflows
```

##  Some Variable Screts
```
    ACTIONS_STEP_DEBUG: true

    
```