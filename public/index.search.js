var relearn_search_index = [
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Articles",
    "uri": "/articles/index.html"
  },
  {
    "content": "\rflowchart TB;\rA[Ask the client to reboot before\u003cbr\u003e commencing troubleshooting] --\u003e B{Is \u003cbr\u003eDealerLogic \u003cbr\u003erunning?}\rB --\u003e|Yes| C{Is DealerLogic \u003cbr\u003einstalled on a \u003cbr\u003enetwork?}\rB --\u003e|No| D[Check the shortcut to DealerLogic \u003cbr\u003eis correct - The shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure the if they are \u003cbr\u003enetworked that the network \u003cbr\u003econnection is working and there isn't a \u003cbr\u003ered cross next to the drive.]\rC --\u003e|Yes| E[Check the shortcut to DealerLogic \u003cbr\u003eis correct - the shortcut needs to point \u003cbr\u003eto DNSSuite.exe. Ensure that unc paths are \u003cbr\u003eused. E.g. '\\server\\Dealerlogic'\u003cbr\u003e instead of 'c:\\Dealerlogic'.]\rC --\u003e|No| F{Is the \u003cbr\u003eclient running \u003cbr\u003ethe latest version of \u003cbr\u003eDealerLogic and \u003cbr\u003eDNSSuite?}\rE --\u003e F\rF --\u003e|Yes| G{Is there\u003cbr\u003e a software or database\u003cbr\u003e error? E.g. Missing fields, \u003cbr\u003ecan't save data \u003cbr\u003eetc.}\rF --\u003e|No| H[Get the client to \u003cbr\u003eperform a Program Update to \u003cbr\u003eupdate to the latest of DealerLogic\u003cbr\u003e and DNSSuite. If this fails use the \u003cbr\u003eapplication distributor to provide\u003cbr\u003e the latest version.]\rH --\u003e B\rD --\u003e I{Is \u003cbr\u003ethe issue \u003cbr\u003eresolved?}\rI --\u003e|Yes| J((Issue \u003cbr\u003eis resolved.))\rI --\u003e|No| K{Is \u003cbr\u003ethis a DL3\u003cbr\u003e client?}\rK --\u003e|No| L((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rK --\u003e|Yes| M[Check that the database\u003cbr\u003econnection information is\u003cbr\u003ethe same as the license\u003cbr\u003efile. Troubleshoot DL3\u003cbr\u003econnection issues.]\rM --\u003e N{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rN --\u003e|Yes|O((Issue\u003cbr\u003eis resolved.))\rN --\u003e|No|P((Create\u003cbr\u003e a casefor IT in \u003cbr\u003eJSD for the database\u003cbr\u003econnection issue\u003cbr\u003eto be \u003cbr\u003eresolved.))\rG --\u003e |Yes|Q[Login to DealerLogic\u003cbr\u003eis Single User Mode.]\rG --\u003e |No|R{Is the\u003cbr\u003eDealerLogic running\u003cbr\u003every slowly?}\rR --\u003e |Yes|S{Is this\u003cbr\u003ean MDB client?}\rR --\u003e |No|T[This could be a network\u003cbr\u003erelated issue. Thy restarting\u003cbr\u003ethe one machine of if\u003cbr\u003enetworked try restarting\u003cbr\u003eall machines.]\rS --\u003e |Yes|U[Log in a single\u003cbr\u003euser and compact\u003cbr\u003ethe database.]\rS --\u003e |No|T\rT --\u003e V{Is\u003cbr\u003e the issue\u003cbr\u003e resolved?}\rU --\u003e AC{Is \u003cbr\u003e the issue\u003cbr\u003eresolved?}\rV --\u003e |Yes|W((Issue\u003cbr\u003eis resolved.))\rV --\u003e |No|X[Ask the client whether\u003cbr\u003ethey can turn off the\u003cbr\u003eantivirus / firewall on their\u003cbr\u003e machine and see whether\u003cbr\u003e that resolves the issue.]\rX --\u003e Y{Is \u003cbr\u003ethe issue\u003cbr\u003e resolved?}\rY --\u003e |Yes|Z[There is an issue with the\u003cbr\u003eclients firewall settings. Ensure\u003cbr\u003e DealerLogic is allowed \u003cbr\u003e and relevant dealersolutions\u003cbr\u003eurls are whitelisted.]\rY --\u003e |No|AA((Create a\u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\rZ --\u003e AB((Issue\u003cbr\u003eis resolved.))\rAC --\u003e |Yes|AD((Recommend\u003cbr\u003efor the client to\u003cbr\u003eUpdate to \u003cbr\u003eCloudLogic.))\rAC --\u003e |No|T\rQ --\u003e AE{Is\u003cbr\u003ethis a DL2\u003cbr\u003eclient?}\rAE --\u003e |Yes|AF[Perform a database\u003cbr\u003ecompact and repair.]\rAE --\u003e |No|AG[Try a Backdate of the software\u003cbr\u003eby a version. E.g. If the current \u003cbr\u003eversion is 2.562 try backdating\u003cbr\u003eto version 2.561.]\rAG --\u003e AH{Is\u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAH --\u003e |Yes|AI((Issue\u003cbr\u003eis resolved.))\rAF --\u003e AL{Is \u003cbr\u003ethe issue\u003cbr\u003eresolved?}\rAL --\u003e |Yes|AM((Issue\u003cbr\u003eis resolved.))\rAL --\u003e |No|AG\rAH --\u003e |No|AN[Try and replicate the issue in\u003cbr\u003e AppSupport. Open up DealerLogic via \u003cbr\u003eV:/Client/Services/AppSupport/Dealerlogic.\u003cbr\u003e Ensure that the version at the bottom \u003cbr\u003eof AppSupport matches the clients version.]\rAN --\u003e AO((Create a \u003cbr\u003ecase of Bucket\u003cbr\u003eO' Stuff.))\r",
    "description": "",
    "tags": null,
    "title": "DealerLogic",
    "uri": "/dealerlogic/index.html"
  },
  {
    "content": "\rgraph TB;\rA[Hard edge] --\u003e|Link text| B(Round edge)\rB --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e}\rC --\u003e|One| D[Result one]\rC --\u003e|Two| E((j kkljlkjlkjlk))\rclick E \"/cloudlogic/authentication-issues/\"\rclick B \"/cloudlogic/authentication-issues/\"\r",
    "description": "",
    "tags": null,
    "title": "Example",
    "uri": "/articles/example/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "Authentication Issues",
    "uri": "/cloudlogic/authentication-issues/index.html"
  },
  {
    "content": "\rgraph TB;\rA[Hard edge] --\u003e|Link text| B(Round edge)\rB --\u003e C{\u003cstrong\u003eDecision\u003c/strong\u003e}\rC --\u003e|One| D[Result one]\rC --\u003e|Two| E((j kkljlkjlkjlk))\rclick E \"/cloudlogic/authentication-issues/\"\rclick B \"/cloudlogic/authentication-issues/\"\r",
    "description": "",
    "tags": null,
    "title": "CloudLogic",
    "uri": "/cloudlogic/index.html"
  },
  {
    "content": "",
    "description": "",
    "tags": null,
    "title": "DAIS",
    "uri": "/dais/index.html"
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
