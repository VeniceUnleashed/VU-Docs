---
title: PeerServerBackendData
---

Inherits from 
[ServerBackendData](/vext/ref/fb/serverbackenddata)

## Summary
### Constructors
| |
| ----------- |
| **[PeerServerBackendData](#constructor-0)**() |
| **[PeerServerBackendData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PeerServerBackendData](#constructor-2)**(other: [ServerBackendData](/vext/ref/fb/serverbackenddata)) |
| **[PeerServerBackendData](#constructor-3)**(other: [Asset](/vext/ref/fb/asset)) |
| **[PeerServerBackendData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "createParameters" >}} | [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PeerServerBackendData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PeerServerBackendData {#constructor-0}
> **PeerServerBackendData**()

Creates a new [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata) frostbite instance.

### PeerServerBackendData {#constructor-1}
> **PeerServerBackendData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PeerServerBackendData {#constructor-2}
> **PeerServerBackendData**(other: [ServerBackendData](/vext/ref/fb/serverbackenddata))

Casts an instance of type [ServerBackendData](/vext/ref/fb/serverbackenddata) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ServerBackendData](/vext/ref/fb/serverbackenddata) | The instance to cast to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). |

### PeerServerBackendData {#constructor-3}
> **PeerServerBackendData**(other: [Asset](/vext/ref/fb/asset))

Casts an instance of type [Asset](/vext/ref/fb/asset) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [Asset](/vext/ref/fb/asset) | The instance to cast to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). |

### PeerServerBackendData {#constructor-4}
> **PeerServerBackendData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata). |

## Properties
### {{% prop-heading "createParameters" %}}
> **[PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters)**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PeerServerBackendData](/vext/ref/fb/peerserverbackenddata) type.

