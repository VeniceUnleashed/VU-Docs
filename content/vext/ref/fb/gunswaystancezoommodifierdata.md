---
title: GunSwayStanceZoomModifierData
---

## Summary

### Constructors

|  |
| --- |
| **[GunSwayStanceZoomModifierData](#constructor-0)**() |
| **[GunSwayStanceZoomModifierData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "dispersionMod" >}} | [GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata) |
| {{< prop "recoilMagnitudeMod" >}} | float |
| {{< prop "recoilAngleMod" >}} | float |
| {{< prop "lagYawMod" >}} | float |
| {{< prop "lagPitchMod" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "GunSwayStanceZoomModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### GunSwayStanceZoomModifierData {#constructor-0}

> **GunSwayStanceZoomModifierData**()

Creates a new [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) frostbite instance.

### GunSwayStanceZoomModifierData {#constructor-1}

> **GunSwayStanceZoomModifierData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "dispersionMod" %}}

> **[GunSwayDispersionModData](/vext/ref/fb/gunswaydispersionmoddata)**

### {{% prop-heading "recoilMagnitudeMod" %}}

> **float**

### {{% prop-heading "recoilAngleMod" %}}

> **float**

### {{% prop-heading "lagYawMod" %}}

> **float**

### {{% prop-heading "lagPitchMod" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [GunSwayStanceZoomModifierData](/vext/ref/fb/gunswaystancezoommodifierdata) type.

