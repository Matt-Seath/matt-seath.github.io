var relearn_search_index = [
  {
    "content": "Adding a new Client Card displays the Summary Client Card Screen. This screen enables you to enter a minimum of information to establish a new card whilst at the same time providing enough information to make the card relevant when saved. This gives you the flexibility to quickly add a card ‘on the fly’ and complete the less critical information later (if you want to).\nTo an experienced user most fields on this screen are self-explanatory however Dealerlogic has an intuitive way of interpreting addresses that you may wish to experiment with.\nAdding addresses has never been quicker or easier. Simply enter the street number and name followed by the suburb or town and Tab off the field. The software will complete the rest for you.\nPostal addresses are added in the same way however if the postal address, street address and garaging address are identical you can simply press the Same as Street to complete the details for you.\nAdding a Joint Owner or Registered Operator can also be performed from the same Summary Client card Screen.\nDriver’s Licence Numbers (private person) or CRN’s for Organisations should be entered.\nFor Organisations you should record ABN’s, A.C.N’s or Business Numbers and if the Client card you are creating is for a Motor Dealer it is very important to tick the field Motor Dealer.\nTo add a Joint Owner or Registered Operator click the second Tab at the top of the Summary Client Card Screen. This tab will be named either Joint Owner or Registered Operator depending on whether your initial selection was for an either Individual or Organisation.\nIf the majority of the details for your Joint Owner or Registered Operator are the same as the main Individual or Organisation simply press the Copy from main button to fill the card in for you. Note the different card numbers for the Main and Joint owner.\nSpecial Note: If you have added either a Joint Owner or Registered Operator in the Summary Client Card Screen, on saving the summary, the software will generate two individual Client Cards and join them with a unique relationship.\nThe two Client Cards created as a result will appear individually in the Card Locate Window and display the Joint owner relationship under the Contacts Tab of each card.\n1 Search to locate a client card by entering the customers surname into the Quick Locate field.\nA: If a match is found – it will be listed in the field below, double click on the card to select it\nB: If a match is not found – click on the ‘Add’ button\n2 Enter customer information – click on the ‘Save’ button to save the customer in the client list. You will now be returned to the client list – double click to select the vendor client card (step 1a above).\n",
    "description": "",
    "tags": null,
    "title": "Adding a New Client Card",
    "uri": "/workflows/dealerlogic/client-card/adding-a-new-client-card/"
  },
  {
    "content": " Call each client and ask the specific DX numbers they need to be in.\nWithin each DX in the host\nf5 → new user Fill in red sections - User type will be Dealer Staff and make sure Dealerlogic User is ticked Once created make sure you give them the 3 DAIS permissions If Cloud Logic see below: – If not Cloud Logic, go to If Cloud Logic - you will need to make sure that they have a gg user for them. If not you will need to get them in contact with an account manager as gg users are billable products.\nIf they have a log in provide the Cloud Logic link if they dont have it already.\ncloudlogic.dealersolutions.com.au - then provide the gg username and password for them to enter Once in will look like this (will only have 1 or 2 DL symbols and 1 log off) hit DL symbol and then connect - if first time logging in another screen will appear:\nusername: INTRADEALER\\ ggusername Password: gg password this will then take them to the Dealerlogic log in screen Someone with a user already will need to log into the program. Once inside the program The User Details section will be their Dealer Logic Log in details (this is whatever they would like). The online services information is what you have just created for them in the f5 screen. (Stress the importance that the online services information is NOT their Dealerlogic log in details and these are not to be changed within the program) Once this is done, they Save. then they can log out and back in as themselves and start processing transactions.\n",
    "description": "",
    "tags": null,
    "title": "Adding Users in Host",
    "uri": "/workflows/adding-users-in-host/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "AppSupport",
    "uri": "/troubleshooting/dealerlogic/appsupport/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Backdating DL to an Earlier Version",
    "uri": "/troubleshooting/dealerlogic/backdating-dl-to-an-earlier-version/"
  },
  {
    "content": "Overview Bucket-O-Stuff is intended as an inbox for new work which Product Managers will then triage and decide on the course of action to for the work. It is to prevent requests simply making there way into product lanes and being action without the approval of a Product Manager. Any P1 and P2 should also be submitted to Bucket-O-Stuff and then the P1 \u0026 P2 Internal Communication Standards document followed in order to handle the P1 or P2.\nWork should not be executed on a Bucket-O-Stuff case, the case should be moved to the appropriate Jira product lane project as soon as it has been acknowledged that work is required, with P1s and P2s following their standard workflow and other work being planned into sprints while being mindful to the product lanes initiatives. Moving he case into the appropriate Jira project will ensure that the correct workflow is executed within that Jira project and ensure accurate reporting for the project.\nMoving a Case to the Appropriate Project IMPORTANT: Not everyone has permission to move a case to another project. If you do not have permission, review the next section No Permission to Move the Case?\nYou can move a case to another Jira Project by selecting the ellipse (…) button to the top right of the case and selecting Move.\nAfter confirming the change, a new case number will be assigned to the Jira case which will reflect the project it is now associated with.\nNo Permission to Move the Case? If you do not have permission to move the case you can contact:\nProduct Managers Business Analysts Technical Leads Be the first to add a reaction\n",
    "description": "",
    "tags": null,
    "title": "Bucket O' Stuff",
    "uri": "/troubleshooting/dealerlogic/bucket-o-stuff/"
  },
  {
    "content": " Paste the following template into the text field and fill in the missing values.\nHi [name],\rI’ve received a cancellation request for [organisation name], to end the following services: [insert product(s) here]\rPlease note, as per our Terms and Conditions, the 30 day notice of cancellation will take effect from the day your request was submitted. Therefore, the cancellation date will be [dd/mm/yy] and you will receive one last invoice for month.\rRead Only access will be provided for 90days for you to extract any information for reporting purposes. (Ending on [dd/mm/yy])\rPlease ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.\rIf there’s any further information that I can supply please don’t hesitate to ask. We’re sorry to see you go.\rI’ll send you an email confirming when the cancellation has been finalised.\rKind regards, Change the message visablity from internal to match the client email. Add a client warning in Host:\nSelect the client and open the ‘Client Tags’ tab.\nUnder ‘Tag Operations’ select ‘Type’ dropdown and select ‘Client Warning’.\nPaste the following into the field, filling in the missing values. Cancellation - [Zendesk ticket] - Read only until [dd/mm/yy] Click ‘OK’. Process the End-date for all relevant billable Cloudlogic packages 90 days from cancellation:\nAdd the following note if not autofilled: Cancellation - [Zendesk ticket] - RO until [dd/mm/yy] Process the End-date for DealerLogic packages as normal:\nEnddating Dealerlogic package at the 30day canellation date - this ensures that the customer will be RO after the 30days Process the Bulk End-dates:\nAccounting Client Server Forms DAIS Network Invoicing Create a followup ticket in Zendesk:\nInclude the following: Cancellation Zendesk link\rEmail customer\rRemove 1 gg user and email IT Put a reminder in software support email calender for 90 days time (DAY AFTER the RO date ends):\nReminder: - [Zendesk Ticket] - [organisation name] - [client number]\r- delete gg users\r- IT to delete gg users and database” Add yourself as an attendee. Email the client at the 30 day mark:\nHi [name],\rThis email is to confirm that the cancellation for [organisation name] is complete.\rThe services included on this cancellation are:\r[List products here]\rPlease continue to log into Cloudlogic using username [______]\rDealerlogic Read Only access is available until [dd/mm/yy] for you to extract any information you require for reporting purposes for an additional charge. Please ensure that you are familiar with any legislation/policies around data retention. If you have any questions please reach out to your State and Federal Government Entities.\rAfter the [dd/mm/yy] your data backups will be destroyed and no further access will be available.\rKind regards, After 30 days have passed Disable all but 1 gg user from DuoMobile.\nEmail IT to remove all but 1 “gg” user.\ncaa.itsupport@coxautoinc.com Email template:\nHi, please remove the following [user/s]:\rusername: [gg/user]\rThanks! Once email confirmation is recieved from IT:\ncopy job ID and confirmation message into Zendesk ticket.\nSubmit ticket as “Open”.\nOnce IT confirms users are removed:\ncopy job ID and confirmation message into Zendesk ticket.\nSubmit ticket as “Closed”.\n",
    "description": "",
    "tags": null,
    "title": "Cancellation Workflow",
    "uri": "/workflows/cancellation-workflow/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Client Card",
    "uri": "/workflows/dealerlogic/client-card/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Client Firewall Issues",
    "uri": "/troubleshooting/dealerlogic/client-firewall-issues/"
  },
  {
    "content": "CloudLogic is the “Cloud” based version of a Dealer Solutions application called DealerLogic. (Read more here).\nDealerLogic is setup by installing a “server” version of the application locally on a dealer’s network and then users login using a local version of DealerLogic on each desktop. IT do not support DealerLogic, it is handled by the respective developers.\nCloudLogic makes use of a simple Remote Desktop Services application, which allows a dealer’s DealerLogic app to be installed on one of two AWS servers run in the Dealer Solutions’ legacy AWS account. From there, a dealer can then login via the portal with their provided username and password which then connects them to their DealerLogic instance hosted in the “Cloud”.\nCloudLogic diagram: IT support CloudLogic in a couple of ways:\nManaging CloudLogic users. You can find a guide here for creating new users for existing clients and you can find a guide here for a guide to disable users.\nIT are responsible for setting up new Clients in CloudLogic. This is a more involved process, but a guide can be followed here.\n",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/documentation/cloudlogic/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/workflows/cloudlogic/"
  },
  {
    "content": "Check the shortcut to DealerLogic is correct - The shortcut needs to point to DNSSuite.exe. Ensure the if they are networked that the network connection is working and there isn’t a red cross next to the drive.\nEnsure that unc paths are used. E.g. ‘\\server\\Dealerlogic’ instead of ‘c:\\Dealerlogic’.\n",
    "description": "",
    "tags": null,
    "title": "Configure DL Shortcut",
    "uri": "/troubleshooting/dealerlogic/configure-dl-shortcut/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Creating a Case in JSD",
    "uri": "/troubleshooting/dealerlogic/creating-a-case-in-jsd/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/documentation/dais/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/workflows/dais/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/documentation/dealerlogic/"
  },
  {
    "content": "Troubleshooting Flowchart Articles for DealerLogic can be found Here.\n%%{\rinit: {\r\"flowchart\": {\r\"stroke-width\" : \"40px\"\r}\r}\r}%%\rflowchart TB;\rA[Ask the client to reboot before\u003cbr\u003e commencing troubleshooting] --\u003e B{Is \u003cbr\u003eDealerLogic \u003cbr\u003erunning?}\rB:::d --\u003e|Yes| C{Is DealerLogic \u003cbr\u003einstalled on a \u003cbr\u003enetwork?}\rB --\u003e|No| D[Check the shortcut to DealerLogic \u003cbr\u003eis correct - The shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure the if they are \u003cbr\u003enetworked that the network \u003cbr\u003econnection is working and there isn't a \u003cbr\u003ered cross next to the drive.]\rC:::d --\u003e|Yes| E[Check the shortcut to DealerLogic \u003cbr\u003eis correct - the shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure that unc paths are \u003cbr\u003eused. E.g. '\\server\\Dealerlogic'\u003cbr\u003e instead of 'c:\\Dealerlogic'.]\rC --\u003e|No| F{Is the \u003cbr\u003eclient running \u003cbr\u003ethe latest version of \u003cbr\u003eDealerLogic and \u003cbr\u003eDNSSuite?}\rE:::g --\u003e F\rF:::d --\u003e|Yes| G{Is there\u003cbr\u003e a software or database\u003cbr\u003e error? E.g. Missing fields, \u003cbr\u003ecan't save data \u003cbr\u003eetc.}\rF --\u003e|No| H[Get the client to \u003cbr\u003eperform a Program Update to \u003cbr\u003eupdate to the latest of DealerLogic\u003cbr\u003e and DNSSuite. If this fails use the \u003cbr\u003eapplication distributor to provide\u003cbr\u003e the latest version.]\rH:::g --\u003e B\rD:::g --\u003e I{Is \u003cbr\u003ethe issue \u003cbr\u003eresolved?}\rI:::d --\u003e|Yes| J((Issue \u003cbr\u003eis resolved.))\rI --\u003e|No| K{Is \u003cbr\u003ethis a DL3\u003cbr\u003e client?}\rK:::d --\u003e|No| L((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rK --\u003e|Yes| M[Check that the database\u003cbr\u003econnection information is\u003cbr\u003ethe same as the license\u003cbr\u003efile. Troubleshoot DL3\u003cbr\u003econnection issues.]\rM:::g --\u003e N{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rN:::d --\u003e|Yes|O((Issue\u003cbr\u003eis resolved.))\rN --\u003e|No|P((Create\u003cbr\u003e a case for IT in \u003cbr\u003eJSD for the database\u003cbr\u003econnection issue\u003cbr\u003eto be \u003cbr\u003eresolved.))\rG:::d --\u003e |Yes|Q[Login to DealerLogic\u003cbr\u003eis Single User Mode.]\rG --\u003e |No|R{Is the\u003cbr\u003eDealerLogic running\u003cbr\u003every slowly?}\rR:::d --\u003e |Yes|S{Is this\u003cbr\u003ean MDB client?}\rR --\u003e |No|T[This could be a network\u003cbr\u003erelated issue. Thy restarting\u003cbr\u003ethe one machine of if\u003cbr\u003enetworked try restarting\u003cbr\u003eall machines.]\rS:::d --\u003e |Yes|U[Log in a single\u003cbr\u003euser and compact\u003cbr\u003ethe database.]\rS --\u003e |No|T\rT:::g --\u003e V{Is\u003cbr\u003e the issue\u003cbr\u003e resolved?}\rU:::g --\u003e AC{Is \u003cbr\u003e the issue\u003cbr\u003eresolved?}\rV:::d --\u003e |Yes|W((Issue\u003cbr\u003eis resolved.))\rV --\u003e |No|X[Ask the client whether\u003cbr\u003ethey can turn off the\u003cbr\u003eantivirus / firewall on their\u003cbr\u003e machine and see whether\u003cbr\u003e that resolves the issue.]\rX:::g --\u003e Y{Is \u003cbr\u003ethe issue\u003cbr\u003e resolved?}\rY:::d --\u003e |Yes|Z[There is an issue with the\u003cbr\u003eclients firewall settings. Ensure\u003cbr\u003e DealerLogic is allowed \u003cbr\u003e and relevant dealersolutions\u003cbr\u003eurls are whitelisted.]\rY --\u003e |No|AA((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rZ:::g --\u003e AB((Issue\u003cbr\u003eis resolved.))\rAC:::d --\u003e |Yes|AD((Recommend\u003cbr\u003efor the client to\u003cbr\u003eUpdate to \u003cbr\u003eCloudLogic.))\rAC --\u003e |No|T\rQ:::g --\u003e AE{Is\u003cbr\u003ethis a DL2\u003cbr\u003eclient?}\rAE:::d --\u003e |Yes|AF[Perform a database\u003cbr\u003ecompact and repair.]\rAE --\u003e |No|AG[Try a Backdate of the software\u003cbr\u003eby a version. E.g. If the current \u003cbr\u003eversion is 2.562 try backdating\u003cbr\u003eto version 2.561.]\rAG:::g --\u003e AH{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAH:::d --\u003e |Yes|AI((Issue\u003cbr\u003eis resolved.))\rAF:::g --\u003e AL{Is \u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAL:::d --\u003e |Yes|AM((Issue\u003cbr\u003eis resolved.))\rAL --\u003e |No|AG\rAH --\u003e |No|AN[Try and replicate the issue in\u003cbr\u003e AppSupport. Open up DealerLogic via \u003cbr\u003eV:/Client/Services/AppSupport/Dealerlogic.\u003cbr\u003e Ensure that the version at the bottom \u003cbr\u003eof AppSupport matches the clients version.]\rAN:::g --\u003e AO((Create a \u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rclick D \"/troubleshooting/dealerlogic/configure-dl-shortcut/\"\rclick E \"/troubleshooting/dealerlogic/configure-dl-shortcut/\"\rclick A \"/troubleshooting/dealerlogic/rebooting/\"\rclick T \"/troubleshooting/dealerlogic/rebooting/\"\rclick L \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick AA \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick AO \"/troubleshooting/dealerlogic/bucket-o-stuff/\"\rclick P \"/troubleshooting/dealerlogic/creating-a-case-in-jsd/\"\rclick H \"/troubleshooting/dealerlogic/updating-dl-and-dnssuite/\"\rclick M \"/troubleshooting/dealerlogic/validating-dl-license-details/\"\rclick Q \"/troubleshooting/dealerlogic/logging-in-single-user-mode/\"\rclick AF \"/troubleshooting/dealerlogic/performing-a-database-compact-and-repair/\"\rclick U \"/troubleshooting/dealerlogic/logging-in-single-user-mode/\"\rclick AG \"/troubleshooting/dealerlogic/backdating-dl-to-an-earlier-version/\"\rclick AN \"/troubleshooting/dealerlogic/appsupport/replicating-an-issue-in-appsupport/\"\rclick Z \"/troubleshooting/dealerlogic/client-firewall-issues/\"\rclassDef g fill:#DDFFBB\rclassDef d fill:#FFEEBB\r",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/troubleshooting/dealerlogic/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/workflows/dealerlogic/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Documentation",
    "uri": "/documentation/"
  },
  {
    "content": " Right click anywhere on the page and select “Inspect” from the bottom. Click the “»” from the top-right banner and select “Application”. Listed under Storage, double click “Cookies” or click on the arrow to expand it. Select the the cloudlogic url to expose the session cookies. Click on “Clear all cookies”. Close the Inspect window and refresh the page. ",
    "description": "",
    "tags": null,
    "title": "How to Force Logoff",
    "uri": "/troubleshooting/cloudlogic/how-to-force-logoff/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Invalidations",
    "uri": "/workflows/invalidations/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Logging in Single User Mode",
    "uri": "/troubleshooting/dealerlogic/logging-in-single-user-mode/"
  },
  {
    "content": "While you can reprocess a transaction electronically if you invalidate it within 21 days, if your original transaction date is beyond 21 days, you will need to submit reprocessing paperwork to have the transaction corrected by QT. It is important to remember that you will need to provide evidence of your error, so ensure that you have this first before starting your invalidation.\nHighlight the completed transaction in your dais transactions box and either right click and select invalidate transaction or select Invalidate Transaction on the bottom right hand corner of the transactions box.\nA pop up window will appear to tell you the request will be sent to Dealer Solutions for approval and processing\nClick on OK. A Transaction Invalidation Request box will then appear with the transaction information and a field called REASON for you to record the reason for invalidation. You have the option to selection multiple reasons if you need to. It is very important that you tell us about ALL the reasons you want to invalidate a transaction for – as this will determine which fields you are able to modify in your finalized transaction.\nOnce a reason is entered the requirements for that invalidation reason will appear below the Lodge request box. Read the requirements and ensure that you have made any required statements in the Explanation field e.g. If the vehicle has not left the dealership or not and are aware of any paperwork that may be necessary to fax/email to Dealer Solutions.\nLodge Request.\nYou will receive a prompt advising you that this transaction is outside your 21 day backdate limit and that you will need to reprint this transaction with alterations required – click yes.\nYour transaction will now open allowing you to make the changes necessary. Click print\nYour transaction paperwork will print, along with a letter requesting QT to reprocess and charge your DX account. Ensure that you have signed where appropriate.\nDouble check that you have ALL of the paperwork that is required. (see next section for thorough list)\nFax to Dealer Solutions to send to QT for reprocessing.\nList of documents that are required by Rego Easy Unit (QT ESP-Support) with request for reprocessing: Copy of registration application with correct details\nCertificate or nomination form\nVehicle details form or safety certificate (whichever is applicable)\nAuthority to sign on behalf of customer (if applicable)\nAuthority to debit your DX000 account\nSigned statement describing the error\nDuty exemption documents (if applicable)\nConcession application and supporting documents (if applicable)\nPurchase order/invoice or contract\n",
    "description": "",
    "tags": null,
    "title": "Manual Reprocessing",
    "uri": "/workflows/invalidations/manual-reprocessing/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Performing a Database Compact and Repair",
    "uri": "/troubleshooting/dealerlogic/performing-a-database-compact-and-repair/"
  },
  {
    "content": "Common Scenarios Personalised Plates are vacant -\u003e To be attached to new vehicle Register into customers name with Personalised Plates Personalised Plates are vacant -\u003e To be attached to registered demo Transfer to customer with Standard Plates attached Replace plate to Personalised Plates Personalised Plates on customers trade-in vehicle -\u003e To be attached to new vehicle Replace plates from Personalised Plates and attach Standard Plate Acquire customers trade-in with Standard Plates attached Register new vehicle in customers name with Personalised Plates Personalised Plates on customers trade-in vehicle -\u003e To be attached to registered demo Replace plates from Personalised Plates and attach Standard Plate Acquire customers trade-in with Standard Plates attached Transfer demo customer is buying with current plates Replace plates to Personalised Plates ",
    "description": "",
    "tags": null,
    "title": "Personalised Plates (PPQ)",
    "uri": "/documentation/dais/personalised-plates-ppq/"
  },
  {
    "content": "Personalised Plates are vacant -\u003e To be attached to new vehicle Register into customers name with Personalised Plates Personalised Plates are vacant -\u003e To be attached to registered demo Transfer to customer with Standard Plates attached Replace plate to Personalised Plates Personalised Plates on customers trade-in vehicle -\u003e To be attached to new vehicle Replace plates from Personalised Plates and attach Standard Plate Acquire customers trade-in with Standard Plates attached Register new vehicle in customers name with Personalised Plates Personalised Plates on customers trade-in vehicle -\u003e To be attached to registered demo Replace plates from Personalised Plates and attach Standard Plate Acquire customers trade-in with Standard Plates attached Transfer demo customer is buying with current plates Replace plates to Personalised Plates ",
    "description": "",
    "tags": null,
    "title": "Personalised Plates Scenarios",
    "uri": "/troubleshooting/dais/personalised-plates-scenarios/"
  },
  {
    "content": "Just tell the client to turn it off and on again, Lol. Is is that hard?\n",
    "description": "",
    "tags": null,
    "title": "Rebooting",
    "uri": "/troubleshooting/dealerlogic/rebooting/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Replicating an Issue in AppSupport",
    "uri": "/troubleshooting/dealerlogic/appsupport/replicating-an-issue-in-appsupport/"
  },
  {
    "content": "There are 4 valid concessions for STE, these are:\nEx-Serviceperson Local/Semi Government Government Qualifying Institutes Ex-Serviceperson These are individuals granted Stamp Duty Exemption from the Department of Veterans Affairs. Typically they are known as TPI, Totally and Permanently incapacitated by more than 70% or be assessed to have at least 50 impairment points to be eligible. As such, they are issued with one of two letters from the Department of Veterans Affairs (see example). The exemption category you will select is ‘Ex-Serviceperson’ from the combo on the Rego Detail tab. You will note that when ex-serviceperson is selected, the concessional registration category (ex serviceperson) is automatically selected for you.\nCopies of the transaction paperwork and a copy of either of the letters needs to be included with your TRAILS filing.\nPlease be advised that Ex-Service Persons are exempt from re-establishing their eligibility on subsequent applications. If an eligible customer does not have a letter from the DVA, dealerships can contact their Approved Service Provider to enquire as to whether the customer has already established their eligibility. As per concession conditions, only one concession is allowed between spouses for one vehicle and one recreational ship.\nLocal/Semi Government Stamp Duty exemption and Concession When Local Semi Government Concession is applied in a transaction the Stamp Duty exemption gets picked up automatically due to the concession ‘Qual’ attached to the CRN. If they have LGOV/SGOV attached to the crn they are using then there is never a need to enter any Stamp Duty Exemption reason in the transaction. Qualifying Institute would never be used along with Local Semi Government Concession. No supporting documentation required – all recorded on the CRN.\nGovernment Stamp Duty Exemption only Various government departments may have ‘Quals’ attached to their crns and again will attract automatic Stamp Duty exemption with out the operator having to enter anything in the Stamp Duty exemption field. ‘Quals’ are as follows – GOVT, LGOV (as above), FGOV, CGOV, SGOV (as above). No supporting documentation required – all recorded on the CRN.\nGOVT = Government Department LGOV = Local Government\nFGOV = Federal Government\nSGOV = Semi Government Body\nCGOV = Commonwealth Government Authority\nQualifying Institute Stamp Duty Exemption reason Operator has to provide dealership with Qualifying Use Statement AND notice of registration to apply this exemption.\nNOTE: This does NOT go hand in hand with concession - Charitable and community service concessions must be checked with DS before adding to transaction ",
    "description": "",
    "tags": null,
    "title": "Stamp Duty Exemptions",
    "uri": "/documentation/dais/stamp-duty-exemptions/"
  },
  {
    "content": "dsdfsadf\n",
    "description": "",
    "tags": null,
    "title": "Transaction Flowchart",
    "uri": "/troubleshooting/dais/transaction-flowchart/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Transactions",
    "uri": "/documentation/dais/transactions/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Troubleshooting",
    "uri": "/troubleshooting/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Updating DL and DNSSuite",
    "uri": "/troubleshooting/dealerlogic/updating-dl-and-dnssuite/"
  },
  {
    "content": "Phone CAA Support 1300 66 11 33 Email CloudLogic https://cloudlogic.coxautoinc.com.au IT caa.itsupport@coxautoinc.com QT esp-support@tmr.qld.gov.au Accounts caa.accreceivable.cass@coxautoinc.com Data/Website help@coxautoretail.com.au Manuals/Documentation DAIS Manual DAIS User Manual (dealersolutions.com.au) DealerLogic Manual Dealerlogic Online Manual (dealersolutions.com.au) DealerLogic Pages Dealerlogic - Confluence (atlassian.net) ",
    "description": "",
    "tags": null,
    "title": "Useful Links",
    "uri": "/documentation/useful-links/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Validating DL License Details",
    "uri": "/troubleshooting/dealerlogic/validating-dl-license-details/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Workflows",
    "uri": "/workflows/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Authentication Issues",
    "uri": "/troubleshooting/cloudlogic/authentication-issues/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/troubleshooting/cloudlogic/"
  },
  {
    "content": "Troubleshooting Flowchart Articles for DealerLogic can be found Here.\nflowchart TB;\rA[Obtain DX number \u003cbr\u003eand from client] --\u003e B{The issue is resolved!}\r",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/troubleshooting/dais/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Categories",
    "uri": "/categories/"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Tags",
    "uri": "/tags/"
  }
]
