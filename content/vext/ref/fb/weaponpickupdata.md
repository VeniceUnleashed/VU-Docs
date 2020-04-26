---
title: WeaponPickupData
---


## Summary
### Constructors
| |
| ----------- |
| **[WeaponPickupData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weapon" >}} | [SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint) \| nil |
| {{< prop "weaponSlot" >}} | int |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |
| {{< prop "minAmmo" >}} | int |
| {{< prop "maxAmmo" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [WeaponPickupData](/vext/ref/fb/weaponpickupdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponPickupData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponPickupData {#constructor-0}
> **WeaponPickupData**()

Creates a new [WeaponPickupData](/vext/ref/fb/weaponpickupdata) frostbite structure.

## Properties
### {{% prop-heading "weapon" %}}
> **[SoldierWeaponBlueprint](/vext/ref/fb/soldierweaponblueprint)** | **nil**

### {{% prop-heading "weaponSlot" %}}
> **int**

### {{% prop-heading "altWeaponSlot" %}}
> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}
> **int**

### {{% prop-heading "minAmmo" %}}
> **int**

### {{% prop-heading "maxAmmo" %}}
> **int**

## Methods
### Clone
> **Clone**(): [WeaponPickupData](/vext/ref/fb/weaponpickupdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[WeaponPickupData](/vext/ref/fb/weaponpickupdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponPickupData](/vext/ref/fb/weaponpickupdata) type.

