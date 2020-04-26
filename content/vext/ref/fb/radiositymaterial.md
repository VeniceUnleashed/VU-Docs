---
title: RadiosityMaterial
---

Inherits from [DataContainer](/vext/ref/shared/type/datacontainer)

## Summary

### Constructors

|  |
| --- |
| **[RadiosityMaterial](#constructor-0)**() |
| **[RadiosityMaterial](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[RadiosityMaterial](#constructor-2)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "color" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "name" >}} | string |
| {{< prop "emissive" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "RadiosityMaterial" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### RadiosityMaterial {#constructor-0}

> **RadiosityMaterial**()

Creates a new [RadiosityMaterial](/vext/ref/fb/radiositymaterial) frostbite instance.

### RadiosityMaterial {#constructor-1}

> **RadiosityMaterial**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [RadiosityMaterial](/vext/ref/fb/radiositymaterial) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### RadiosityMaterial {#constructor-2}

> **RadiosityMaterial**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [RadiosityMaterial](/vext/ref/fb/radiositymaterial). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [RadiosityMaterial](/vext/ref/fb/radiositymaterial). |

## Properties

### {{% prop-heading "color" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "name" %}}

> **string**

### {{% prop-heading "emissive" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [RadiosityMaterial](/vext/ref/fb/radiositymaterial) type.

