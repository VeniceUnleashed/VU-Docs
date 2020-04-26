---
title: CustomizeVisual
---

## Summary

### Constructors

|  |
| --- |
| **[CustomizeVisual](#constructor-0)**() |
| **[CustomizeVisual](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "visual" >}} | [UnlockAsset](/vext/ref/fb/unlockasset)[] |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [CustomizeVisual](/vext/ref/fb/customizevisual) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "CustomizeVisual" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### CustomizeVisual {#constructor-0}

> **CustomizeVisual**()

Creates a new [CustomizeVisual](/vext/ref/fb/customizevisual) frostbite instance.

### CustomizeVisual {#constructor-1}

> **CustomizeVisual**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [CustomizeVisual](/vext/ref/fb/customizevisual) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "visual" %}}

> **[UnlockAsset](/vext/ref/fb/unlockasset)**[]

## Methods

### Clone {#clone}

> **Clone**(): [CustomizeVisual](/vext/ref/fb/customizevisual)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[CustomizeVisual](/vext/ref/fb/customizevisual)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [CustomizeVisual](/vext/ref/fb/customizevisual) type.

