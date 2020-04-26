---
title: DataField
---

## Summary

### Constructors

|  |
| --- |
| **[DataField](#constructor-0)**() |
| **[DataField](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "value" >}} | string |
| {{< prop "valueRef" >}} | [DataContainer](/vext/ref/shared/type/datacontainer) \| nil |
| {{< prop "id" >}} | int |
| {{< prop "accessType" >}} | [FieldAccessType](/vext/ref/fb/fieldaccesstype) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [DataField](/vext/ref/fb/datafield) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "DataField" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### DataField {#constructor-0}

> **DataField**()

Creates a new [DataField](/vext/ref/fb/datafield) frostbite instance.

### DataField {#constructor-1}

> **DataField**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [DataField](/vext/ref/fb/datafield) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "value" %}}

> **string**

### {{% prop-heading "valueRef" %}}

> **[DataContainer](/vext/ref/shared/type/datacontainer)** \| **nil**

### {{% prop-heading "id" %}}

> **int**

### {{% prop-heading "accessType" %}}

> **[FieldAccessType](/vext/ref/fb/fieldaccesstype)**

## Methods

### Clone {#clone}

> **Clone**(): [DataField](/vext/ref/fb/datafield)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[DataField](/vext/ref/fb/datafield)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [DataField](/vext/ref/fb/datafield) type.

