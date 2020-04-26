---
title: MatchmakingGameAttribute
---

## Summary

### Constructors

|  |
| --- |
| **[MatchmakingGameAttribute](#constructor-0)**() |
| **[MatchmakingGameAttribute](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "attribute" >}} | string |
| {{< prop "value" >}} | string |
| {{< prop "override" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MatchmakingGameAttribute" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MatchmakingGameAttribute {#constructor-0}

> **MatchmakingGameAttribute**()

Creates a new [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) frostbite instance.

### MatchmakingGameAttribute {#constructor-1}

> **MatchmakingGameAttribute**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "attribute" %}}

> **string**

### {{% prop-heading "value" %}}

> **string**

### {{% prop-heading "override" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MatchmakingGameAttribute](/vext/ref/fb/matchmakinggameattribute) type.

