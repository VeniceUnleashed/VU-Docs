---
title: AwardStarNameInstance
---

## Summary

### Constructors

|  |
| --- |
| **[AwardStarNameInstance](#constructor-0)**() |
| **[AwardStarNameInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "category" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AwardStarNameInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AwardStarNameInstance {#constructor-0}

> **AwardStarNameInstance**()

Creates a new [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) frostbite instance.

### AwardStarNameInstance {#constructor-1}

> **AwardStarNameInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "category" %}}

> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AwardStarNameInstance](/vext/ref/fb/awardstarnameinstance) type.

