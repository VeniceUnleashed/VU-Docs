---
title: MatchmakingUserExtendedDataRule
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingUserExtendedDataRule](#constructor-0)**() |
| **[MatchmakingUserExtendedDataRule](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rule" >}} | string |
| {{< prop "minFitThresHold" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingUserExtendedDataRule" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingUserExtendedDataRule {#constructor-0}

> **MatchmakingUserExtendedDataRule**()

Creates a new [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule) frostbite instance.

### MatchmakingUserExtendedDataRule {#constructor-1}

> **MatchmakingUserExtendedDataRule**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rule" %}}

> **string**

### {{% prop-heading "minFitThresHold" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingUserExtendedDataRule](/vext/ref/fb/matchmakinguserextendeddatarule) type.

