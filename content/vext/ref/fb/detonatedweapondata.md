---
title: DetonatedWeaponData
---

Inherits from 
[WeaponData](/vext/ref/fb/weapondata)

## Summary
### Constructors
| |
| ----------- |
| **[DetonatedWeaponData](#constructor-0)**() |
| **[DetonatedWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[DetonatedWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[DetonatedWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[DetonatedWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lockingController" >}} | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) \| nil |
| {{< prop "range" >}} | float |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "DetonatedWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### DetonatedWeaponData {#constructor-0}
> **DetonatedWeaponData**()

Creates a new [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata) frostbite instance.

### DetonatedWeaponData {#constructor-1}
> **DetonatedWeaponData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### DetonatedWeaponData {#constructor-2}
> **DetonatedWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). |

### DetonatedWeaponData {#constructor-3}
> **DetonatedWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). |

### DetonatedWeaponData {#constructor-4}
> **DetonatedWeaponData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata). |

## Properties
### {{% prop-heading "lockingController" %}}
> **[LockingControllerData](/vext/ref/fb/lockingcontrollerdata)** | **nil**

### {{% prop-heading "range" %}}
> **float**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [DetonatedWeaponData](/vext/ref/fb/detonatedweapondata) type.

