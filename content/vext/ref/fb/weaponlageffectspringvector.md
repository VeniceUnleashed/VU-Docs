---
title: WeaponLagEffectSpringVector
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponLagEffectSpringVector](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "springX" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |
| {{< prop "springY" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |
| {{< prop "springZ" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagEffectSpringVector" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponLagEffectSpringVector {#constructor-0}
> **WeaponLagEffectSpringVector**()

Creates a new [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) frostbite structure.

## Properties
### {{% prop-heading "springX" %}}
> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

### {{% prop-heading "springY" %}}
> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

### {{% prop-heading "springZ" %}}
> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

## Methods
### Clone
> **Clone**(): [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) type.

