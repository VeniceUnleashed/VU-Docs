---
title: LockingWeaponData
---

Inherits from 
[WeaponData](/vext/ref/fb/weapondata)

## Summary
### Constructors
| |
| ----------- |
| **[LockingWeaponData](#constructor-0)**() |
| **[LockingWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[LockingWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[LockingWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[LockingWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "lockingController" >}} | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) \| nil |
| {{< prop "secondaryLockingController" >}} | [LockingControllerData](/vext/ref/fb/lockingcontrollerdata) \| nil |
| {{< prop "warnLock" >}} | [WarnTarget](/vext/ref/fb/warntarget) |
| {{< prop "isHoming" >}} | bool |
| {{< prop "isGuidedWhenZoomed" >}} | bool |
| {{< prop "fireOnlyWhenLockedOn" >}} | bool |
| {{< prop "isGuided" >}} | bool |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "LockingWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### LockingWeaponData {#constructor-0}
> **LockingWeaponData**()

Creates a new [LockingWeaponData](/vext/ref/fb/lockingweapondata) frostbite instance.

### LockingWeaponData {#constructor-1}
> **LockingWeaponData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [LockingWeaponData](/vext/ref/fb/lockingweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### LockingWeaponData {#constructor-2}
> **LockingWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [LockingWeaponData](/vext/ref/fb/lockingweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [LockingWeaponData](/vext/ref/fb/lockingweapondata). |

### LockingWeaponData {#constructor-3}
> **LockingWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [LockingWeaponData](/vext/ref/fb/lockingweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [LockingWeaponData](/vext/ref/fb/lockingweapondata). |

### LockingWeaponData {#constructor-4}
> **LockingWeaponData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [LockingWeaponData](/vext/ref/fb/lockingweapondata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [LockingWeaponData](/vext/ref/fb/lockingweapondata). |

## Properties
### {{% prop-heading "lockingController" %}}
> **[LockingControllerData](/vext/ref/fb/lockingcontrollerdata)** | **nil**

### {{% prop-heading "secondaryLockingController" %}}
> **[LockingControllerData](/vext/ref/fb/lockingcontrollerdata)** | **nil**

### {{% prop-heading "warnLock" %}}
> **[WarnTarget](/vext/ref/fb/warntarget)**

### {{% prop-heading "isHoming" %}}
> **bool**

### {{% prop-heading "isGuidedWhenZoomed" %}}
> **bool**

### {{% prop-heading "fireOnlyWhenLockedOn" %}}
> **bool**

### {{% prop-heading "isGuided" %}}
> **bool**

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [LockingWeaponData](/vext/ref/fb/lockingweapondata) type.

