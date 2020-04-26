---
title: MaterialInteractionGridRow
---

## Summary

### Constructors

|  |
| --- |
| **[MaterialInteractionGridRow](#constructor-0)**() |
| **[MaterialInteractionGridRow](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "items" >}} | [MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MaterialInteractionGridRow" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MaterialInteractionGridRow {#constructor-0}

> **MaterialInteractionGridRow**()

Creates a new [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow) frostbite instance.

### MaterialInteractionGridRow {#constructor-1}

> **MaterialInteractionGridRow**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "items" %}}

> **[MaterialRelationPropertyPair](/vext/ref/fb/materialrelationpropertypair)**[]

## Methods

### Clone {#clone}

> **Clone**(): [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MaterialInteractionGridRow](/vext/ref/fb/materialinteractiongridrow) type.

