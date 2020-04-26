---
title: BlazeCreateGameParameters
---

## Summary

### Constructors

|  |
| --- |
| **[BlazeCreateGameParameters](#constructor-0)**() |
| **[BlazeCreateGameParameters](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "base" >}} | [MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "BlazeCreateGameParameters" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### BlazeCreateGameParameters {#constructor-0}

> **BlazeCreateGameParameters**()

Creates a new [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) frostbite instance.

### BlazeCreateGameParameters {#constructor-1}

> **BlazeCreateGameParameters**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "base" %}}

> **[MatchmakingCreateGameParameters](/vext/ref/fb/matchmakingcreategameparameters)**

## Methods

### Clone {#clone}

> **Clone**(): [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [BlazeCreateGameParameters](/vext/ref/fb/blazecreategameparameters) type.

