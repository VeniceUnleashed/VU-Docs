---
title: WeaponModifierData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponModifierData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockAsset" >}} | [UnlockAssetBase](/vext/ref/fb/unlockassetbase) \| nil |
| {{< prop "modifiers" >}} | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)[] |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponModifierData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponModifierData {#constructor-0}
> **WeaponModifierData**()

Creates a new [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) frostbite structure.

## Properties
### {{% prop-heading "unlockAsset" %}}
> **[UnlockAssetBase](/vext/ref/fb/unlockassetbase)** | **nil**

### {{% prop-heading "modifiers" %}}
> **[WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)**[]

## Methods
### Clone
> **Clone**(): [WeaponModifierData](/vext/ref/fb/weaponmodifierdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponModifierData](/vext/ref/fb/weaponmodifierdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponModifierData](/vext/ref/fb/weaponmodifierdata) type.

