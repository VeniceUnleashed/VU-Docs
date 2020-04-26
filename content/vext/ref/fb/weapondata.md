---
title: WeaponData
---

Inherits from 
[ToolData](/vext/ref/fb/tooldata)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponData](#constructor-0)**() |
| **[WeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponData](#constructor-2)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[WeaponData](#constructor-3)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "showLaserPaintedVehicles" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponData {#constructor-0}
> **WeaponData**()

Creates a new [WeaponData](/vext/ref/fb/weapondata) frostbite instance.

### WeaponData {#constructor-1}
> **WeaponData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponData](/vext/ref/fb/weapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponData {#constructor-2}
> **WeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [WeaponData](/vext/ref/fb/weapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [WeaponData](/vext/ref/fb/weapondata). |

### WeaponData {#constructor-3}
> **WeaponData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponData](/vext/ref/fb/weapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponData](/vext/ref/fb/weapondata). |

## Properties
### {{% prop-heading "showLaserPaintedVehicles" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponData](/vext/ref/fb/weapondata) type.

