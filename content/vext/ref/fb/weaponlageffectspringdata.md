---
title: WeaponLagEffectSpringData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponLagEffectSpringData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "constant" >}} | float |
| {{< prop "damping" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagEffectSpringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponLagEffectSpringData {#constructor-0}
> **WeaponLagEffectSpringData**()

Creates a new [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) frostbite structure.

## Properties
### {{% prop-heading "constant" %}}
> **float**

### {{% prop-heading "damping" %}}
> **float**

## Methods
### Clone
> **Clone**(): [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) type.

