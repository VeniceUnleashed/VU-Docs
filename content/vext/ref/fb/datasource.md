---
title: DataSource
---

## Summary

### Constructors

|  |
| --- |
| **[DataSource](#constructor-0)**() |
| **[DataSource](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "category" >}} | [UIComponentData](/vext/ref/fb/uicomponentdata) \| nil |
| {{< prop "value" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DataSource](/vext/ref/fb/datasource) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataSource" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataSource {#constructor-0}

> **DataSource**()

Creates a new [DataSource](/vext/ref/fb/datasource) frostbite instance.

### DataSource {#constructor-1}

> **DataSource**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataSource](/vext/ref/fb/datasource) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "category" %}}

> **[UIComponentData](/vext/ref/fb/uicomponentdata)** \| **nil**

### {{% prop-heading "value" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [DataSource](/vext/ref/fb/datasource)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataSource](/vext/ref/fb/datasource)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataSource](/vext/ref/fb/datasource) type.

