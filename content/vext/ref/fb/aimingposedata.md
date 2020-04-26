---
title: AimingPoseData
---

## Summary

### Constructors

|  |
| --- |
| **[AimingPoseData](#constructor-0)**() |
| **[AimingPoseData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "minimumPitch" >}} | float |
| {{< prop "maximumPitch" >}} | float |
| {{< prop "targetingFov" >}} | float |
| {{< prop "aimSteadiness" >}} | float |
| {{< prop "speedMultiplier" >}} | float |
| {{< prop "recoilMultiplier" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AimingPoseData](/vext/ref/fb/aimingposedata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AimingPoseData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AimingPoseData {#constructor-0}

> **AimingPoseData**()

Creates a new [AimingPoseData](/vext/ref/fb/aimingposedata) frostbite instance.

### AimingPoseData {#constructor-1}

> **AimingPoseData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AimingPoseData](/vext/ref/fb/aimingposedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "minimumPitch" %}}

> **float**

### {{% prop-heading "maximumPitch" %}}

> **float**

### {{% prop-heading "targetingFov" %}}

> **float**

### {{% prop-heading "aimSteadiness" %}}

> **float**

### {{% prop-heading "speedMultiplier" %}}

> **float**

### {{% prop-heading "recoilMultiplier" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [AimingPoseData](/vext/ref/fb/aimingposedata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AimingPoseData](/vext/ref/fb/aimingposedata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AimingPoseData](/vext/ref/fb/aimingposedata) type.

