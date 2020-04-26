---
title: DynamicWeaponPickupSlotData
---


## Summary
### Constructors
| |
| ----------- |
| **[DynamicWeaponPickupSlotData](#constructor-0)**() |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "weaponSlot" >}} | int |
| {{< prop "altWeaponSlot" >}} | int |
| {{< prop "linkedToWeaponSlot" >}} | int |

### Methods
| Method | Returns |
| ------ | ---- |
| **[Clone](#clone)**() | [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DynamicWeaponPickupSlotData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DynamicWeaponPickupSlotData {#constructor-0}
> **DynamicWeaponPickupSlotData**()

Creates a new [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) frostbite structure.

## Properties
### {{% prop-heading "weaponSlot" %}}
> **int**

### {{% prop-heading "altWeaponSlot" %}}
> **int**

### {{% prop-heading "linkedToWeaponSlot" %}}
> **int**

## Methods
### Clone
> **Clone**(): [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)

Creates a shallow-copy clone of the structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of the original structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/class/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/class/datacontainer) will be referencing the same instance.

#### Returns
| Type | Description |
| ---- | ----------- |
| **[DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata)** | The newly created structure. |

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DynamicWeaponPickupSlotData](/vext/ref/fb/dynamicweaponpickupslotdata) type.

