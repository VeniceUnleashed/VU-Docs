---
title: TurretRotationInfo
---

## Summary

### Constructors

|  |
| --- |
| **[TurretRotationInfo](#constructor-0)**() |
| **[TurretRotationInfo](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "rotationAxis" >}} | [RotationAxis](/vext/ref/fb/rotationaxis) |
| {{< prop "channel" >}} | [RotationChannel](/vext/ref/fb/rotationchannel) |
| {{< prop "maxRotation" >}} | float |
| {{< prop "minRotation" >}} | float |
| {{< prop "phaseOffset" >}} | float |
| {{< prop "normalizeRotation" >}} | bool |
| {{< prop "invertRotation" >}} | bool |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "TurretRotationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### TurretRotationInfo {#constructor-0}

> **TurretRotationInfo**()

Creates a new [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) frostbite instance.

### TurretRotationInfo {#constructor-1}

> **TurretRotationInfo**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "rotationAxis" %}}

> **[RotationAxis](/vext/ref/fb/rotationaxis)**

### {{% prop-heading "channel" %}}

> **[RotationChannel](/vext/ref/fb/rotationchannel)**

### {{% prop-heading "maxRotation" %}}

> **float**

### {{% prop-heading "minRotation" %}}

> **float**

### {{% prop-heading "phaseOffset" %}}

> **float**

### {{% prop-heading "normalizeRotation" %}}

> **bool**

### {{% prop-heading "invertRotation" %}}

> **bool**

## Methods

### Clone {#clone}

> **Clone**(): [TurretRotationInfo](/vext/ref/fb/turretrotationinfo)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[TurretRotationInfo](/vext/ref/fb/turretrotationinfo)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) type.

