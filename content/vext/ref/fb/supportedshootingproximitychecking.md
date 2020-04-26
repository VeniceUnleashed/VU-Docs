---
title: SupportedShootingProximityChecking
---

## Summary

### Constructors

|  |
| --- |
| **[SupportedShootingProximityChecking](#constructor-0)**() |
| **[SupportedShootingProximityChecking](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rayAboveGunHeightOffset" >}} | float |
| {{< prop "rayAboveLength" >}} | float |
| {{< prop "rayBelowGunHeightOffset" >}} | float |
| {{< prop "rayBelowLength" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SupportedShootingProximityChecking" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SupportedShootingProximityChecking {#constructor-0}

> **SupportedShootingProximityChecking**()

Creates a new [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) frostbite instance.

### SupportedShootingProximityChecking {#constructor-1}

> **SupportedShootingProximityChecking**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rayAboveGunHeightOffset" %}}

> **float**

### {{% prop-heading "rayAboveLength" %}}

> **float**

### {{% prop-heading "rayBelowGunHeightOffset" %}}

> **float**

### {{% prop-heading "rayBelowLength" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SupportedShootingProximityChecking](/vext/ref/fb/supportedshootingproximitychecking) type.

