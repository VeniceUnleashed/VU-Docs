---
title: CriteriaStarCategoryInstance
---

## Summary

### Constructors

|  |
| --- |
| **[CriteriaStarCategoryInstance](#constructor-0)**() |
| **[CriteriaStarCategoryInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "paramX" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |
| {{< prop "paramY" >}} | [StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata) \| nil |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CriteriaStarCategoryInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CriteriaStarCategoryInstance {#constructor-0}

> **CriteriaStarCategoryInstance**()

Creates a new [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) frostbite instance.

### CriteriaStarCategoryInstance {#constructor-1}

> **CriteriaStarCategoryInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "paramX" %}}

> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** \| **nil**

### {{% prop-heading "paramY" %}}

> **[StatsCategoryBaseData](/vext/ref/fb/statscategorybasedata)** \| **nil**

## Methods

### Clone {#clone}

> **Clone**(): [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CriteriaStarCategoryInstance](/vext/ref/fb/criteriastarcategoryinstance) type.

