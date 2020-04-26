---
title: WeaponOverrideData
---

Inherits from 
[DataContainer](/vext/ref/shared/class/datacontainer)

## Summary
### Constructors
| |
| ----------- |
| **[WeaponOverrideData](#constructor-0)**() |
| **[WeaponOverrideData](#constructor-1)**(guid: [Guid](/vext/ref/shared/class/guid)) |
| **[WeaponOverrideData](#constructor-2)**(other: [DataContainer](/vext/ref/shared/class/datacontainer)) |

### Properties
| Name | Type |
| ---- | ---- |
| {{< prop "data" >}} | [DataContainer](/vext/ref/shared/class/datacontainer) \| nil |
| {{< prop "values" >}} | [WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)[] |

### Static members
| Name | Type |
| ---- | ---- |
| {{< static "WeaponOverrideData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/class/typeinformation) |

## Constructors
### WeaponOverrideData {#constructor-0}
> **WeaponOverrideData**()

Creates a new [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) frostbite instance.

### WeaponOverrideData {#constructor-1}
> **WeaponOverrideData**(guid: [Guid](/vext/ref/shared/class/guid))

Creates a new [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/class/guid).

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/class/guid) | The [Guid](/vext/ref/shared/class/guid) to assign to the newly created instance. |

### WeaponOverrideData {#constructor-2}
> **WeaponOverrideData**(other: [DataContainer](/vext/ref/shared/class/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/class/datacontainer) to [WeaponOverrideData](/vext/ref/fb/weaponoverridedata). Will throw an error when trying to cast from an invalid type.

#### Parameters
| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/class/datacontainer) | The instance to cast to [WeaponOverrideData](/vext/ref/fb/weaponoverridedata). |

## Properties
### {{% prop-heading "data" %}}
> **[DataContainer](/vext/ref/shared/class/datacontainer)** | **nil**

### {{% prop-heading "values" %}}
> **[WeaponOverrideValue](/vext/ref/fb/weaponoverridevalue)**[]

## Static members
### {{% static-heading "typeInfo" %}}
> [TypeInformation](/vext/ref/shared/class/typeinformation)

The type information for the [WeaponOverrideData](/vext/ref/fb/weaponoverridedata) type.

