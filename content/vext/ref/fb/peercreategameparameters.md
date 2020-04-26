---
title: PeerCreateGameParameters
---

## Summary

### Constructors

|  |
| --- |
| **[PeerCreateGameParameters](#constructor-0)**() |
| **[PeerCreateGameParameters](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "base" >}} | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |
| {{< prop "playerCapacity" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "PeerCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### PeerCreateGameParameters {#constructor-0}

> **PeerCreateGameParameters**()

Creates a new [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) frostbite instance.

### PeerCreateGameParameters {#constructor-1}

> **PeerCreateGameParameters**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "base" %}}

> **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)**

### {{% prop-heading "playerCapacity" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [PeerCreateGameParameters](/vext/ref/fb/peercreategameparameters) type.

