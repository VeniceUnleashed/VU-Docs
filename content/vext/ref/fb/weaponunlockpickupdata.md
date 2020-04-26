---
title: WeaponUnlockPickupData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponUnlockPickupData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "unlockWeaponAndSlot" >}} | [UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot) |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |
| {{< prop "minAmmo" >}} | int |
| {{< prop "maxAmmo" >}} | int |
| {{< prop "defaultToFullAmmo" >}} | bool |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponUnlockPickupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponUnlockPickupData {#constructor-0}
> **WeaponUnlockPickupData**()

Creates a new [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) frostbite structure.

## Properties
### {{% prop-heading "unlockWeaponAndSlot" %}}
> **[UnlockWeaponAndSlot](/vext/ref/fb/unlockweaponandslot)**

### {{% prop-heading "altWeaponSlot" %}}
> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}
> **int**

### {{% prop-heading "minAmmo" %}}
> **int**

### {{% prop-heading "maxAmmo" %}}
> **int**

### {{% prop-heading "defaultToFullAmmo" %}}
> **bool**

## Methods
### Clone
> **Clone**(): [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponUnlockPickupData](/vext/ref/fb/weaponunlockpickupdata) type.

