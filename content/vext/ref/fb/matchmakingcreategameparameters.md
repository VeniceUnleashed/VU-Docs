---
title: MatchmakingCreateGameParameters
---


## Summary
### Constructors
| |
| ----------- |
| **[MatchmakingCreateGameParameters](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "gameTopology" >}} | [MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology) |
| {{< prop "peerMode" >}} | [MatchmakingPeer2PeerMode](/vext/ref/fb/matchmakingpeer2peermode) |
| {{< prop "voipTopology" >}} | [MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology) |
| {{< prop "settings" >}} | [MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings) |
| {{< prop "attributes" >}} | [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)[] |
| {{< prop "queueCapacity" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### MatchmakingCreateGameParameters {#constructor-0}
> **MatchmakingCreateGameParameters**()

Creates a new [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) frostbite structure.

## Properties
### {{% prop-heading "gameTopology" %}}
> **[MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology)**

### {{% prop-heading "peerMode" %}}
> **[MatchmakingPeer2PeerMode](/vext/ref/fb/matchmakingpeer2peermode)**

### {{% prop-heading "voipTopology" %}}
> **[MatchmakingNetworkTopology](/vext/ref/fb/matchmakingnetworktopology)**

### {{% prop-heading "settings" %}}
> **[MatchmakingGameSettings](/vext/ref/fb/matchmakinggamesettings)**

### {{% prop-heading "attributes" %}}
> **[MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)**[]

### {{% prop-heading "queueCapacity" %}}
> **int**

## Methods
### Clone
> **Clone**(): [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) type.

