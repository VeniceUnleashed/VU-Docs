---
title: TurretRotationInfo
---


## Summary
### Constructors
| |
| ----------- |
| **[TurretRotationInfo](#constructor-0)**() |

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
| ------ | ---- |
| **[Clone](#clone)**() | [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "TurretRotationInfo" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### TurretRotationInfo {#constructor-0}
> **TurretRotationInfo**()

Creates a new [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) frostbite structure.

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
### Clone
> **Clone**(): [TurretRotationInfo](/vext/ref/fb/turretrotationinfo)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[TurretRotationInfo](/vext/ref/fb/turretrotationinfo)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [TurretRotationInfo](/vext/ref/fb/turretrotationinfo) type.

