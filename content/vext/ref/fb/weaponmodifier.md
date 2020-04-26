---
title: WeaponModifier
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponModifier](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "dummyToMakeFrostEDcompile" >}} | int |
| {{< prop "weaponMiscModifierSettings" >}} | [WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings) \| nil |
| {{< prop "weaponFiringDataModifier" >}} | [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier) \| nil |
| {{< prop "weaponFiringEffectsModifier" >}} | [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier) \| nil |
| {{< prop "weaponSoundModifier" >}} | [WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier) \| nil |
| {{< prop "weaponShotModifier" >}} | [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier) \| nil |
| {{< prop "weaponProjectileModifier" >}} | [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier) \| nil |
| {{< prop "weaponAimingSimulationModifier" >}} | [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier) \| nil |
| {{< prop "weaponAnimationConfigurationModifier" >}} | [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier) \| nil |
| {{< prop "weaponAnimTypeModifier" >}} | [WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier) \| nil |
| {{< prop "weaponMagazineModifier" >}} | [WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier) \| nil |
| {{< prop "weaponZoomModifier" >}} | [WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier) \| nil |
| {{< prop "unlocks" true >}} | [UnlockAsset](/vext/ref/fb/unlockasset)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponModifier](/vext/ref/fb/weaponmodifier) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponModifier {#constructor-0}
> **WeaponModifier**()

Creates a new [WeaponModifier](/vext/ref/fb/weaponmodifier) frostbite structure.

## Properties
### {{% prop-heading "dummyToMakeFrostEDcompile" %}}
> **int**

### {{% prop-heading "weaponMiscModifierSettings" %}}
> **[WeaponMiscModifierSettings](/vext/ref/fb/weaponmiscmodifiersettings)** | **nil**

### {{% prop-heading "weaponFiringDataModifier" %}}
> **[WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier)** | **nil**

### {{% prop-heading "weaponFiringEffectsModifier" %}}
> **[WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier)** | **nil**

### {{% prop-heading "weaponSoundModifier" %}}
> **[WeaponSoundModifier](/vext/ref/fb/weaponsoundmodifier)** | **nil**

### {{% prop-heading "weaponShotModifier" %}}
> **[WeaponShotModifier](/vext/ref/fb/weaponshotmodifier)** | **nil**

### {{% prop-heading "weaponProjectileModifier" %}}
> **[WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier)** | **nil**

### {{% prop-heading "weaponAimingSimulationModifier" %}}
> **[WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier)** | **nil**

### {{% prop-heading "weaponAnimationConfigurationModifier" %}}
> **[WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier)** | **nil**

### {{% prop-heading "weaponAnimTypeModifier" %}}
> **[WeaponAnimTypeModifier](/vext/ref/fb/weaponanimtypemodifier)** | **nil**

### {{% prop-heading "weaponMagazineModifier" %}}
> **[WeaponMagazineModifier](/vext/ref/fb/weaponmagazinemodifier)** | **nil**

### {{% prop-heading "weaponZoomModifier" %}}
> **[WeaponZoomModifier](/vext/ref/fb/weaponzoommodifier)** | **nil**

### {{% prop-heading "unlocks" true %}}
> **[UnlockAsset](/vext/ref/fb/unlockasset)**[]

## Methods
### Clone
> **Clone**(): [WeaponModifier](/vext/ref/fb/weaponmodifier)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponModifier](/vext/ref/fb/weaponmodifier)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponModifier](/vext/ref/fb/weaponmodifier) type.

