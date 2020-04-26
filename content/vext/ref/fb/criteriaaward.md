---
title: CriteriaAward
---

## Summary

### Constructors

|  |
| --- |
| **[CriteriaAward](#constructor-0)**() |
| **[CriteriaAward](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "award" >}} | [AbstractAwardData](/vext/ref/fb/abstractawarddata) \| nil |
| {{< prop "count" >}} | int |
| {{< prop "sid" >}} | string |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CriteriaAward](/vext/ref/fb/criteriaaward) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CriteriaAward" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CriteriaAward {#constructor-0}

> **CriteriaAward**()

Creates a new [CriteriaAward](/vext/ref/fb/criteriaaward) frostbite instance.

### CriteriaAward {#constructor-1}

> **CriteriaAward**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CriteriaAward](/vext/ref/fb/criteriaaward) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "award" %}}

> **[AbstractAwardData](/vext/ref/fb/abstractawarddata)** \| **nil**

### {{% prop-heading "count" %}}

> **int**

### {{% prop-heading "sid" %}}

> **string**

## Methods

### Clone {#clone}

> **Clone**(): [CriteriaAward](/vext/ref/fb/criteriaaward)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CriteriaAward](/vext/ref/fb/criteriaaward)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CriteriaAward](/vext/ref/fb/criteriaaward) type.

