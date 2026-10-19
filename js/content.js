/* Centralized site content. Edit this file to update all seven pages. */
window.SITE_CONTENT = {
  "site": {
    "name": "NBK-E Monitoring Onboarding",
    "brandName": "IT Monitoring",
    "brandSubtitle": "onboarding console",
    "homeUrl": "index.html",
    "logo": {
      "src": "images/nbk-logo.png",
      "alt": "NBK Egypt"
    },
    "language": "en",
    "footer": {
      "organization": "NBK Egypt — IT Enterprise Monitoring",
      "notice": "Internal onboarding reference · not for external distribution"
    }
  },
  "navigation": {
    "mobile": [
      {
        "label": "Overview",
        "href": "index.html"
      },
      {
        "label": "Access",
        "href": "access.html"
      },
      {
        "label": "Systems",
        "href": "systems.html"
      },
      {
        "label": "ATM",
        "href": "atm.html"
      },
      {
        "label": "Infrastructure",
        "href": "infrastructure.html"
      },
      {
        "label": "Personal services",
        "href": "medical-care.html"
      },
      {
        "label": "Frequently asked",
        "href": "faq.html"
      }
    ],
    "sidebar": [
      {
        "label": "Overview",
        "href": "index.html"
      },
      {
        "label": "Access checklist",
        "href": "access.html"
      },
      {
        "label": "Systems & portals",
        "href": "systems.html"
      },
      {
        "label": "ATM Operations",
        "href": "atm.html"
      },
      {
        "label": "Infrastructure",
        "href": "infrastructure.html"
      },
      {
        "label": "Personal services",
        "href": "medical-care.html"
      },
      {
        "label": "Frequently asked",
        "href": "faq.html"
      }
    ]
  },
  "ui": {
    "progressLabel": "Onboarding progress",
    "initialProgress": "0%",
    "initialCount": "0",
    "themes": {
      "light": "Day ops",
      "dark": "Night ops"
    },
    "note": "Note",
    "pendingNote": "Not supplied yet",
    "issueColumns": [
      "Issue",
      "What it means",
      "Operational impact"
    ],
    "stopping": "ATM-stopping",
    "verify": "Verify status",
    "uses": "What it is used for",
    "when": "When you’ll use it",
    "open": "Open",
    "noResults": "No matching items. Try another search.",
    "partial": "Some services unavailable"
  },
  "overview": {
    "progressLinkLabel": "View access checklist and onboarding progress",
    "pageTitle": "Overview · NBK-E Monitoring Onboarding",
    "kicker": "IT Enterprise Monitoring & Process Automation",
    "heading": "Welcome to the watch floor.",
    "description": "The IT Enterprise Monitoring team keeps critical banking services visible, stable and supported. This onboarding space brings together the access, responsibilities and references you need for the role.",
    "stats": {
      "completion": "Access complete",
      "completed": "Items completed",
      "pending": "Still pending"
    },
    "mission": {
      "heading": "How the team works",
      "description": "The day-to-day work is divided into two connected tracks: Infrastructure and ATM Operations."
    },
    "workstreams": {
      "heading": "Two connected workstreams",
      "description": "Both tracks share the same goal: identify issues early, communicate clearly and follow them through to resolution.",
      "infrastructure": {
        "label": "01 · Infrastructure",
        "title": "Monitor the IT estate",
        "description": "Focus on the health of the IT environment and the response to service-impacting issues.",
        "items": [
          "Monitor servers, databases and the wider monitoring environment.",
          "Send outage notifications for IT-related service interruptions.",
          "Open an incident when an issue occurs.",
          "Escalate and follow up on issues until they are resolved."
        ]
      },
      "atm": {
        "label": "02 · ATM Operations",
        "title": "Follow ATM faults",
        "description": "Monitor ATM faults and service status, then follow reported issues through to resolution."
      }
    },
    "procedures": {
      "label": "Procedures PDF",
      "status": "Path to procedures: shared//documents/ATM Procedure/IT Monitoring Procedure V5.0.pdf."
    },
    "timeline": {
      "heading": "Your first four weeks",
      "description": "A rough shape for how access and responsibility ramp up. Track the detail on the Access checklist page.",
      "weeks": [
        {
          "label": "Week 1",
          "title": "Learn the floor",
          "description": "Read ATM procedures, shadow live shifts, get familiar with the ticketing system."
        },
        {
          "label": "Week 2",
          "title": "Start logging",
          "description": "Create and close IT incidents, send your first outage notifications."
        },
        {
          "label": "Week 3",
          "title": "Access rollout",
          "description": "Submit remaining access requests and get monitoring credentials granted."
        },
        {
          "label": "Week 4",
          "title": "Independent shift",
          "description": "Handle ATM incidents on CA end‑to‑end and cover a monitoring shift solo."
        }
      ]
    },
    "collaboration": {
      "heading": "Who we work with",
      "description": "The IT Monitor team sits at the center — here's who to loop in for what.",
      "center": {
        "title": "IT Monitor Team",
        "subtitle": "that's us"
      },
      "groups": [
        {
          "label": "Business & operations",
          "teams": [
            {
              "name": "HQ Team",
              "description": "ATM replenishment and cash reconciliation."
            },
            {
              "name": "ATM Optimization",
              "description": "New ATM installs, removals and replacements; coordinates landlord permissions and site issues."
            },
            {
              "name": "IT Digital Payment",
              "description": "Owns transactions (123, Host), ATM batch runs, online transactions and Power Card."
            },
            {
              "name": "IT ITSM",
              "description": "Runs the service desk and owns the monitoring dashboards."
            }
          ]
        },
        {
          "label": "Infrastructure",
          "teams": [
            {
              "name": "IT DBA",
              "description": "Disk space on Windows servers and ETL jobs."
            },
            {
              "name": "IT AIX",
              "description": "Disk space on Linux servers, IPN and transaction servers."
            },
            {
              "name": "IT Admin",
              "description": "Admin server ownership."
            },
            {
              "name": "Application Support",
              "description": "RPA, SMS and Laserfiche applications."
            }
          ]
        }
      ]
    },
    "responsibilities": {
      "heading": "Day-to-day responsibilities",
      "items": [
        "Monitor servers, databases and IT monitoring services",
        "Send IT-related outage notifications",
        "Open incidents when an issue occurs",
        "Escalate and follow up until issues are resolved",
        "Monitor and follow ATM faults"
      ]
    }
  },
  "access": {
    "pageTitle": "Access checklist · NBK-E Monitoring Onboarding",
    "heading": "Access checklist",
    "description": "The access, forms and roles you need for the job. Tick items off as you go; your progress is saved on this device and reflected in the ring on every page.",
    "stats": {
      "completed": "Completed",
      "pending": "Pending",
      "total": "Total tracked"
    },
    "searchPlaceholder": "Search the checklist…",
    "groups": {
      "access": "Access requests"
    },
    "items": {
      "access-sap": {
        "title": "SAP Self‑Service",
        "note": "HR · needs authorization",
        "inputId": "a22",
        "group": "access",
        "searchKeywords": "sap employee self service hr authorization",
        "systemKey": "sap_self_service",
        "linkLabel": "Open"
      },
      "access-aptra": {
        "title": "Aptra",
        "note": "ATM monitoring",
        "inputId": "a11",
        "group": "access",
        "searchKeywords": "aptra atm monitoring",
        "systemKey": "aptra",
        "linkLabel": "Open"
      },
      "access-powercard": {
        "title": "Power Card",
        "note": "Power Card User Form · monitor privilege via IT Digital Team",
        "inputId": "a1",
        "group": "access",
        "searchKeywords": "power card powercard user form digital payment digital team",
        "systemKey": "power_card",
        "linkLabel": "Open"
      },
      "access-externalmail": {
        "title": "Outlook: External mail",
        "note": "Send mail outside NBK‑E - External Mail Access Form · IT Admin",
        "inputId": "a10",
        "group": "access",
        "searchKeywords": "external mail access form it admin outside nbk-e"
      },
      "access-dashboards": {
        "title": "Dashboards — Grafana",
        "note": "Executed by ITSM Team",
        "inputId": "a17",
        "group": "access",
        "searchKeywords": "dashboards grafana itsm team",
        "systemKey": "grafana",
        "linkLabel": "Open"
      },
      "access-ca": {
        "title": "CA Service Desk",
        "note": "CA Service Management Access Form · ITSM Team",
        "inputId": "a4",
        "group": "access",
        "searchKeywords": "ca service desk management access form itsm ticketing",
        "systemKey": "ca_service_desk",
        "linkLabel": "Open"
      },
      "access-spectrum": {
        "title": "CA Spectrum",
        "note": "CA Infrastructure Monitoring Access Form · ITSM Team",
        "inputId": "a9",
        "group": "access",
        "searchKeywords": "ca spectrum infrastructure monitoring access form itsm",
        "systemKey": "spectrum",
        "linkLabel": "Open"
      },
      "access-perfcenter": {
        "title": "CA Performance Center",
        "note": "CA Infrastructure Monitoring Access Form · ITSM Team",
        "inputId": "a8",
        "group": "access",
        "searchKeywords": "ca performance center infrastructure monitoring access form itsm",
        "systemKey": "performance_center",
        "linkLabel": "Open"
      },
      "access-uim": {
        "title": "UIM",
        "note": "CA Infrastructure Monitoring Access Form · ITSM Team",
        "inputId": "a7",
        "group": "access",
        "searchKeywords": "uim infrastructure monitoring access form itsm",
        "systemKey": "uim",
        "linkLabel": "Open"
      },
      "access-t24": {
        "title": "T24",
        "note": "T24 Access Form · Application Owner · needs authorization",
        "inputId": "a2",
        "group": "access",
        "searchKeywords": "t24 access form application owner authorization",
        "systemKey": "t24",
        "linkLabel": "Open"
      },
      "access-vynamic": {
        "title": "Vynamic",
        "note": "Application and web portal · Vynamic View Monitor ATM Form · executed by Help Desk Team",
        "inputId": "a12",
        "group": "access",
        "searchKeywords": "vynamic application web portal view monitor atm form help desk team",
        "linkLabel": "Open portal",
        "linkHref": "https://headq-vymap-p.awb.local:8443/webconsole/login.xhtml"
      },
      "access-ad": {
        "title": "Active Directory",
        "note": "Role for users and ATMs · executed by Help Desk Team",
        "inputId": "a14",
        "group": "access",
        "searchKeywords": "active directory monitor privilege help desk team"
      },
      "access-release-mail": {
        "title": "Release mail",
        "note": "Receive release emails needed for operational follow-up",
        "inputId": "a23",
        "group": "access",
        "searchKeywords": "release mail email notification deployment change"
      },
      "access-solidcore": {
        "title": "Solid Core",
        "note": "NCR ATM Security SolidCore Form · Digital Team · needs authorization",
        "inputId": "a3",
        "group": "access",
        "searchKeywords": "solid core solidcore ncr atm security digital team authorization",
        "systemKey": "solid_core",
        "linkLabel": "Open"
      },
      "access-ncrhde": {
        "title": "NCR HDE",
        "note": "ATM device estate · needs authorization",
        "inputId": "a21",
        "group": "access",
        "searchKeywords": "ncr hde atm device estate authorization",
        "systemKey": "ncr_hde",
        "linkLabel": "Open"
      },
      "access-forex": {
        "title": "Forex",
        "note": "ATM NCR Forex Form · needs authorization",
        "inputId": "a6",
        "group": "access",
        "searchKeywords": "forex atm ncr forex form application team",
        "linkLabel": "Open",
        "linkHref": "https://10.99.1.200/FFMS_V2/MainPages/Login.aspx"
      },
      "access-wallet": {
        "title": "Wallet",
        "note": "Wallet access needed for work activities",
        "inputId": "a24",
        "group": "access",
        "searchKeywords": "wallet access digital payment",
        "linkLabel": "Open",
        "linkHref": "https://headq-fncrap-p.awb.local/portal/MainPages/0000_Login.aspx"
      },
      "access-nexthink": {
        "title": "Nexthink",
        "note": "Nexthink Access Form · requested privilege: ITSM",
        "inputId": "a5",
        "group": "access",
        "searchKeywords": "nexthink access form itsm privilege"
      },
      "access-webex": {
        "title": "Webex",
        "note": "Executed by Help Desk Team",
        "inputId": "a15",
        "group": "access",
        "searchKeywords": "webex help desk team"
      },
      "access-teams": {
        "title": "Microsoft Teams",
        "note": "Executed by Help Desk Team",
        "inputId": "a16",
        "group": "access",
        "searchKeywords": "microsoft teams help desk team"
      },
      "access-obanking": {
        "title": "Mobile banking",
        "note": "",
        "inputId": "a19",
        "group": "access",
        "searchKeywords": "mobile banking"
      },
      "access-ivr": {
        "title": "IVR",
        "note": "Apply via Online Banking",
        "inputId": "a20",
        "group": "access",
        "searchKeywords": "ivr apply online banking"
      }
    }
  },
  "systemsPage": {
    "pageTitle": "Systems & Portals · NBK-E Monitoring Onboarding",
    "heading": "Systems & portals",
    "description": "Quick links to every login — a directory, not a second checklist. Track completion on the Access checklist page.",
    "searchPlaceholder": "Search systems…",
    "faqHeading": "Frequently asked",
    "faqs": [
      {
        "question": "How do I create an ATM incident?",
        "answer": "Log it through CA Service Desk — that's the ticketing system of record for ATM and IT incidents.",
        "initiallyOpen": true
      },
      {
        "question": "When should I send an outage email?",
        "answer": "Any time a major service interruption is affecting customers or internal users — send it as soon as the issue is confirmed.",
        "initiallyOpen": false
      },
      {
        "question": "Who owns Power Card?",
        "answer": "IT Digital Payment Team owns Power Card and grants the monitor privilege for it.",
        "initiallyOpen": false
      },
      {
        "question": "Who manages the dashboards?",
        "answer": "The ITSM Team owns Grafana and the other monitoring dashboards.",
        "initiallyOpen": false
      },
      {
        "question": "Who do I contact for an ATM site issue?",
        "answer": "ATM Optimization — they coordinate installs, removals and landlord permissions for site access.",
        "initiallyOpen": false
      }
    ]
  },
  "systems": {
    "power_card": {
      "description": "Including transaction follow-up, issue identification, and coordinating with the relevant teams to ensure smooth ATM operations.",
      "name": "Power Card",
      "team": "IT Digital Team",
      "searchKeywords": "power card digital team",
      "link": {
        "label": "Open Power Card",
        "href": "https://10.99.32.66:9444/PowerCardv35/#/login",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "aptra": {
      "description": "Used to monitor ATM issues, availability, and device status, helping identify faults and coordinate follow-up with the relevant teams to restore service.",
      "name": "Aptra",
      "team": "ATM monitoring",
      "searchKeywords": "aptra atm monitoring",
      "link": {
        "label": "Open Aptra",
        "href": "https://headq-aptraap-p.awb.local/cxp-core-webapp/login",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "ca_service_desk": {
      "description": "Records and tracks IT incidents and service requests, assigns them to the responsible teams, and follows progress through resolution.",
      "name": "CA Service Desk",
      "team": "Ticketing · ITSM Team",
      "searchKeywords": "ca service desk ticketing itsm",
      "link": {
        "label": "Open CA Service Desk",
        "href": "https://mynbkservices:8443/CAisd/servicedesk",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "grafana": {
      "description": "Displays monitoring dashboards and metrics to help follow service health, spot unusual behavior, and investigate operational issues.",
      "name": "Grafana",
      "team": "Dashboards · ITSM Team",
      "searchKeywords": "grafana dashboards itsm",
      "link": {
        "label": "Open Grafana",
        "href": "https://itdashboards/login",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "t24": {
      "description": "Supports core banking operations, including customer accounts and banking transactions, and helps investigate related application issues.",
      "name": "T24",
      "team": "Core banking · Application Owner",
      "searchKeywords": "t24 application owner",
      "link": {
        "label": "Open T24",
        "href": "https://t24production/Browser/Logoff",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "solid_core": {
      "description": "Supports ATM security by controlling authorized software and monitoring changes to help protect devices from unauthorized activity.",
      "name": "Solid Core",
      "team": "ATM security · Digital Team",
      "searchKeywords": "solid core digital team",
      "link": {
        "label": "Open Solid Core",
        "href": "https://headq-solidap-p:8443/core/orionNavigationLogin.do",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "ncr_hde": {
      "description": "Provides visibility into the NCR ATM device estate to support device status follow-up and coordination of maintenance issues.",
      "name": "NCR HDE",
      "team": "ATM device estate",
      "searchKeywords": "ncr hde device estate",
      "link": {
        "label": "Open NCR HDE",
        "href": "https://headq-hdesdw-p/Account/LogOn",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "sap_self_service": {
      "description": "Provides employee self-service access to HR information and requests, such as personal details and leave requests, according to assigned permissions.",
      "name": "SAP Self‑Service",
      "team": "HR",
      "searchKeywords": "sap employee self service hr",
      "link": {
        "label": "Open SAP ESS",
        "href": "https://headq-hrap-p.awb.local:44330/sap/bc/ui5_ui5/sap/ARSRVC_SUITE_PB/main.html",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "spectrum": {
      "description": "Monitors network devices and connectivity, raises fault alarms, and helps identify affected infrastructure for escalation and recovery.",
      "name": "Spectrum",
      "team": "Network monitoring · ITSM Team",
      "searchKeywords": "spectrum netops itsm",
      "link": {
        "label": "Open Spectrum",
        "href": "https://caspectrum/spectrum/",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "performance_center": {
      "description": "Tracks network performance metrics, such as utilization and response times, to identify bottlenecks and investigate service degradation.",
      "name": "Performance Center",
      "team": "Network monitoring · ITSM Team",
      "searchKeywords": "performance center netops itsm",
      "link": {
        "label": "Open Performance Center",
        "href": "https://capc:8382/sso/sign-in.jsp",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    },
    "uim": {
      "description": "Monitors infrastructure health and availability, including servers and resource usage, and provides alerts for operational follow-up.",
      "name": "UIM",
      "team": "Infrastructure monitoring · ITSM Team",
      "searchKeywords": "uim infrastructure monitoring itsm",
      "link": {
        "label": "Open UIM",
        "href": "https://uimportal/operatorconsole_portlet/standalone_login.jsp",
        "target": "_blank",
        "rel": "noopener noreferrer"
      }
    }
  },
  "progress": {
    "storagePrefix": "nbke:",
    "themeStorageKey": "nbke:theme",
    "seedStorageKey": "nbke:seeded",
    "defaultTheme": "light",
    "trackedItemIds": [
      "access-powercard",
      "access-t24",
      "access-solidcore",
      "access-ca",
      "access-nexthink",
      "access-forex",
      "access-uim",
      "access-perfcenter",
      "access-spectrum",
      "access-externalmail",
      "access-aptra",
      "access-vynamic",
      "access-outlook",
      "access-ad",
      "access-release-mail",
      "access-webex",
      "access-teams",
      "access-dashboards",
      "access-obanking",
      "access-ivr",
      "access-ncrhde",
      "access-sap",
      "access-wallet"
    ],
    "initialCompletedItemIds": [
      "access-ca",
      "access-dashboards"
    ]
  },
  "assets": {
    "stylesheet": "css/style.css",
    "script": "js/script.js"
  },
  "atm": {
    "pageTitle": "ATM Operations · NBK-E Monitoring Onboarding",
    "heading": "ATM Operations",
    "description": "A reference for following ATM faults, understanding their impact and knowing which support contact to use.",
    "searchPlaceholder": "Search ATM issues, vendors and contacts…",
    "overview": {
    "progressLinkLabel": "View access checklist and onboarding progress",
      "heading": "ATM Types",
      "body": "ATM owners are responsible for the software and hardware of their ATMs and have the spare parts needed for maintenance.",
      "types": [
        {
          "name": "NCR",
          "note": "One of the two ATM types used within our bank."
        },
        {
          "name": "Raya",
          "note": "One of the two ATM types used within our bank."
        }
      ]
    },
    "issues": {
      "heading": "Issue reference",
      "items": [
        {
          "name": "Dispenser issue",
          "what": "A fault affecting the ATM’s cash dispenser.",
          "impact": "stopping",
          "impactText": "Cash withdrawals are unavailable, both by card and through cardless services."
        },
        {
          "name": "Communication issue",
          "what": "The ATM may be out of service due to a communication problem or a power problem at the site.",
          "impact": "stopping",
          "impactText": "Vendor support is required to investigate the reported site or connectivity issue. For branch-associated ATMs, contact IT Network as described below."
        },
        {
          "name": "Host communication issue",
          "what": "The ATM is out of service, but remains visible and accessible through RAdmin.",
          "impact": "stopping",
          "impactText": "The ATM is out of service. A Restart or Reload command can be issued through PowerCard.",
          "search": "host communication radmin powercard restart reload"
        },
        {
          "name": "Card reader issue",
          "what": "A fault affecting the ATM’s card reader.",
          "impact": "partial",
          "impactText": "Card-based cash withdrawals and cash deposits are unavailable. Cardless cash withdrawals may still be available; verify the ATM’s actual service status."
        },
        {
          "name": "BNA issue — cash deposit",
          "what": "An issue affecting the cash deposit unit. It does not necessarily mean a jam: the deposit cassettes may be full.",
          "impact": "partial",
          "impactText": "Account deposits and foreign currency exchange are unavailable. Verify the remaining ATM services separately."
        },
        {
          "name": "Journal issue",
          "what": "The journal records all interactions on the ATM as logs.",
          "impact": "verify",
          "impactText": "A journal issue affects this important record of ATM interactions. Verify the logging condition and the ATM’s actual service status."
        },
        {
          "name": "Receipt issue",
          "what": "The receipt gives the customer details of a deposit transaction, including its date and time, to refer to if a problem occurs.",
          "impact": "verify",
          "impactText": "Receipt unavailability may also cause a problem with the deposit service. Verify the ATM’s actual deposit and receipt status."
        },
        {
          "name": "Supervisor mode",
          "what": "The ATM is placed in supervisor mode while a technician or engineer performs maintenance, making it completely out of service.",
          "impact": "stopping",
          "impactText": "After maintenance is complete, confirm that the vendor has returned the ATM to In-service mode.",
          "search": "supervisor maintenance technician engineer vendor inservice in-service mode"
        }
      ],
      "legend": {
        "stopping": "Dispenser faults prevent card and cardless withdrawals. Communication or site power problems may leave the ATM out of service. Host communication issues leave it out of service while still accessible through RAdmin. Supervisor mode takes the ATM completely out of service during maintenance.",
        "partial": "Card reader and BNA faults affect specific services. Cardless withdrawal may remain available with a card reader fault.",
        "verify": "For journal and receipt issues, verify the affected function and actual ATM service status."
      },
      "note": {
        "pending": false,
        "text": "A BNA fault does not necessarily indicate a jam; full deposit cassettes are another possible cause."
      }
    },
    "conditions": {
      "heading": "Other monitoring conditions",
      "items": [
        {
          "name": "Out of cash",
          "what": "The ATM needs cash replenishment. Contact the HQ team to arrange replenishment. If the ATM belongs to a branch, contact that branch for replenishment.",
          "search": "cash replenishment feeding balance aptra hq branch"
        }
      ]
    },
    "vendors": {
      "heading": "Support vendors",
      "groups": [
        {
          "code": "FLM",
          "name": "First Line Maintenance",
          "members": [
            "Speed",
            "Target",
            "Swat",
            "Italian"
          ]
        },
        {
          "code": "SLM",
          "name": "Second Line Maintenance",
          "members": [
            "NCR",
            "Raya"
          ]
        }
      ],
      "note": null
    },
    "comms": {
      "heading": "Communication contacts",
      "contacts": [
        {
          "name": "Maxor",
          "kind": "External vendor",
          "when": "The external vendor we contact for ATM communication issues."
        },
        {
          "name": "IT Network team",
          "kind": "Internal team",
          "when": "For an ATM associated with a bank branch, contact the internal IT Network team.",
          "highlight": "Branch-associated ATM: contact IT Network."
        }
      ],
      "note": null
    },
    "apps": {
      "heading": "Applications used for ATM operations",
      "items": [
        {
          "name": "APTRA",
          "tagline": "ATM monitoring and fault detection",
          "purpose": "Monitors the ATM estate and identifies reported faults and operating conditions.",
          "uses": [
            "Identify reported dispenser faults and communication problems",
            "Identify conditions such as out of cash",
            "Identify the reported issue before investigating further"
          ],
          "whenToUse": "When checking the ATM estate or identifying the issue reported for an ATM.",
          "systemKey": "aptra"
        },
        {
          "name": "PowerCard",
          "tagline": "Transactions, reports and ATM commands",
          "purpose": "Reviews transactions passing through ATMs and provides ATM activity and balance reports.",
          "uses": [
            "Review ATM transactions",
            "Generate the Not Used ATM report",
            "Generate the ATM Balance report"
          ],
          "capabilities": {
            "label": "ATM command capabilities",
            "items": [
              "Stop",
              "Start",
              "Reload",
              "Restart"
            ],
            "note": "For a host communication issue, the ATM is out of service but remains accessible through RAdmin; Restart or Reload can be issued through PowerCard. These are application capabilities, not live controls on this website."
          },
          "whenToUse": "When reviewing transactions, ATM usage or balances.",
          "systemKey": "power_card"
        },
        {
          "name": "RAdmin",
          "tagline": "Remote ATM verification",
          "purpose": "Provides remote access to an ATM when connectivity allows.",
          "uses": [
            "Verify whether the ATM is up or out of service",
            "Check whether a reported fault is actually present",
            "Check whether the ATM is in supervisor mode"
          ],
          "whenToUse": "When remotely confirming an ATM’s actual condition.",
          "url": null,
          "urlNote": "No launch link has been supplied."
        }
      ]
    }
  },
  "infrastructure": {
    "pageTitle": "Infrastructure · NBK-E Monitoring Onboarding",
    "heading": "Infrastructure",
    "description": "The teams responsible for each part of the estate. Select a team or type a keyword to jump straight to the team and its responsibilities.",
    "searchPlaceholder": "Search teams — e.g. RPA, firewall, ATM, T24, IPN…",
    "hint": "Select a team to see its responsibilities. Search results update as you type.",
    "ui": {
      "searchLabel": "Search infrastructure",
      "selectLabel": "Select a team",
      "viewLabel": "View details",
      "responsibilitiesLabel": "Responsibilities",
      "noResults": "No matching teams",
      "noResultsHint": "Try a team name, system, or keyword such as RPA, IPN, firewall, or ATM."
    },
    "teams": [
      {
        "id": "help-desk",
        "name": "Help Desk Team",
        "description": "First point of contact for IT support. Handles user access rights, tracks and escalates incidents, and keeps downtime to a minimum.",
        "keywords": "help desk service desk first point of contact user access rights active directory webex teams vynamic permissions incidents escalate",
        "responsibilities": [
          "Manage user access rights — each user has specific permissions and uses specific systems",
          "Act as the first point of contact for IT support",
          "Ensure rapid issue resolution and minimize downtime",
          "Manage and track incidents",
          "Escalate complex issues",
          "Help maintain efficient, reliable IT services"
        ]
      },
      {
        "id": "itsm",
        "name": "ITSM Team",
        "description": "Owns CA Service, the monitoring dashboard, Spectrum and UIM.",
        "keywords": "itsm ca service service desk dashboard spectrum uim perfcenter performance center monitoring",
        "responsibilities": [
          "Own CA Service",
          "Own the monitoring dashboard",
          "Own CA Spectrum",
          "Own UIM"
        ]
      },
      {
        "id": "operations",
        "name": "Operations Team",
        "description": "Runs the Close of Business (COB) process and makes sure the DW file arrives at T-Insight. Holds superuser privileges.",
        "keywords": "operations cob close of business dw file t-insight superuser privileges batch",
        "responsibilities": [
          "Run the Close of Business (COB) process",
          "Ensure the DW file arrives at T-Insight",
          "Hold superuser privileges"
        ]
      },
      {
        "id": "admin",
        "name": "Admin Team",
        "description": "Owns the Windows servers, disks and systems such as SideWatch and Outlook.",
        "keywords": "admin windows servers disks active directory outlook sidewatch server ownership",
        "responsibilities": [
          "Own the Windows servers",
          "Own the disks",
          "Own systems such as SideWatch",
          "Own systems such as Outlook"
        ]
      },
      {
        "id": "aix",
        "name": "AIX Team",
        "description": "Owns the Linux servers, disks and systems such as IPN.",
        "keywords": "aix linux servers disks ipn transaction servers",
        "responsibilities": [
          "Own the Linux servers",
          "Own the disks",
          "Own systems such as IPN"
        ]
      },
      {
        "id": "application-support",
        "name": "Application Support Team",
        "description": "Owns all bank applications, including SMS, Liserfish, online banking, RPA and SAG.",
        "keywords": "application support apps applications sms liserfish laserfiche online banking rpa sag banking applications",
        "responsibilities": [
          "Own all bank applications",
          "Own SMS banking (SMS services)",
          "Own Liserfish",
          "Own online banking",
          "Own RPA",
          "Own SAG"
        ]
      },
      {
        "id": "bda",
        "name": "BDA Team",
        "description": "Owns their specific disks, the ETL steps and the deep-level IPN processes.",
        "keywords": "bda disks etl steps ipn deep level dba data",
        "responsibilities": [
          "Own their specific disks",
          "Own the ETL steps",
          "Own the deep-level IPN processes"
        ]
      },
      {
        "id": "digital-payment",
        "name": "Digital Payment Team",
        "description": "Owns all ATM transactions (123 or host), Visa transactions and the upcoming Apple Pay services. Administers PowerCard, Aptra, RAdmin, Bingo, Vynamic, Solidcore and HDE.",
        "keywords": "digital payment atm transactions 123 host visa apple pay powercard power card aptra radmin bingo vynamic solidcore solid core hde switch",
        "responsibilities": [
          "Own all ATM transactions (123 or host)",
          "Own Visa transactions",
          "Own the upcoming Apple Pay services",
          "Administer PowerCard",
          "Administer Aptra",
          "Administer RAdmin",
          "Administer Bingo",
          "Administer Vynamic",
          "Administer Solidcore",
          "Administer HDE"
        ]
      },
      {
        "id": "network",
        "name": "Network Team",
        "description": "Owns the bank's network, branch ATMs and connectivity lines (e.g. WE, Vodafone), coordinated with vendors.",
        "keywords": "network connectivity lines we vodafone branch atm sites vendors wan links",
        "responsibilities": [
          "Own the bank's network",
          "Own the branch ATMs",
          "Own the connectivity lines (e.g. WE, Vodafone)",
          "Coordinate with vendors"
        ]
      },
      {
        "id": "network-security",
        "name": "Network Security Team",
        "description": "Owns the firewalls, IDS/IPS, VPN and DDoS protection.",
        "keywords": "network security firewalls ids ips vpn ddos protection",
        "responsibilities": [
          "Own the firewalls",
          "Own the IDS/IPS",
          "Own the VPN",
          "Own the DDoS protection"
        ]
      },
      {
        "id": "integration",
        "name": "Integration Team",
        "description": "Owns IPN and the APIs.",
        "keywords": "integration ipn apis api integrations",
        "responsibilities": [
          "Own IPN",
          "Own the APIs"
        ]
      },
      {
        "id": "t24",
        "name": "T24 Team",
        "description": "Owns the T24 core banking system, including its interface and all related components.",
        "keywords": "t24 core banking system interface components application owner",
        "responsibilities": [
          "Own the T24 system",
          "Own the T24 interface",
          "Own all related T24 components"
        ]
      }
    ]
  },
  "personalServices": {
    "pageTitle":  "Personal Services · NBK-E Monitoring Onboarding",
    "eyebrow":  "Employee services",
    "heading":  "Personal services",
    "description":  "Your starting point for performance appraisal, learning and development, and medical information.",
    "servicesHeading":  "Choose your service",
    "servicesDescription":  "Open the relevant portal to access your employee services.",
    "services":  [
                     {
                         "label":  "Appraisal",
                         "body":  "Access SuccessFactors for your performance appraisal and review activities.",
                         "linkLabel":  "Open Appraisal",
                         "href":  "https://performancemanager.successfactor.eu"
                     },
                     {
                         "label":  "Learning Hub",
                         "body":  "Access CrossKnowledge for learning resources, courses, and development activities.",
                         "linkLabel":  "Open Learning Hub",
                         "href":  "https://nbk.eu.crossknowledge.com"
                     },
                     {
                         "label":  "Medical Information",
                         "body":  "Visit My HR for medical information, healthcare benefits, and HR guidance.",
                         "linkLabel":  "Open My HR",
                         "href":  "https://headq-intran-p.awb.local/sites/NBK/My%20HR/SitePages/Home.aspx"
                     }
                 ]
},
  "faqPage": {
    "pageTitle": "Frequently Asked · NBK-E Monitoring Onboarding",
    "eyebrow": "Help center",
    "heading": "Frequently asked",
    "description": "Search by any word in a question or answer to find the information you need without typing the full question.",
    "searchPlaceholder": "Search a question — e.g. insurance, shifts, manager…",
    "answerLabel": "Answer",
    "emptyHeading": "No matching questions",
    "emptyDescription": "Try a different word or check back when more questions are added.",
    "items": [
      {
        "question": "When are the shifts and what are the working hours?",
        "answer": "We work rotational shifts: morning from 8 AM to 4 PM, evening from 4 PM to midnight (12 AM), and overnight from midnight (12 AM) to 8 AM.",
        "keywords": "shifts shift working hours schedule timing roster إمتى امتى امتا"
      },
      {
        "question": "How can I find the management hierarchy?",
        "answer": "You can find the management hierarchy through Outlook emails or the organization chart in SAP.",
        "keywords": "management hierarchy reporting line organization chart organisation chart outlook emails sap managers"
      },
      {
        "question": "What is the limit of my health insurance?",
        "answer": "Your health-insurance limit is determined when you receive your insurance card and register in the app. Medical insurance is annual.",
        "keywords": "health insurance medical limit coverage benefits insurance healthcare annual yearly card app registration سنوي سنوية بطاقة تطبيق تسجيل"
      },
      {
        "question": "What is the allowance for working on an official holiday?",
        "answer": "The official holiday allowance is EGP 500.",
        "keywords": "allowance allowances official public holiday holidays compensation 500"
      },
      {
        "question": "When can I use Uber billed to NBK, and how does it affect my transportation allowance?",
        "answer": "Uber billed to NBK is available for evening and overnight shifts. EGP 75 is deducted from your transportation allowance for one trip, or EGP 150 for both the trip to work and the return trip. For a morning shift, Uber is allowed only for the trip home after working overtime; it is not allowed for the trip to work. Using Uber for that return trip deducts the EGP 75 return transportation allowance.",
        "keywords": "uber nbk invoice billed transportation allowance allowances deduction deduct evening overnight night morning shift overtime over time return home commute 75 150"
      },
      {
        "question": "Which shifts receive transportation allowances?",
        "answer": "Evening and overnight shifts receive EGP 75 for the trip to work and EGP 75 for the return trip, totaling EGP 150.",
        "keywords": "transport transportation allowance allowances evening overnight night shift travel return 75 150"
      },
      {
        "question": "What is the overtime allowance?",
        "answer": "The overtime allowance is EGP 200.",
        "keywords": "overtime over time allowance allowances extra hours 200"
      },
      {
        "question": "What allowances apply when I work overtime after a morning shift?",
        "answer": "You receive EGP 75 for return transportation plus EGP 200 for overtime, totaling EGP 275.",
        "keywords": "morning shift overtime over time transportation return allowance allowances 75 200 275"
      },
      {
        "question": "Does the morning shift receive transportation allowances on Fridays and Saturdays?",
        "answer": "Yes. Morning shifts on Fridays and Saturdays receive EGP 75 for the trip to work and EGP 75 for the return trip, totaling EGP 150.",
        "keywords": "morning shift friday saturday weekend transportation allowance allowances 75 150"
      }
    ]
  }
};
