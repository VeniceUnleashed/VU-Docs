---
title: UILeaderboardData
---

## Summary

### Constructors

|  |
| --- |
| **[UILeaderboardData](#constructor-0)**() |
| **[UILeaderboardData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UILeaderboardData](/vext/ref/fb/uileaderboarddata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UILeaderboardData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UILeaderboardData {#constructor-0}

> **UILeaderboardData**()

Creates a new [UILeaderboardData](/vext/ref/fb/uileaderboarddata) frostbite instance.

### UILeaderboardData {#constructor-1}

> **UILeaderboardData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UILeaderboardData](/vext/ref/fb/uileaderboarddata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "description" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [UILeaderboardData](/vext/ref/fb/uileaderboarddata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UILeaderboardData](/vext/ref/fb/uileaderboarddata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UILeaderboardData](/vext/ref/fb/uileaderboarddata) type.

