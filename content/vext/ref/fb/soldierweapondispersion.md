---
title: SoldierWeaponDispersion
---


## Summary
### Constructors
| |
| ----------- |
| **[SoldierWeaponDispersion](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "standDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "crouchDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "proneDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "jumpDispersionAngle" >}} | float |
| {{< prop "proneTransitionDispersionAngle" >}} | float |
| {{< prop "moveDispersionAngle" >}} | float |
| {{< prop "moveZoomedDispersionAngle" >}} | float |
| {{< prop "decreasePerSecond" >}} | float |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponDispersion" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### SoldierWeaponDispersion {#constructor-0}
> **SoldierWeaponDispersion**()

Creates a new [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) frostbite structure.

## Properties
### {{% prop-heading "standDispersion" %}}
> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "crouchDispersion" %}}
> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "proneDispersion" %}}
> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "jumpDispersionAngle" %}}
> **float**

### {{% prop-heading "proneTransitionDispersionAngle" %}}
> **float**

### {{% prop-heading "moveDispersionAngle" %}}
> **float**

### {{% prop-heading "moveZoomedDispersionAngle" %}}
> **float**

### {{% prop-heading "decreasePerSecond" %}}
> **float**

## Methods
### Clone
> **Clone**(): [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) type.

