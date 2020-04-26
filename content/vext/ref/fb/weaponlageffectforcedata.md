---
title: WeaponLagEffectForceData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponLagEffectForceData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "offsetForce" >}} | [Vec3](/vext/ref/shared/class/vec3) |
| {{< prop "rotationForce" >}} | [Vec3](/vext/ref/shared/class/vec3) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagEffectForceData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponLagEffectForceData {#constructor-0}
> **WeaponLagEffectForceData**()

Creates a new [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) frostbite structure.

## Properties
### {{% prop-heading "offsetForce" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

### {{% prop-heading "rotationForce" %}}
> **[Vec3](/vext/ref/shared/class/vec3)**

## Methods
### Clone
> **Clone**(): [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) type.

