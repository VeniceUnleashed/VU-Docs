---
title: MixGroupPropertyValue
---

## Summary

### Constructors

|  |
| --- |
| **[MixGroupPropertyValue](#constructor-0)**() |
| **[MixGroupPropertyValue](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "property" >}} | int |
| {{< prop "value" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MixGroupPropertyValue" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MixGroupPropertyValue {#constructor-0}

> **MixGroupPropertyValue**()

Creates a new [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) frostbite instance.

### MixGroupPropertyValue {#constructor-1}

> **MixGroupPropertyValue**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "property" %}}

> **int**

### {{% prop-heading "value" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MixGroupPropertyValue](/vext/ref/fb/mixgrouppropertyvalue) type.

