//creating array and passing the number,questions,options and answer
let questions = [
    {
  numb: 1,
  question: "What is the purpose of an IP address?",
  answer: "To uniquely identify devices on a network",
  options: [
    "To provide internet connectivity",
    "To encrypt data during transmission",
    "To uniquely identify devices on a network",
    "To secure network resources"
  ]
},
    {
  numb: 2,
  question: "What is the role of a router in a network?",
  answer: "To forward data packets between different networks",
  options: [
    "To connect devices within a local network",
    "To filter spam emails",
    "To forward data packets between different networks",
    "To establish secure VPN connections"
  ]
},
    {
  numb: 3,
  question: "Which protocol is used for sending and receiving email over the internet?",
  answer: "SMTP (Simple Mail Transfer Protocol)",
  options: [
    "HTTP (Hypertext Transfer Protocol)",
    "FTP (File Transfer Protocol)",
    "SMTP (Simple Mail Transfer Protocol)",
    "DNS (Domain Name System)"
  ]
},
   
        
    {
  numb: 4,
  question: "What is the purpose of a subnet mask?",
  answer: "To determine the network and host portions of an IP address",
  options: [
    "To convert domain names into IP addresses",
    "To determine the network and host portions of an IP address",
    "To encrypt data during transmission",
    "To allocate IP addresses to devices"
  ]
},
    {
  numb: 5,
  question: "What is the maximum transmission speed of a standard Ethernet connection?",
  answer: "1 Gbps (Gigabit per second)",
  options: [
    "10 Mbps (Megabits per second)",
    "100 Mbps (Megabits per second)",
    "1 Gbps (Gigabit per second)",
    "10 Gbps (Gigabit per second)"
  ]
},
    {
  numb: 6,
  question: "What is the purpose of DNS (Domain Name System)?",
  answer: "To translate domain names into IP addresses",
  options: [
    "To establish secure connections",
    "To translate domain names into IP addresses",
    "To route network traffic",
    "To provide wireless network access"
  ]
},

{
  numb: 7,
  question: "What is the difference between TCP and UDP?",
  answer: "TCP provides reliable and ordered delivery of data, while UDP does not guarantee reliability or order",
  options: [
    "TCP is faster than UDP",
    "TCP provides reliable and ordered delivery of data, while UDP does not guarantee reliability or order",
    "UDP is more secure than TCP",
    "UDP is used for web browsing, while TCP is used for email"
  ]
},
{
  numb: 8,
  question: "What is the purpose of a firewall?",
  answer: "To protect a network from unauthorized access and threats",
  options: [
    "To amplify network signals",
    "To connect two different networks",
    "To protect a network from unauthorized access and threats",
    "To create virtual private networks"
  ]
},
    {
  numb: 9,
  question: "What is the function of an access point in wireless networking?",
  answer: "To provide wireless connectivity to devices",
  options: [
    "To filter network traffic",
    "To convert digital data into analog signals",
    "To provide wireless connectivity to devices",
    "To establish secure connections"
  ]
},
    {
  numb: 10,
  question: "What is the purpose of NAT (Network Address Translation)?",
  answer: "To allow multiple devices to share a single public IP address",
  options: [
    "To encrypt network traffic",
    "To translate domain names into IP addresses",
    "To allow multiple devices to share a single public IP address",
    "To establish secure VPN connections"
  ]
},

    {
  numb: 11,
  question: "What is the difference between half-duplex and full-duplex communication?",
  answer: "Half-duplex allows communication in both directions, but only one direction at a time, while full-duplex allows simultaneous communication in both directions",
  options: [
    "Half-duplex allows communication in both directions, but only one direction at a time, while full-duplex allows simultaneous communication in both directions",
    "Half-duplex is slower than full-duplex",
    "Half-duplex is used for wired connections, while full-duplex is used for wireless connections",
    "Half-duplex requires a dedicated line for communication, while full-duplex does not"
  ]
},

    {
  numb: 12,
  question: "What is the purpose of DHCP (Dynamic Host Configuration Protocol)?",
  answer: "To automatically assign IP addresses to devices on a network",
  options: [
    "To encrypt network traffic",
    "To translate domain names into IP addresses",
    "To automatically assign IP addresses to devices on a network",
    "To filter spam emails"
  ]
},

    {
  numb: 13,
  question: "What is the function of a switch in a network?",
  answer: "To connect devices within a local network and facilitate communication",
  options: [
    "To filter network traffic",
    "To convert digital data into analog signals",
    "To connect devices within a local network and facilitate communication",
    "To establish secure connections"
  ]
},

    {
  numb: 14,
  question: "What is the purpose of VLAN (Virtual Local Area Network)?",
  answer: "To logically separate a physical network into multiple virtual networks",
  options: [
    "To amplify network signals",
    "To translate domain names into IP addresses",
    "To logically separate a physical network into multiple virtual networks",
    "To provide wireless network access"
  ]
},

    {
  numb: 15,
  question: "What is the role of a network gateway?",
  answer: "To connect different networks and facilitate communication",
  options: [
    "To connect devices within a local network",
    "To encrypt network traffic",
    "To connect different networks and facilitate communication",
    "To establish secure VPN connections"
  ]
},

    {
  numb: 16,
  question: "What is the purpose of a proxy server?",
  answer: "To act as an intermediary between client devices and the internet",
  options: [
    "To amplify network signals",
    "To convert digital data into analog signals",
    "To act as an intermediary between client devices and the internet",
    "To provide wireless connectivity to devices"
  ]
},

    {
  numb: 17,
  question: "What is the difference between a hub and a switch?",
  answer: "A hub broadcasts data to all connected devices, while a switch selectively forwards data to the intended recipient",
  options: [
    "A hub provides wireless connectivity, while a switch provides wired connectivity",
    "A hub is faster than a switch",
    "A hub broadcasts data to all connected devices, while a switch selectively forwards data to the intended recipient",
    "A hub is used for home networks, while a switch is used for enterprise networks"
  ]
},
    {
  numb: 18,
  question: "What is the purpose of MAC address?",
  answer: "To uniquely identify network interfaces",
  options: [
    "To convert domain names into IP addresses",
    "To encrypt network traffic",
    "To uniquely identify network interfaces",
    "To allocate IP addresses to devices"
  ]
},

    {
  numb: 19,
  question: "What is the role of DNS caching?",
  answer: "To store recently accessed DNS information for faster retrieval",
  options: [
    "To establish secure connections",
    "To translate domain names into IP addresses",
    "To route network traffic",
    "To store recently accessed DNS information for faster retrieval"
  ]
},


    {
  numb: 20,
  question: "What is the purpose of ICMP (Internet Control Message Protocol)?",
  answer: "To send error messages and operational information about network conditions",
  options: [
    "To encrypt network traffic",
    "To translate domain names into IP addresses",
    "To send error messages and operational information about network conditions",
    "To establish secure VPN connections"
  ]
},

    {
  numb: 21,
  question: "What is the difference between a public IP address and a private IP address?",
  answer: "Public IP addresses are globally unique and used for communication over the internet, while private IP addresses are used within local networks",
  options: [
    "Public IP addresses are faster than private IP addresses",
    "Public IP addresses are used for email communication, while private IP addresses are used for web browsing",
    "Public IP addresses are globally unique and used for communication over the internet, while private IP addresses are used within local networks",
    "Public IP addresses are more secure than private IP addresses"
  ]
},

    {
  numb: 22,
  question: "What is the purpose of a network protocol?",
  answer: "To define rules and conventions for communication between devices on a network",
  options: [
    "To amplify network signals",
    "To connect devices within a local network",
    "To define rules and conventions for communication between devices on a network",
    "To establish secure connections"
  ]
},

    {
  numb: 23,
  question: "What is the function of a network interface card (NIC)?",
  answer: "To enable a device to connect to a network",
  options: [
    "To convert digital data into analog signals",
    "To act as an intermediary between client devices and the internet",
    "To enable a device to connect to a network",
    "To provide wireless network access"
  ]
},

    {
  numb: 24,
  question: "What is the purpose of SSL/TLS?",
  answer: "To provide secure communication over the internet",
  options: [
    "To amplify network signals",
    "To convert domain names into IP addresses",
    "To provide secure communication over the internet",
    "To establish"
   ]
},
    {
  numb: 25,
  question: "What is the difference between a static IP address and a dynamic IP address?",
  answer: "A static IP address remains constant and is manually assigned, while a dynamic IP address is automatically assigned and subject to change",
  options: [
    "A static IP address is used for wireless connections, while a dynamic IP address is used for wired connections",
    "A static IP address is faster than a dynamic IP address",
    "A static IP address remains constant and is manually assigned, while a dynamic IP address is automatically assigned and subject to change",
    "A static IP address requires authentication, while a dynamic IP address does not"
  ]
},

    {
  numb: 26,
  question: "What is the purpose of a network proxy?",
  answer: "To act as an intermediary between client devices and the internet",
  options: [
    "To amplify network signals",
    "To convert digital data into analog signals",
    "To act as an intermediary between client devices and the internet",
    "To provide wireless connectivity to devices"
  ]
},

    {
  numb: 27,
  question: "What is the role of a network administrator?",
  answer: "To manage and maintain network infrastructure",
  options: [
    "To provide technical support to end-users",
    "To develop network protocols",
    "To manage and maintain network infrastructure",
    "To secure network resources"
  ]
},

    {
  numb: 28,
  question: "What is the purpose of a network hub?",
  answer: "To connect devices within a local network",
  options: [
    "To filter network traffic",
    "To convert digital data into analog signals",
    "To connect devices within a local network",
    "To establish secure connections"
  ]
},
    {
  numb: 29,
  question: "What is the function of a network switch?",
  answer: "To connect devices within a local network and facilitate communication",
  options: [
    "To filter network traffic",
    "To amplify network signals",
    "To connect devices within a local network and facilitate communication",
    "To establish secure connections"
  ]
},
    {
  numb: 30,
  question: "What is the purpose of a network firewall?",
  answer: "To protect a network from unauthorized access and threats",
  options: [
    "To amplify network signals",
    "To connect devices within a local network",
    "To protect a network from unauthorized access and threats",
    "To establish secure connections"
  ]
},
    
]
