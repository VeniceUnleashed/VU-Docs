---
title: PeerCreateGameParameters
---


## Summary
### Constructors
| |
| ----------- |
| **[PeerCreateGameParameters](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "base" >}} | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |
| {{< prop "playerCapacity" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PeerCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PeerCreateGameParameters {#constructor-0}
> **PeerCreateGameParameters**()

Creates a new [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) frostbite structure.

## Properties
### {{% prop-heading "base" %}}
> **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)**

### {{% prop-heading "playerCapacity" %}}
> **int**

## Methods
### Clone
> **Clone**(): [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) type.

