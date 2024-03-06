"use strict";(self.webpackChunkharvesterhci_io=self.webpackChunkharvesterhci_io||[]).push([[9398],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var c=n.createContext({}),l=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(a),m=r,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||o;return a?n.createElement(h,s(s({ref:t},u),{},{components:a})):n.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,s=new Array(o);s[0]=p;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=a[l];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9452:function(e,t,a){a.r(t),a.d(t,{assets:function(){return u},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return d}});var n=a(7462),r=a(3366),o=(a(7294),a(3905)),s=["components"],i={title:"Calculation of Resource Metrics in Harvester",description:"Understand how resource metrics are calculated.",slug:"calculation_of_resource_metrics_in_harvester",authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png"}],tags:["harvester","resource metrics","reserved resource","calculation"],hide_table_of_contents:!1},c="Calculation of Resource Metrics in Harvester",l={permalink:"/kb/calculation_of_resource_metrics_in_harvester",editUrl:"https://github.com/harvester/harvesterhci.io/edit/main/kb/kb/2024-01-23/harvester_resource_metrics_calculation.md",source:"@site/kb/2024-01-23/harvester_resource_metrics_calculation.md",title:"Calculation of Resource Metrics in Harvester",description:"Understand how resource metrics are calculated.",date:"2024-01-23T00:00:00.000Z",formattedDate:"January 23, 2024",tags:[{label:"harvester",permalink:"/kb/tags/harvester"},{label:"resource metrics",permalink:"/kb/tags/resource-metrics"},{label:"reserved resource",permalink:"/kb/tags/reserved-resource"},{label:"calculation",permalink:"/kb/tags/calculation"}],readingTime:2.835,truncated:!1,authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png",imageURL:"https://github.com/w13915984028.png"}],frontMatter:{title:"Calculation of Resource Metrics in Harvester",description:"Understand how resource metrics are calculated.",slug:"calculation_of_resource_metrics_in_harvester",authors:[{name:"Jian Wang",title:"Staff Software Engineer",url:"https://github.com/w13915984028",image_url:"https://github.com/w13915984028.png",imageURL:"https://github.com/w13915984028.png"}],tags:["harvester","resource metrics","reserved resource","calculation"],hide_table_of_contents:!1},prevItem:{title:"Configuring Harvester to Boot from an iSCSI Root Disk in Special Circumstances",permalink:"/kb/install_iscsi_firmware_install_boot"},nextItem:{title:"Best Practices for Optimizing Longhorn Disk Performance",permalink:"/kb/best_practices_for_optimizing_longhorn_disk_performance"}},u={authorsImageUrls:[void 0]},d=[{value:"CPU and Memory",id:"cpu-and-memory",level:2},{value:"Resource Capacity",id:"resource-capacity",level:3},{value:"Resource Usage",id:"resource-usage",level:3},{value:"Resource Reservation",id:"resource-reservation",level:3},{value:"Storage",id:"storage",level:2},{value:"Reserved Storage in Longhorn",id:"reserved-storage-in-longhorn",level:3},{value:"Data Sources and Calculation",id:"data-sources-and-calculation",level:3}],p={toc:d};function m(e){var t=e.components,i=(0,r.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Harvester calculates the resource metrics using data that is dynamically collected from the system. Host-level resource metrics are calculated and then aggregated to obtain the cluster-level metrics."),(0,o.kt)("p",null,"You can view resource-related metrics on the Harvester UI."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Hosts")," screen: Displays host-level metrics"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"host level resources metrics",src:a(7026).Z,width:"3198",height:"606"}))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Dashboard")," screen: Displays cluster-level metrics"),(0,o.kt)("p",{parentName:"li"},(0,o.kt)("img",{loading:"lazy",alt:"cluster level resources metrics",src:a(2089).Z,width:"3168",height:"488"})))),(0,o.kt)("h2",{id:"cpu-and-memory"},"CPU and Memory"),(0,o.kt)("p",null,"The following sections describe the data sources and calculation methods for CPU and memory resources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Resource capacity: Baseline data"),(0,o.kt)("li",{parentName:"ul"},"Resource usage: Data source for the ",(0,o.kt)("strong",{parentName:"li"},"Used")," field on the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," screen"),(0,o.kt)("li",{parentName:"ul"},"Resource reservation: Data source for the ",(0,o.kt)("strong",{parentName:"li"},"Reserved")," field on the ",(0,o.kt)("strong",{parentName:"li"},"Hosts")," screen")),(0,o.kt)("h3",{id:"resource-capacity"},"Resource Capacity"),(0,o.kt)("p",null,"In Kubernetes, a ",(0,o.kt)("inlineCode",{parentName:"p"},"Node")," object is created for each host."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},".status.allocatable.cpu")," and ",(0,o.kt)("inlineCode",{parentName:"p"},".status.allocatable.memory")," represent the available CPU and Memory resources of a host."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# kubectl get nodes -A -oyaml\napiVersion: v1\nitems:\n- apiVersion: v1\n  kind: Node\n  metadata:\n..\n      management.cattle.io/pod-limits: \'{"cpu":"12715m","devices.kubevirt.io/kvm":"1","devices.kubevirt.io/tun":"1","devices.kubevirt.io/vhost-net":"1","memory":"17104951040"}\'\n      management.cattle.io/pod-requests: \'{"cpu":"5657m","devices.kubevirt.io/kvm":"1","devices.kubevirt.io/tun":"1","devices.kubevirt.io/vhost-net":"1","ephemeral-storage":"50M","memory":"9155862208","pods":"78"}\'\n      node.alpha.kubernetes.io/ttl: "0"\n..\n    name: harv41\n    resourceVersion: "2170215"\n    uid: b6f5850a-2fbc-4aef-8fbe-121dfb671b67\n  spec:\n    podCIDR: 10.52.0.0/24\n    podCIDRs:\n    - 10.52.0.0/24\n    providerID: rke2://harv41\n  status:\n    addresses:\n    - address: 192.168.122.141\n      type: InternalIP\n    - address: harv41\n      type: Hostname\n    allocatable:\n      cpu: "10"\n      devices.kubevirt.io/kvm: 1k\n      devices.kubevirt.io/tun: 1k\n      devices.kubevirt.io/vhost-net: 1k\n      ephemeral-storage: "149527126718"\n      hugepages-1Gi: "0"\n      hugepages-2Mi: "0"\n      memory: 20464216Ki\n      pods: "200"\n    capacity:\n      cpu: "10"\n      devices.kubevirt.io/kvm: 1k\n      devices.kubevirt.io/tun: 1k\n      devices.kubevirt.io/vhost-net: 1k\n      ephemeral-storage: 153707984Ki\n      hugepages-1Gi: "0"\n      hugepages-2Mi: "0"\n      memory: 20464216Ki\n      pods: "200"\n')),(0,o.kt)("h3",{id:"resource-usage"},"Resource Usage"),(0,o.kt)("p",null,"CPU and memory usage data is continuously collected and stored in the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeMetrics")," object. Harvester reads the data from ",(0,o.kt)("inlineCode",{parentName:"p"},"usage.cpu")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"usage.memory"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# kubectl get NodeMetrics -A -oyaml\napiVersion: v1\nitems:\n- apiVersion: metrics.k8s.io/v1beta1\n  kind: NodeMetrics\n  metadata:\n...\n    name: harv41\n  timestamp: "2024-01-23T12:04:44Z"\n  usage:\n    cpu: 891736742n\n    memory: 9845008Ki\n  window: 10.149s\n')),(0,o.kt)("h3",{id:"resource-reservation"},"Resource Reservation"),(0,o.kt)("p",null,"Harvester dynamically calculates the resource limits and requests of all pods running on a host, and updates the information to the annotations of the ",(0,o.kt)("inlineCode",{parentName:"p"},"NodeMetrics")," object."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'      management.cattle.io/pod-limits: \'{"cpu":"12715m",...,"memory":"17104951040"}\'\n      management.cattle.io/pod-requests: \'{"cpu":"5657m",...,"memory":"9155862208"}\'\n')),(0,o.kt)("p",null,"For more information, see ",(0,o.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/#requests-and-limits"},"Requests and Limits")," in the Kubernetes documentation."),(0,o.kt)("h2",{id:"storage"},"Storage"),(0,o.kt)("p",null,"Longhorn is the default Container Storage Interface (CSI) driver of Harvester, providing storage management features such as distributed block storage and tiering."),(0,o.kt)("h3",{id:"reserved-storage-in-longhorn"},"Reserved Storage in Longhorn"),(0,o.kt)("p",null,'Longhorn allows you to specify the percentage of disk space that is not allocated to the default disk on each new Longhorn node. The default value is "30". For more information, see ',(0,o.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.5.3/references/settings/#storage-reserved-percentage-for-default-disk"},"Storage Reserved Percentage For Default Disk")," in the Longhorn documentation."),(0,o.kt)("p",null,"Depending on the disk size, you can modify the default value using the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/troubleshooting/harvester/#access-embedded-rancher-and-longhorn-dashboards"},"embedded Longhorn UI"),"."),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Before changing the settings, read the Longhorn documentation carefully."))),(0,o.kt)("h3",{id:"data-sources-and-calculation"},"Data Sources and Calculation"),(0,o.kt)("p",null,"Harvester uses the following data to calculate metrics for storage resources."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageMaximum")," values of all disks (",(0,o.kt)("inlineCode",{parentName:"p"},"status.diskStatus.disk-name"),"): Total storage capacity")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Total storage capacity - Sum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageAvailable")," values of all disks (",(0,o.kt)("inlineCode",{parentName:"p"},"status.diskStatus.disk-name"),"): Data source for the ",(0,o.kt)("strong",{parentName:"p"},"Used")," field on the ",(0,o.kt)("strong",{parentName:"p"},"Hosts")," screen")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},"Sum of the ",(0,o.kt)("inlineCode",{parentName:"p"},"storageReserved")," values of all disks (",(0,o.kt)("inlineCode",{parentName:"p"},"spec.disks"),"): Data source for the ",(0,o.kt)("strong",{parentName:"p"},"Reserved")," field on the ",(0,o.kt)("strong",{parentName:"p"},"Hosts")," screen"))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'# kubectl get nodes.longhorn.io -n longhorn-system -oyaml\n\napiVersion: v1\nitems:\n- apiVersion: longhorn.io/v1beta2\n  kind: Node\n  metadata:\n..\n    name: harv41\n    namespace: longhorn-system\n..\n  spec:\n    allowScheduling: true\n    disks:\n      default-disk-ef11a18c36b01132:\n        allowScheduling: true\n        diskType: filesystem\n        evictionRequested: false\n        path: /var/lib/harvester/defaultdisk\n        storageReserved: 24220101427\n        tags: []\n..\n  status:\n..\n    diskStatus:\n      default-disk-ef11a18c36b01132:\n..\n        diskType: filesystem\n        diskUUID: d2788933-8817-44c6-b688-dee414cc1f73\n        scheduledReplica:\n          pvc-95561210-c39c-4c2e-ac9a-4a9bd72b3100-r-20affeca: 2147483648\n          pvc-9e83b2dc-6a4b-4499-ba70-70dc25b2d9aa-r-4ad05c86: 32212254720\n          pvc-bc25be1e-ca4e-4818-a16d-48353a0f2f96-r-c7b88c60: 3221225472\n          pvc-d9d3e54d-8d67-4740-861e-6373f670f1e4-r-f4c7c338: 2147483648\n          pvc-e954b5fe-bbd7-4d44-9866-6ff6684d5708-r-ba6b87b6: 5368709120\n        storageAvailable: 77699481600\n        storageMaximum:   80733671424\n        storageScheduled: 45097156608\n    region: ""\n    snapshotCheckStatus: {}\n    zone: ""\n')))}m.isMDXComponent=!0},2089:function(e,t,a){t.Z=a.p+"assets/images/cluster-resource-usage-6165985252a3fce5f61a11807124c423.png"},7026:function(e,t,a){t.Z=a.p+"assets/images/host-resource-usage-3f7d2c16335caae1ef42aa94f62a0dcb.png"}}]);