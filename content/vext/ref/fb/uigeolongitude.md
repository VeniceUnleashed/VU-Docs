---
title: UIGeoLongitude
---

## Summary

### Constructors

|  |
| --- |
| **[UIGeoLongitude](#constructor-0)**() |
| **[UIGeoLongitude](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "degrees" >}} | int |
| {{< prop "minuites" >}} | int |
| {{< prop "seconds" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UIGeoLongitude](/vext/ref/fb/uigeolongitude) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UIGeoLongitude" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UIGeoLongitude {#constructor-0}

> **UIGeoLongitude**()

Creates a new [UIGeoLongitude](/vext/ref/fb/uigeolongitude) frostbite instance.

### UIGeoLongitude {#constructor-1}

> **UIGeoLongitude**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UIGeoLongitude](/vext/ref/fb/uigeolongitude) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "degrees" %}}

> **int**

### {{% prop-heading "minuites" %}}

> **int**

### {{% prop-heading "seconds" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [UIGeoLongitude](/vext/ref/fb/uigeolongitude)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UIGeoLongitude](/vext/ref/fb/uigeolongitude)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UIGeoLongitude](/vext/ref/fb/uigeolongitude) type.

