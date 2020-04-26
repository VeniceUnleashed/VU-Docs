---
title: EnlightenInputInstance
---

## Summary

### Constructors

|  |
| --- |
| **[EnlightenInputInstance](#constructor-0)**() |
| **[EnlightenInputInstance](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "transform" >}} | [LinearTransform](/vext/ref/shared/type/lineartransform) |
| {{< prop "asset" >}} | string |
| {{< prop "objectVariation" >}} | string |
| {{< prop "systemId" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "EnlightenInputInstance" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### EnlightenInputInstance {#constructor-0}

> **EnlightenInputInstance**()

Creates a new [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) frostbite instance.

### EnlightenInputInstance {#constructor-1}

> **EnlightenInputInstance**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "transform" %}}

> **[LinearTransform](/vext/ref/shared/type/lineartransform)**

### {{% prop-heading "asset" %}}

> **string**

### {{% prop-heading "objectVariation" %}}

> **string**

### {{% prop-heading "systemId" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [EnlightenInputInstance](/vext/ref/fb/enlighteninputinstance) type.

