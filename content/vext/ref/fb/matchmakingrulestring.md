---
title: MatchmakingRuleString
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingRuleString](#constructor-0)**() |
| **[MatchmakingRuleString](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | string |
| {{< prop "platform" >}} | [MatchmakingPlatform](/vext/ref/fb/matchmakingplatform) |
| {{< prop "licenses" >}} | string[] |
| {{< prop "useOnlyIfEmpty" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingRuleString" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingRuleString {#constructor-0}

> **MatchmakingRuleString**()

Creates a new [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) frostbite instance.

### MatchmakingRuleString {#constructor-1}

> **MatchmakingRuleString**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **string**

### {{% prop-heading "platform" %}}

> **[MatchmakingPlatform](/vext/ref/fb/matchmakingplatform)**

### {{% prop-heading "licenses" %}}

> **string**[]

### {{% prop-heading "useOnlyIfEmpty" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingRuleString](/vext/ref/fb/matchmakingrulestring) type.

