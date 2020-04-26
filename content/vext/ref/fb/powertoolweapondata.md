---
title: PowerToolWeaponData
---

Inherits from 
[WeaponData](/vext/ref/fb/weapondata)

## Summary
### Constructors
| |
| ----------- |
| **[PowerToolWeaponData](#constructor-0)**() |
| **[PowerToolWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[PowerToolWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[PowerToolWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[PowerToolWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "repairSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "repairCompletedSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "damageSound" >}} | [SoundAsset](/vext/ref/fb/soundasset) \| nil |
| {{< prop "repairMaterialPair" >}} | [MaterialContainerPair](/vext/ref/fb/materialcontainerpair) \| nil |
| {{< prop "playFireEffectOnRepairOnly" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "PowerToolWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### PowerToolWeaponData {#constructor-0}
> **PowerToolWeaponData**()

Creates a new [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata) frostbite instance.

### PowerToolWeaponData {#constructor-1}
> **PowerToolWeaponData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### PowerToolWeaponData {#constructor-2}
> **PowerToolWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). |

### PowerToolWeaponData {#constructor-3}
> **PowerToolWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). |

### PowerToolWeaponData {#constructor-4}
> **PowerToolWeaponData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata). |

## Properties
### {{% prop-heading "repairSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "repairCompletedSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "damageSound" %}}
> **[SoundAsset](/vext/ref/fb/soundasset)** | **nil**

### {{% prop-heading "repairMaterialPair" %}}
> **[MaterialContainerPair](/vext/ref/fb/materialcontainerpair)** | **nil**

### {{% prop-heading "playFireEffectOnRepairOnly" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [PowerToolWeaponData](/vext/ref/fb/powertoolweapondata) type.

