---
title: UITaggedVehicleCrosshair
---

## Summary

### Constructors

|  |
| --- |
| **[UITaggedVehicleCrosshair](#constructor-0)**() |
| **[UITaggedVehicleCrosshair](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minDistance" >}} | float |
| {{< prop "maxDistance" >}} | float |
| {{< prop "minSize" >}} | int |
| {{< prop "maxSize" >}} | int |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "UITaggedVehicleCrosshair" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### UITaggedVehicleCrosshair {#constructor-0}

> **UITaggedVehicleCrosshair**()

Creates a new [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) frostbite instance.

### UITaggedVehicleCrosshair {#constructor-1}

> **UITaggedVehicleCrosshair**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minDistance" %}}

> **float**

### {{% prop-heading "maxDistance" %}}

> **float**

### {{% prop-heading "minSize" %}}

> **int**

### {{% prop-heading "maxSize" %}}

> **int**

## Methods

### Clone {#clone}

> **Clone**(): [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [UITaggedVehicleCrosshair](/vext/ref/fb/uitaggedvehiclecrosshair) type.

