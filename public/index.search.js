var relearn_search_index = [
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "AppSupport",
    "uri": "/troubleshooting/dealerlogic/appsupport/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Backdating DL to an Earlier Version",
    "uri": "/troubleshooting/dealerlogic/backdating-dl-to-an-earlier-version/index.html"
  },
  {
    "content": "Overview Bucket-O-Stuff is intended as an inbox for new work which Product Managers will then triage and decide on the course of action to for the work. It is to prevent requests simply making there way into product lanes and being action without the approval of a Product Manager. Any P1 and P2 should also be submitted to Bucket-O-Stuff and then the P1 \u0026 P2 Internal Communication Standards document followed in order to handle the P1 or P2.\nWork should not be executed on a Bucket-O-Stuff case, the case should be moved to the appropriate Jira product lane project as soon as it has been acknowledged that work is required, with P1s and P2s following their standard workflow and other work being planned into sprints while being mindful to the product lanes initiatives. Moving he case into the appropriate Jira project will ensure that the correct workflow is executed within that Jira project and ensure accurate reporting for the project.\nMoving a Case to the Appropriate Project IMPORTANT: Not everyone has permission to move a case to another project. If you do not have permission, review the next section No Permission to Move the Case?\nYou can move a case to another Jira Project by selecting the ellipse (…) button to the top right of the case and selecting Move.\nAfter confirming the change, a new case number will be assigned to the Jira case which will reflect the project it is now associated with.\nNo Permission to Move the Case? If you do not have permission to move the case you can contact:\nProduct Managers Business Analysts Technical Leads Be the first to add a reaction\n",
    "description": "",
    "tags": null,
    "title": "Bucket O' Stuff",
    "uri": "/troubleshooting/dealerlogic/bucket-o-stuff/index.html"
  },
  {
    "content": " Once Zendesk Ticket is recieved:\nPaste the following template into the text field and fill in the missing values. Hi [name],\rI’ve received a cancellation request for [organisation name], to end the following services: [insert product(s) here]\rPlease note, as per our Terms and Conditions, the 30 day notice of cancellation will take effect from the day your request was submitted. Therefore, the cancellation date will be [dd/mm/yy] and you will receive one last invoice for month.\rRead Only access will be provided for 90days for you to extract any information for reporting purposes. (Ending on [dd/mm/yy])\rPlease ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.\rIf there’s any further information that I can supply please don’t hesitate to ask. We’re sorry to see you go.\rI’ll send you an email confirming when the cancellation has been finalised.\rKind regards, Change chat from internal so that the client can view it. Add a client warning in Host:\nSelect the client and open the ‘Client Tags’ tab.\nUnder ‘Tag Operations’ select ‘Type’ dropdown and select ‘Client Warning’.\nPaste the following into the field, filling in the missing values. Cancellation - [Zendesk ticket] - Read only until [dd/mm/yy] Click ‘OK’. Process the End-date for all relevant billable Cloudlogic packages 90 days from cancellation:\nAdd the following note if not autofilled: Cancellation - [Zendesk ticket] - RO until [dd/mm/yy] Process the End-date for DealerLogic packages as normal:\nEnddating Dealerlogic package at the 30day canellation date - this ensures that the customer will be RO after the 30days Process the Bulk End-dates:\nAccounting Client Server Forms DAIS Network Invoicing Create a followup ticket in Zendesk:\nInclude the following: Cancellation Zendesk link\rEmail customer\rRemove 1 gg user and email IT Put a reminder in software support email calender for 90 days time (DAY AFTER the RO date ends):\nReminder: - [Zendesk Ticket] - [organisation name] - [client number]\r- delete gg users\r- IT to delete gg users and database” Add yourself as an attendee. Email the client at the 30 day mark:\nHi [name],\rThis email is to confirm that the cancellation for [organisation name] is complete.\rThe services included on this cancellation are:\r[List products here]\rPlease continue to log into Cloudlogic using username [______]\rDealerlogic Read Only access is available until [dd/mm/yy] for you to extract any information you require for reporting purposes for an additional charge. Please ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.\rAfter the [dd/mm/yy] your data backups will be destroyed and no further access will be available.\rKind regards, ",
    "description": "",
    "tags": null,
    "title": "Cancellation Workflow",
    "uri": "/workflows/cancellation-workflow/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Client Firewall Issues",
    "uri": "/troubleshooting/dealerlogic/client-firewall-issues/index.html"
  },
  {
    "content": "CloudLogic is the “Cloud” based version of a Dealer Solutions application called DealerLogic. (Read more here).\nDealerLogic is setup by installing a “server” version of the application locally on a dealer’s network and then users login using a local version of DealerLogic on each desktop. IT do not support DealerLogic, it is handled by the respective developers.\nCloudLogic makes use of a simple Remote Desktop Services application, which allows a dealer’s DealerLogic app to be installed on one of two AWS servers run in the Dealer Solutions’ legacy AWS account. From there, a dealer can then login via the portal with their provided username and password which then connects them to their DealerLogic instance hosted in the “Cloud”.\nCloudLogic diagram: IT support CloudLogic in a couple of ways:\nManaging CloudLogic users. You can find a guide here for creating new users for existing clients and you can find a guide here for a guide to disable users.\nIT are responsible for setting up new Clients in CloudLogic. This is a more involved process, but a guide can be followed here.\n",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/documentation/cloudlogic/index.html"
  },
  {
    "content": "Check the shortcut to DealerLogic is correct - The shortcut needs to point to DNSSuite.exe. Ensure the if they are networked that the network connection is working and there isn’t a red cross next to the drive.\nEnsure that unc paths are used. E.g. ‘\\server\\Dealerlogic’ instead of ‘c:\\Dealerlogic’.\n",
    "description": "",
    "tags": null,
    "title": "Configure DL Shortcut",
    "uri": "/troubleshooting/dealerlogic/configure-dl-shortcut/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Creating a Case in JSD",
    "uri": "/troubleshooting/dealerlogic/creating-a-case-in-jsd/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/documentation/dais/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/documentation/dealerlogic/index.html"
  },
  {
    "content": "Troubleshooting Flowchart Articles for DealerLogic can be found Here.\n%%{\rinit: {\r\"flowchart\": {\r\"stroke-width\" : \"40px\"\r}\r}\r}%%\rflowchart TB;\rA[Ask the client to reboot before\u003cbr\u003e commencing troubleshooting] --\u003e B{Is \u003cbr\u003eDealerLogic \u003cbr\u003erunning?}\rB:::d --\u003e|Yes| C{Is DealerLogic \u003cbr\u003einstalled on a \u003cbr\u003enetwork?}\rB --\u003e|No| D[Check the shortcut to DealerLogic \u003cbr\u003eis correct - The shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure the if they are \u003cbr\u003enetworked that the network \u003cbr\u003econnection is working and there isn't a \u003cbr\u003ered cross next to the drive.]\rC:::d --\u003e|Yes| E[Check the shortcut to DealerLogic \u003cbr\u003eis correct - the shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure that unc paths are \u003cbr\u003eused. E.g. '\\server\\Dealerlogic'\u003cbr\u003e instead of 'c:\\Dealerlogic'.]\rC --\u003e|No| F{Is the \u003cbr\u003eclient running \u003cbr\u003ethe latest version of \u003cbr\u003eDealerLogic and \u003cbr\u003eDNSSuite?}\rE:::g --\u003e F\rF:::d --\u003e|Yes| G{Is there\u003cbr\u003e a software or database\u003cbr\u003e error? E.g. Missing fields, \u003cbr\u003ecan't save data \u003cbr\u003eetc.}\rF --\u003e|No| H[Get the client to \u003cbr\u003eperform a Program Update to \u003cbr\u003eupdate to the latest of DealerLogic\u003cbr\u003e and DNSSuite. If this fails use the \u003cbr\u003eapplication distributor to provide\u003cbr\u003e the latest version.]\rH:::g --\u003e B\rD:::g --\u003e I{Is \u003cbr\u003ethe issue \u003cbr\u003eresolved?}\rI:::d --\u003e|Yes| J((Issue \u003cbr\u003eis resolved.))\rI --\u003e|No| K{Is \u003cbr\u003ethis a DL3\u003cbr\u003e client?}\rK:::d --\u003e|No| L((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rK --\u003e|Yes| M[Check that the database\u003cbr\u003econnection information is\u003cbr\u003ethe same as the license\u003cbr\u003efile. Troubleshoot DL3\u003cbr\u003econnection issues.]\rM:::g --\u003e N{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rN:::d --\u003e|Yes|O((Issue\u003cbr\u003eis resolved.))\rN --\u003e|No|P((Create\u003cbr\u003e a case for IT in \u003cbr\u003eJSD for the database\u003cbr\u003econnection issue\u003cbr\u003eto be \u003cbr\u003eresolved.))\rG:::d --\u003e |Yes|Q[Login to DealerLogic\u003cbr\u003eis Single User Mode.]\rG --\u003e |No|R{Is the\u003cbr\u003eDealerLogic running\u003cbr\u003every slowly?}\rR:::d --\u003e |Yes|S{Is this\u003cbr\u003ean MDB client?}\rR --\u003e |No|T[This could be a network\u003cbr\u003erelated issue. Thy restarting\u003cbr\u003ethe one machine of if\u003cbr\u003enetworked try restarting\u003cbr\u003eall machines.]\rS:::d --\u003e |Yes|U[Log in a single\u003cbr\u003euser and compact\u003cbr\u003ethe database.]\rS --\u003e |No|T\rT:::g --\u003e V{Is\u003cbr\u003e the issue\u003cbr\u003e resolved?}\rU:::g --\u003e AC{Is \u003cbr\u003e the issue\u003cbr\u003eresolved?}\rV:::d --\u003e |Yes|W((Issue\u003cbr\u003eis resolved.))\rV --\u003e |No|X[Ask the client whether\u003cbr\u003ethey can turn off the\u003cbr\u003eantivirus / firewall on their\u003cbr\u003e machine and see whether\u003cbr\u003e that resolves the issue.]\rX:::g --\u003e Y{Is \u003cbr\u003ethe issue\u003cbr\u003e resolved?}\rY:::d --\u003e |Yes|Z[There is an issue with the\u003cbr\u003eclients firewall settings. Ensure\u003cbr\u003e DealerLogic is allowed \u003cbr\u003e and relevant dealersolutions\u003cbr\u003eurls are whitelisted.]\rY --\u003e |No|AA((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rZ:::g --\u003e AB((Issue\u003cbr\u003eis resolved.))\rAC:::d --\u003e |Yes|AD((Recommend\u003cbr\u003efor the client to\u003cbr\u003eUpdate to \u003cbr\u003eCloudLogic.))\rAC --\u003e |No|T\rQ:::g --\u003e AE{Is\u003cbr\u003ethis a DL2\u003cbr\u003eclient?}\rAE:::d --\u003e |Yes|AF[Perform a database\u003cbr\u003ecompact and repair.]\rAE --\u003e |No|AG[Try a Backdate of the software\u003cbr\u003eby a version. E.g. If the current \u003cbr\u003eversion is 2.562 try backdating\u003cbr\u003eto version 2.561.]\rAG:::g --\u003e AH{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAH:::d --\u003e |Yes|AI((Issue\u003cbr\u003eis resolved.))\rAF:::g --\u003e AL{Is \u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAL:::d --\u003e |Yes|AM((Issue\u003cbr\u003eis resolved.))\rAL --\u003e |No|AG\rAH --\u003e |No|AN[Try and replicate the issue in\u003cbr\u003e AppSupport. Open up DealerLogic via \u003cbr\u003eV:/Client/Services/AppSupport/Dealerlogic.\u003cbr\u003e Ensure that the version at the bottom \u003cbr\u003eof AppSupport matches the clients version.]\rAN:::g --\u003e AO((Create a \u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rclick D \"/troubleshooting/dealerlogic/configure-dl-shortcut/\"\rclick E \"/troubleshooting/dealerlogic/configure-dl-shortcut/\"\rclick A \"/troubleshooting/dealerlogic/rebooting/\"\rclick T \"/troubleshooting/dealerlogic/rebooting/\"\rclick L \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick AA \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick AO \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick P \"/troubleshooting/dealerlogic/creating-a-case-in-jsd/\"\rclick H \"/troubleshooting/dealerlogic/updating-dl-and-dnssuite/\"\rclick M \"/troubleshooting/dealerlogic/validating-dl-license-details/\"\rclick Q \"/troubleshooting/dealerlogic/logging-in-single-user-mode/\"\rclick AF \"/troubleshooting/dealerlogic/performing-a-database-compact-and-repair/\"\rclick U \"/troubleshooting/dealerlogic/logging-in-single-user-mode/\"\rclick AG \"/troubleshooting/dealerlogic/backdating-dl-to-an-earlier-version/\"\rclick AN \"/troubleshooting/dealerlogic/appsupport/replicating-an-issue-in-appsupport/\"\rclick Z \"/troubleshooting/dealerlogic/client-firewall-issues/\"\rclassDef g fill:#DDFFBB\rclassDef d fill:#FFEEBB\r",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/troubleshooting/dealerlogic/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Documentation",
    "uri": "/documentation/index.html"
  },
  {
    "content": " Right click anywhere on the page and select “Inspect” from the bottom. Click the “»” from the top-right banner and select “Application”. Listed under Storage, double click “Cookies” or click on the arrow to expand it. Select the the cloudlogic url to expose the session cookies. Click on “Clear all cookies”. Close the Inspect window and refresh the page. ",
    "description": "",
    "tags": null,
    "title": "How to Force Logoff",
    "uri": "/troubleshooting/cloudlogic/how-to-force-logoff/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Logging in Single User Mode",
    "uri": "/troubleshooting/dealerlogic/logging-in-single-user-mode/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Performing a Database Compact and Repair",
    "uri": "/troubleshooting/dealerlogic/performing-a-database-compact-and-repair/index.html"
  },
  {
    "content": "Just tell the client to turn it off and on again, Lol. Is is that hard?\n",
    "description": "",
    "tags": null,
    "title": "Rebooting",
    "uri": "/troubleshooting/dealerlogic/rebooting/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Replicating an Issue in AppSupport",
    "uri": "/troubleshooting/dealerlogic/appsupport/replicating-an-issue-in-appsupport/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Troubleshooting",
    "uri": "/troubleshooting/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Updating DL and DNSSuite",
    "uri": "/troubleshooting/dealerlogic/updating-dl-and-dnssuite/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Validating DL License Details",
    "uri": "/troubleshooting/dealerlogic/validating-dl-license-details/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Workflows",
    "uri": "/workflows/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Authentication Issues",
    "uri": "/troubleshooting/cloudlogic/authentication-issues/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/troubleshooting/cloudlogic/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/troubleshooting/dais/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/index.html"
  }
]
