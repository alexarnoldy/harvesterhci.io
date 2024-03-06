"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[910],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return p}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=a.createContext({}),d=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=d(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=d(n),p=o,h=m["".concat(l,".").concat(p)]||m[p]||u[p]||i;return n?a.createElement(h,r(r({ref:t},c),{},{components:n})):a.createElement(h,r({ref:t},c))}));function p(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,r[1]=s;for(var d=2;d<i;d++)r[d]=n[d];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5137:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return s},metadata:function(){return d},toc:function(){return u}});var a=n(7462),o=n(3366),i=(n(7294),n(3905)),r=["components"],s={title:"Configuring Harvester to Boot from an iSCSI Root Disk in Special Circumstances",description:"How to modify GRUB configuration so Harvester will use system firmware to access an iSCSI boot/root disk",slug:"install_iscsi_firmware_install_boot",authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],tags:["harvester"],hide_table_of_contents:!1},l=void 0,d={permalink:"/kb/install_iscsi_firmware_install_boot",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2024-03-05/booting_harvester_via_iscsi_ibt.md",source:"@site/kb/2024-03-05/booting_harvester_via_iscsi_ibt.md",title:"Configuring Harvester to Boot from an iSCSI Root Disk in Special Circumstances",description:"How to modify GRUB configuration so Harvester will use system firmware to access an iSCSI boot/root disk",date:"2024-03-05T00:00:00.000Z",formattedDate:"March 5, 2024",tags:[{label:"harvester",permalink:"/kb/tags/harvester"}],readingTime:10.3,truncated:!1,authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],frontMatter:{title:"Configuring Harvester to Boot from an iSCSI Root Disk in Special Circumstances",description:"How to modify GRUB configuration so Harvester will use system firmware to access an iSCSI boot/root disk",slug:"install_iscsi_firmware_install_boot",authors:[{name:"Jeff Radick",title:"Staff Software Engineer"}],tags:["harvester"],hide_table_of_contents:!1},nextItem:{title:"Calculation of Resource Metrics in Harvester",permalink:"/kb/calculation_of_resource_metrics_in_harvester"}},c={authorsImageUrls:[void 0]},u=[{value:"Concepts, Requirements, and Limitations",id:"concepts-requirements-and-limitations",level:2},{value:"iSCSI Concepts and Terminology",id:"iscsi-concepts-and-terminology",level:3},{value:"Additional Concepts and Terminology",id:"additional-concepts-and-terminology",level:3},{value:"Requirements",id:"requirements",level:3},{value:"Limitations",id:"limitations",level:3},{value:"Procedure",id:"procedure",level:2},{value:"1. Provision storage for your Harvester node on your iSCSI server system.",id:"1-provision-storage-for-your-harvester-node-on-your-iscsi-server-system",level:3},{value:"2. Configure system firmware to boot via iSCSI using the available CNA.",id:"2-configure-system-firmware-to-boot-via-iscsi-using-the-available-cna",level:3},{value:"Boot the Harvester install image and install to the iSCSI device",id:"boot-the-harvester-install-image-and-install-to-the-iscsi-device",level:3},{value:"4. On first boot, edit kernel boot parameters in the GRUB kernel command line.",id:"4-on-first-boot-edit-kernel-boot-parameters-in-the-grub-kernel-command-line",level:3},{value:"5. Permanently edit the GRUB configuration file.",id:"5-permanently-edit-the-grub-configuration-file",level:3},{value:"References",id:"references",level:2}],m={toc:u};function p(e){var t=e.components,n=(0,o.Z)(e,r);return(0,i.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Through v1.3.0, no explicit support has been provided for using Harvester (installing, booting, and running) with any type of storage that is not locally attached. This is in keeping with the philosophy of Hyper-Converged Infrastructure (HCI), which by definition hosts computational capability, storage, and networking in a single device or a set of similar devices operating in a cluster."),(0,i.kt)("p",null,"However, there are certain limited conditions that allow Harvester to be used on nodes without locally-attached bootable storage devices. Specifically, the use of converged network adapters (CNAs) as well as manual changes to the boot loader configuration of the installed system are required."),(0,i.kt)("h2",{id:"concepts-requirements-and-limitations"},"Concepts, Requirements, and Limitations"),(0,i.kt)("p",null,"This section describes background concepts and outlines requirements and limitations that you must consider before performing the procedure. For more information about the described concepts, see the references listed at the end of this article."),(0,i.kt)("h3",{id:"iscsi-concepts-and-terminology"},"iSCSI Concepts and Terminology"),(0,i.kt)("p",null,"SCSI (Small Computer System Interface) is a set of standards for transferring data between computers systems and I/O devices. It is primarily used with storage devices."),(0,i.kt)("p",null,"The SCSI standards specify the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SCSI protocol"),": A set of message formats and rules of exchange"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SCSI transports"),": Methods for physically connecting storage devices to the computer system and transferring SCSI messages between them")),(0,i.kt)("p",null,"A number of SCSI transports are defined, including the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"SAS (Serial Attached SCSI)")," and ",(0,i.kt)("strong",{parentName:"li"},"UAS (USB Attached SCSI)"),": Used to access SCSI storage devices that are directly attached to the computers using that storage"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"FCP (Fibre Channel Protocol)")," and ",(0,i.kt)("strong",{parentName:"li"},"iSCSI (Internet SCSI)"),": Permit computer systems to access storage via a Storage Area Network (SAN), where the storage devices are attached to a system other than the computers using that storage")),(0,i.kt)("p",null,"The SCSI protocol is a client-server protocol, which means that all interaction occurs between clients that send requests and a server that services the requests. In the SCSI context, the client is called the ",(0,i.kt)("strong",{parentName:"p"},"initiator")," and the server is called the ",(0,i.kt)("strong",{parentName:"p"},"target"),". iSCSI initiators and targets identify themselves using a specially formatted identifier called an ",(0,i.kt)("strong",{parentName:"p"},"iSCSI qualified name (IQN)"),". The controller used to provide access to the storage devices is commonly called a ",(0,i.kt)("strong",{parentName:"p"},"host bus adapter (HBA)"),"."),(0,i.kt)("p",null,'When using iSCSI, access is provided by a traditional Internet protocol, with an extra layer to encapsulate SCSI commands within TCP/IP messages. This can be implemented entirely in software (transferring messages using a traditional NIC), or it can be "offloaded" to a "smart" NIC that contains the iSCSI protocol and provides access through special firmware. Such NICs, which provide both a traditional Ethernet interface for regular Internet traffic and a higher-level storage interface for iSCSI services, are often called ',(0,i.kt)("strong",{parentName:"p"},"converged network adapters (CNAs)"),"."),(0,i.kt)("p",null,"Systems with iSCSI CNAs can be configured to enable the system bootstrap firmware to boot the system via iSCSI. In addition, if the loaded operating system is aware of such an interface provided by the CNA, it can access the bootstrap device using that firmware interface ",(0,i.kt)("em",{parentName:"p"},"as if it were a locally attached device")," without requiring initialization of the operating system's full software iSCSI protocol machinery."),(0,i.kt)("h3",{id:"additional-concepts-and-terminology"},"Additional Concepts and Terminology"),(0,i.kt)("p",null,"Harvester must be installed on a bootable storage device, which is referred to as the ",(0,i.kt)("em",{parentName:"p"},"boot disk"),"."),(0,i.kt)("p",null,"Other storage devices, which are referred to as ",(0,i.kt)("em",{parentName:"p"},"non-boot disks"),", may also be used in the Harvester ecosystem."),(0,i.kt)("h3",{id:"requirements"},"Requirements"),(0,i.kt)("p",null,"You must install Harvester on a node with a converged NIC that provides iSCSI offload capability with firmware support. This firmware must specifically support the iSCSI Boot Firmware Table (iBFT)."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The procedure was tested with the following:"),(0,i.kt)("ul",{parentName:"div"},(0,i.kt)("li",{parentName:"ul"},"Harvester v1.2.1 and v1.3.0"),(0,i.kt)("li",{parentName:"ul"},"Dell PowerEdge R650 (Other systems with comparable hardware and firmware iSCSI support may also be suitable.)")))),(0,i.kt)("h3",{id:"limitations"},"Limitations"),(0,i.kt)("p",null,"The procedure will not work in environments with the following conditions:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"iSCSI is not implemented in a converged NIC."),(0,i.kt)("li",{parentName:"ul"},"Nodes boot via PXE."),(0,i.kt)("li",{parentName:"ul"},"Harvester is installed only on virtual machines.")),(0,i.kt)("h2",{id:"procedure"},"Procedure"),(0,i.kt)("p",null,"The following is a summary of the procedure. Individual steps, which are described in the following sections, must be performed interactively. A fully automated installation is ",(0,i.kt)("strong",{parentName:"p"},"not")," possible at this time."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Provision storage for your Harvester node on your iSCSI server system."),(0,i.kt)("li",{parentName:"ol"},"Configure system firmware to boot via iSCSI using the available CNA."),(0,i.kt)("li",{parentName:"ol"},"Boot the Harvester install image and install to the iSCSI device."),(0,i.kt)("li",{parentName:"ol"},"On first Harvester boot after installation, edit the kernel boot parameters in the GRUB kernel command line."),(0,i.kt)("li",{parentName:"ol"},"Permanently edit the GRUB configuration file in the normally read-only partition.")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"important")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"The boot configuration changes will persist across node reboots but ",(0,i.kt)("strong",{parentName:"p"},"not")," across system upgrades, which will overwrite the GRUB parameters. "))),(0,i.kt)("h3",{id:"1-provision-storage-for-your-harvester-node-on-your-iscsi-server-system"},"1. Provision storage for your Harvester node on your iSCSI server system."),(0,i.kt)("p",null,"Before attempting to install Harvester onto a disk accessed by iSCSI,\nthe storage must first be provisioned on the storage server."),(0,i.kt)("p",null,"The details depend on the storage server and will not be discussed here."),(0,i.kt)("p",null,"However, several pieces of information must be obtained\nin order for the system being installed to be able\nto access the storage using iSCSI."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"The IP address and port number of the iSCSI server."),(0,i.kt)("li",{parentName:"ul"},"The iSCSI Qualified Name (IQN) of the iSCSI target on the server."),(0,i.kt)("li",{parentName:"ul"},"The LUN of the volume on the server to be accessed from the client as the disk on which Harvester will be installed."),(0,i.kt)("li",{parentName:"ul"},"Depending on on how the server is administered, authentication parameters may also be required.")),(0,i.kt)("p",null,"These items of information will be determined by the server system."),(0,i.kt)("p",null,"In addition, an IQN must be chosen for the client system to be used as its initiator identifier."),(0,i.kt)("p",null,"An IQN is a string in a certain format.\nIn general, any string in the defined format can be used as long as it is unique.\nHowever, specific environments may place stricter requirements on the choice of names."),(0,i.kt)("p",null,"The format of an IQN is illustrated in the following example:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    iqn.2024-02.com.example:cluster1-node0-boot-disk\n")),(0,i.kt)("p",null,"There are lots of variations of this format, and this is just an example."),(0,i.kt)("p",null,"The correct name to use should be chosen in consultation with the administrator of your storage server and storage area network."),(0,i.kt)("h3",{id:"2-configure-system-firmware-to-boot-via-iscsi-using-the-available-cna"},"2. Configure system firmware to boot via iSCSI using the available CNA."),(0,i.kt)("p",null,"When your system to be installed powers on or is reset, you must enter the firmware setup menu to change the boot settings and enable booting via iSCSI."),(0,i.kt)("p",null,"Precise details for this are difficult to provide because they vary from system to system."),(0,i.kt)("p",null,"It is typical to force the system to enter the firmware settings menu by typing a special key such as F2, F7, ESC, etc.\nWhich one works for your system varies.\nOften the system will display a list of which key(s) are available for specific firmware functions,\nbut it is not uncommon for the firmware to erase this list and start to boot after only a very short delay,\nso you have to pay close attention."),(0,i.kt)("p",null,"If in doubt, consult the system provider's documentation.\nAn example document link is provided in the References section.\nOther vendors should provide similar documentation."),(0,i.kt)("p",null,"The typical things you need to configure are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Enable UEFI boot"),(0,i.kt)("li",{parentName:"ul"},"Configure iSCSI initiator and target parameters"),(0,i.kt)("li",{parentName:"ul"},"Enable the iSCSI device in the boot menu"),(0,i.kt)("li",{parentName:"ul"},"Set the boot order so that your system will boot from the iSCSI device")),(0,i.kt)("h3",{id:"boot-the-harvester-install-image-and-install-to-the-iscsi-device"},"Boot the Harvester install image and install to the iSCSI device"),(0,i.kt)("p",null,"This can be done by whatever means you would normally use to load the Harvester install image."),(0,i.kt)("p",null,"The Harvester installer ",(0,i.kt)("em",{parentName:"p"},"should"),' automatically "see" the iSCSI device in the dialog where you chose the installation destination.\nChoose this device to install.'),(0,i.kt)("p",null,"Installation should proceed and complete normally."),(0,i.kt)("p",null,"When installation completes, your system should reboot."),(0,i.kt)("h3",{id:"4-on-first-boot-edit-kernel-boot-parameters-in-the-grub-kernel-command-line"},"4. On first boot, edit kernel boot parameters in the GRUB kernel command line."),(0,i.kt)("p",null,"As your system starts to come up after the first reboot,\nthe firmware will load the boot loader (GRUB) from the iSCSI device,\nand GRUB will be able to use this device to load the kernel."),(0,i.kt)("p",null,"However, the kernel will ",(0,i.kt)("strong",{parentName:"p"},"not")," be aware of the iSCSI boot disk ",(0,i.kt)("strong",{parentName:"p"},"unless")," you modify the kernel parameters in the GRUB command line."),(0,i.kt)("p",null,"If you don't modify the kernel parameters, then system startup procedures will fail to find the ",(0,i.kt)("inlineCode",{parentName:"p"},"COS_OEM")," and other paritions on the boot disk,\nand it will be unable to access the ",(0,i.kt)("inlineCode",{parentName:"p"},"cloud-init")," configuration or any of the container images needed to "),(0,i.kt)("p",null,"The first time the GRUB menu appears after installation, you should stop the GRUB boot loader from automatically loading the kernel,\nand edit the kernel command line."),(0,i.kt)("p",null,"To stop GRUB from automatically loading the kernel, hit the ESC key as soon as the menu appears.\nYou will only have a few seconds to do this before the system automatically boots."),(0,i.kt)("p",null,'Then, type "e" to edit the GRUB configuration for the first boot option.'),(0,i.kt)("p",null,"It will show you something similar to the following:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"setparams 'Harvester v1.3.0'\n\n  # label is kept around for backward compatibility\n  set label=${active_label}\n  set img=/cOS/active.img\n  loopback $loopdev /$img\n  source $(loopdev)/etc/cos/bootargs.cfg\n  linux ($loopdev)$kernel $kernelcmd ${extra_cmdline} ${extra_active_cmdline}\n  initrd ($loopdev)$initramfs\n")),(0,i.kt)("p",null,"Move the cursor down to the line that begins with ",(0,i.kt)("inlineCode",{parentName:"p"},"linux"),", and move the cursor to the end of that line."),(0,i.kt)("p",null,"Append the following string (two parameters): ",(0,i.kt)("inlineCode",{parentName:"p"},"rd.iscsi.firmware rd.iscsi.ibft"),"."),(0,i.kt)("p",null,"The line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"linux")," should now look like this:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"  linux ($loopdev)$kernel $kernelcmd ${extra_cmdline} ${extra_active_cmdline} rd.iscsi.firmware rd.iscsi.ibft\n")),(0,i.kt)("p",null,"At this point, type Ctrl-X to resume booting with the modified kernel command line."),(0,i.kt)("p",null,"Now the node should come up normally, and finish with the normal Harvester console screen that shows the cluster and node IP addresses and status."),(0,i.kt)("p",null,"The the node should operate normally now ",(0,i.kt)("strong",{parentName:"p"},"but")," the kernel boot argument changes will not be preserved across a reboot unless you perform the next step."),(0,i.kt)("h3",{id:"5-permanently-edit-the-grub-configuration-file"},"5. Permanently edit the GRUB configuration file."),(0,i.kt)("p",null,"At this point you need to preserve these boot argument changes."),(0,i.kt)("p",null,"You can do this from the console by pressing F12 and logging in, or you can use an SSH session over the network."),(0,i.kt)("p",null,"The changes must be made permanent by editing the GRUB configuration file ",(0,i.kt)("inlineCode",{parentName:"p"},"grub.cfg"),"."),(0,i.kt)("p",null,"The trick here is that the file to be changed is stored in a partition which is normally ",(0,i.kt)("strong",{parentName:"p"},"read-only"),",\nso the first thing you must do is to re-mount the volume to be read-write."),(0,i.kt)("p",null,"Start out by using the ",(0,i.kt)("inlineCode",{parentName:"p"},"blkid")," command to find the device name of the correct partition:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"    $ sudo -i\n    # blkid -L COS_STATE\n    /dev/sda4\n    #\n")),(0,i.kt)("p",null,"The device name will be something like ",(0,i.kt)("inlineCode",{parentName:"p"},"/dev/sda4"),".  The following examples assume that's the name but you should modify the commands to match what you see on your system."),(0,i.kt)("p",null,"Now, re-mount that volume to make it writable:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    # mount -o remount -rw /dev/sda4 /run/initramfs/cos-state\n")),(0,i.kt)("p",null,"Next, edit the ",(0,i.kt)("inlineCode",{parentName:"p"},"grub.cfg")," file."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    # vim /run/initramfs/cos-state/grub2/grub.cfg\n")),(0,i.kt)("p",null,"Look for ",(0,i.kt)("inlineCode",{parentName:"p"},"menuentry")," directives.  There will be several of these; at least one as a fallback, and one for recovery.  You should apply the same change to all of them."),(0,i.kt)("p",null,"In each of these, edit the line beginning with ",(0,i.kt)("inlineCode",{parentName:"p"},"linux")," just as you did for the interactive GRUB menu, appending ",(0,i.kt)("inlineCode",{parentName:"p"}," rd.iscsi.firmware rd.iscsi.ibft")," to the arguments."),(0,i.kt)("p",null,"Then save the changes."),(0,i.kt)("p",null,"It is not necessary, but probably advisable to remount that volume again to return it to its read-only state:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"    # mount -o remount -ro /dev/sda4 /run/initramfs/cos-state\n")),(0,i.kt)("p",null,"From this point on, these changes will persist across node reboots."),(0,i.kt)("p",null,"A few important notes:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"You must perform this same procedure for every node of your cluster that you are booting with iSCSI."),(0,i.kt)("li",{parentName:"ul"},"These changes will be overwritten by the upgrade procedure if you upgrade your cluster to a newer version of Harvester.  Therefore, if you do an upgrade, be sure to re-do the procedure to edit the ",(0,i.kt)("inlineCode",{parentName:"li"},"grub.cfg")," on every node of your cluster that is booting by iSCSI.")),(0,i.kt)("h2",{id:"references"},"References"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/SCSI"},"SCSI")," provides an overview of SCSI and contains references to additional material."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/ISCSI"},"iSCSI")," provides an overview of iSCSI and contains references to additional material."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Converged_network_adapter"},"Converged Network Adapter")," provides a summary of CNAs and references to additional material."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://docs.harvesterhci.io/v1.2/troubleshooting/os/#how-to-permanently-edit-kernel-parameters"},"Harvester Docuementation")," provides a general description of how to permanently edit kernel parameters to be used when booting a Harvester node."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://www.dell.com/support/manuals/en-us/poweredge-r630/r630_om_pub/uefi-iscsi-settings?guid=guid-adc7d625-5c7b-469d-ba9c-4a2c704fcc49&lang=en-us"},"Dell PowerEdge R630 Owner's Manual")," This is an example of relevant vendor documentation.  Other vendors such as HPE, IBM, Lenovo, etc should provide comparable documentation, though the details will vary.")))}p.isMDXComponent=!0}}]);