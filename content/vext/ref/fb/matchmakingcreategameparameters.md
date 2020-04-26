---
title: MatchmakingCreateGameParameters
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingCreateGameParameters](#constructor-0)**() |
| **[MatchmakingCreateGameParameters](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

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
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingCreateGameParameters {#constructor-0}

> **MatchmakingCreateGameParameters**()

Creates a new [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) frostbite instance.

### MatchmakingCreateGameParameters {#constructor-1}

> **MatchmakingCreateGameParameters**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

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

### Clone {#clone}

> **Clone**(): [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) type.

