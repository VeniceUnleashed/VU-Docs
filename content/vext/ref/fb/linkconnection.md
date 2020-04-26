---
title: LinkConnection
---

## Summary

### Constructors

|  |
| --- |
| **[LinkConnection](#constructor-0)**() |
| **[LinkConnection](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "source" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "target" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "sourceFieldId" >}} | int |
| {{< prop "targetFieldId" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [LinkConnection](/vext/ref/fb/linkconnection) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "LinkConnection" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### LinkConnection {#constructor-0}

> **LinkConnection**()

Creates a new [LinkConnection](/vext/ref/fb/linkconnection) frostbite instance.

### LinkConnection {#constructor-1}

> **LinkConnection**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [LinkConnection](/vext/ref/fb/linkconnection) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "source" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "target" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "sourceFieldId" %}}

> **int**

### {{% prop-heading "targetFieldId" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [LinkConnection](/vext/ref/fb/linkconnection)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[LinkConnection](/vext/ref/fb/linkconnection)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [LinkConnection](/vext/ref/fb/linkconnection) type.

