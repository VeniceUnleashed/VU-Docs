---
title: LevelDescriptionInclusionCategory
---

## Summary

### Constructors

|  |
| --- |
| **[LevelDescriptionInclusionCategory](#constructor-0)**() |
| **[LevelDescriptionInclusionCategory](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | string |
| {{< prop "mode" >}} | string[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LevelDescriptionInclusionCategory" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LevelDescriptionInclusionCategory {#constructor-0}

> **LevelDescriptionInclusionCategory**()

Creates a new [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) frostbite instance.

### LevelDescriptionInclusionCategory {#constructor-1}

> **LevelDescriptionInclusionCategory**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "category" %}}

> **string**

### {{% prop-heading "mode" %}}

> **string**[]

## Methods

### Clone {#clone}

> **Clone**(): [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LevelDescriptionInclusionCategory](/vext/ref/fb/leveldescriptioninclusioncategory) type.

