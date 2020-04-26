---
title: WeaponLagSpringEffectData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponLagSpringEffectData](#constructor-0)**() |
| **[WeaponLagSpringEffectData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponLagSpringEffectData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "offsetSprings" >}} | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) |
| {{< prop "rotationSprings" >}} | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) |
| {{< prop "jumpForces" >}} | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) |
| {{< prop "landForces" >}} | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) |
| {{< prop "poseUpForces" >}} | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) |
| {{< prop "poseDownForces" >}} | [WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata) |
| {{< prop "zoomForceModifier" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagSpringEffectData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponLagSpringEffectData {#constructor-0}
> **WeaponLagSpringEffectData**()

Creates a new [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata) frostbite instance.

### WeaponLagSpringEffectData {#constructor-1}
> **WeaponLagSpringEffectData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponLagSpringEffectData {#constructor-2}
> **WeaponLagSpringEffectData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata). |

## Properties
### {{% prop-heading "offsetSprings" %}}
> **[WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)**

### {{% prop-heading "rotationSprings" %}}
> **[WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)**

### {{% prop-heading "jumpForces" %}}
> **[WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)**

### {{% prop-heading "landForces" %}}
> **[WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)**

### {{% prop-heading "poseUpForces" %}}
> **[WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)**

### {{% prop-heading "poseDownForces" %}}
> **[WeaponLagEffectForceData](/vext/ref/fb/weaponlageffectforcedata)**

### {{% prop-heading "zoomForceModifier" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponLagSpringEffectData](/vext/ref/fb/weaponlagspringeffectdata) type.

