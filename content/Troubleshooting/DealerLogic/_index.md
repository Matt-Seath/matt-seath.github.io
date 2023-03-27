+++
title = "DealerLogic"
weight = 9
+++

## Troubleshooting Flowchart

Articles for DealerLogic can be found [Here.]({{< ref "/Documentation/DealerLogic/_index.md" >}} "DealerLogic")

{{< mermaid >}}

flowchart TB;

    A[Ask the client to reboot before<br> commencing troubleshooting] --> B{Is <br>DealerLogic <br>running?}
    B:::d -->|Yes| C{Is DealerLogic <br>installed on a <br>network?}
    B -->|No| D[Check the shortcut to DealerLogic <br>is correct - The shortcut needs to point <br>to DNSSuite.exe. Ensure the if they are <br>networked that the network <br>connection is working and there isn't a <br>red cross next to the drive.]
    C:::d -->|Yes| E[Check the shortcut to DealerLogic <br>is correct - the shortcut needs to point <br>to DNSSuite.exe. Ensure that unc paths are <br>used. E.g. '\server\Dealerlogic'<br> instead of 'c:\Dealerlogic'.]
    C -->|No| F{Is the <br>client running <br>the latest version of <br>DealerLogic and <br>DNSSuite?}
    E:::g --> F
    F:::d -->|Yes| G{Is there<br> a software or database<br> error? E.g. Missing fields, <br>can't save data <br>etc.}
    F -->|No| H[Get the client to <br>perform a Program Update to <br>update to the latest of DealerLogic<br> and DNSSuite. If this fails use the <br>application distributor to provide<br> the latest version.]
    H:::g --> B
    D:::g --> I{Is <br>the issue <br>resolved?}
    I:::d -->|Yes| J((Issue <br>is resolved.))
    I -->|No| K{Is <br>this a DL3<br> client?}
    K:::d -->|No| L((Create a<br>case of Bucket<br>O' Stuff.))
    K -->|Yes| M[Check that the database<br>connection information is<br>the same as the license<br>file. Troubleshoot DL3<br>connection issues.]
    M:::g --> N{Is<br>the issue<br>resolved?}
    N:::d -->|Yes|O((Issue<br>is resolved.))
    N -->|No|P((Create<br> a case for IT in <br>JSD for the database<br>connection issue<br>to be <br>resolved.))
    G:::d --> |Yes|Q[Login to DealerLogic<br>is Single User Mode.]
    G --> |No|R{Is the<br>DealerLogic running<br>very slowly?}
    R:::d --> |Yes|S{Is this<br>an MDB client?}
    R --> |No|T[This could be a network<br>related issue. Thy restarting<br>the one machine of if<br>networked try restarting<br>all machines.]
    S:::d --> |Yes|U[Log in a single<br>user and compact<br>the database.]
    S --> |No|T
    T:::g --> V{Is<br> the issue<br> resolved?}
    U:::g --> AC{Is <br> the issue<br>resolved?}
    V:::d --> |Yes|W((Issue<br>is resolved.))
    V --> |No|X[Ask the client whether<br>they can turn off the<br>antivirus / firewall on their<br> machine and see whether<br> that resolves the issue.]
    X:::g --> Y{Is <br>the issue<br> resolved?}
    Y:::d --> |Yes|Z[There is an issue with the<br>clients firewall settings. Ensure<br> DealerLogic is allowed <br> and relevant dealersolutions<br>urls are whitelisted.]
    Y --> |No|AA((Create a<br>case of Bucket<br>O' Stuff.))
    Z:::g --> AB((Issue<br>is resolved.))
    AC:::d --> |Yes|AD((Recommend<br>for the client to<br>Update to <br>CloudLogic.))
    AC --> |No|T
    Q:::g --> AE{Is<br>this a DL2<br>client?}
    AE:::d --> |Yes|AF[Perform a database<br>compact and repair.]
    AE --> |No|AG[Try a Backdate of the software<br>by a version. E.g. If the current <br>version is 2.562 try backdating<br>to version 2.561.]
    AG:::g --> AH{Is<br>the issue<br>resolved?}
    AH:::d --> |Yes|AI((Issue<br>is resolved.))
    AF:::g --> AL{Is <br>the issue<br>resolved?}
    AL:::d --> |Yes|AM((Issue<br>is resolved.))
    AL --> |No|AG
    AH --> |No|AN[Try and replicate the issue in<br> AppSupport. Open up DealerLogic via <br>V:/Client/Services/AppSupport/Dealerlogic.<br> Ensure that the version at the bottom <br>of AppSupport matches the clients version.]
    AN:::g --> AO((Create a <br>case of Bucket<br>O' Stuff.))


    click D "{{< relref "Configure DL Shortcut.md" >}}"
    click E "{{< relref "Configure DL Shortcut.md" >}}"
    click A "{{< relref "Rebooting.md" >}}"
    click T "{{< relref "Rebooting.md" >}}"
    click L "{{< relref "Bucket O' Stuff/_index.md" >}}"
    click AA "{{< relref "Bucket O' Stuff/_index.md" >}}"
    click AO "{{< relref "Bucket O' Stuff/_index.md" >}}"
    click P "{{< relref "Creating a case in JSD.md" >}}"
    click H "{{< relref "Updating DL and DNSSuite.md" >}}"
    click M "{{< relref "Validating DL license details.md" >}}"
    click Q "{{< relref "Logging in Single User Mode.md" >}}"
    click AF "{{< relref "Performing a database compact and repair.md" >}}"
    click U "{{< relref "Logging in Single User Mode.md" >}}"
    click AG "{{< relref "Backdating DL to an earlier version.md" >}}"
    click AN "{{< relref "AppSupport/Replicating an issue in AppSupport.md" >}}"
    click Z "{{< relref "Client Firewall issues.md" >}}"
    classDef g fill:#DDFFBB
    classDef d fill:#FFEEBB
    
{{< /mermaid >}}