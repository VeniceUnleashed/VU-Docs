---
title: LevelDescription
---

## Summary

### Constructors

|  |
| --- |
| **[LevelDescription](#constructor-0)**() |
| **[LevelDescription](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "name" >}} | string |
| {{< prop "description" >}} | string |
| {{< prop "components" >}} | [LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)[] |
| {{< prop "isCoop" >}} | bool |
| {{< prop "isMenu" >}} | bool |
| {{< prop "isMultiplayer" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LevelDescription](/vext/ref/fb/leveldescription) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LevelDescription" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LevelDescription {#constructor-0}

> **LevelDescription**()

Creates a new [LevelDescription](/vext/ref/fb/leveldescription) frostbite instance.

### LevelDescription {#constructor-1}

> **LevelDescription**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LevelDescription](/vext/ref/fb/leveldescription) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "description" %}}

> **string**

### {{% prop-heading "components" %}}

> **[LevelDescriptionComponent](/vext/ref/fb/leveldescriptioncomponent)**[]

### {{% prop-heading "isCoop" %}}

> **bool**

### {{% prop-heading "isMenu" %}}

> **bool**

### {{% prop-heading "isMultiplayer" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [LevelDescription](/vext/ref/fb/leveldescription)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LevelDescription](/vext/ref/fb/leveldescription)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LevelDescription](/vext/ref/fb/leveldescription) type.

