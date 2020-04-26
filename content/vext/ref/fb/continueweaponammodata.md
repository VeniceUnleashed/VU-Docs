---
title: ContinueWeaponAmmoData
---


## Summary
### Constructors
| |
| ----------- |
| **[ContinueWeaponAmmoData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "minMags" >}} | int |
| {{< prop "weaponSlot" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "ContinueWeaponAmmoData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### ContinueWeaponAmmoData {#constructor-0}
> **ContinueWeaponAmmoData**()

Creates a new [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) frostbite structure.

## Properties
### {{% prop-heading "minMags" %}}
> **int**

### {{% prop-heading "weaponSlot" %}}
> **int**

## Methods
### Clone
> **Clone**(): [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [ContinueWeaponAmmoData](/vext/ref/fb/continueweaponammodata) type.

