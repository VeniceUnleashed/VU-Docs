---
title: MedicBagWeaponData
---

Inherits from [WeaponData](/vext/ref/fb/weapondata)

## Summary

### Constructors

|  |
| --- |
| **[MedicBagWeaponData](#constructor-0)**() |
| **[MedicBagWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MedicBagWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[MedicBagWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[MedicBagWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "healer" >}} | [HealerData](/vext/ref/fb/healerdata) |
| {{< prop "healthPointsRefillSpeed" >}} | float |
| {{< prop "healthPointsPerBag" >}} | float |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MedicBagWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MedicBagWeaponData {#constructor-0}

> **MedicBagWeaponData**()

Creates a new [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata) frostbite instance.

### MedicBagWeaponData {#constructor-1}

> **MedicBagWeaponData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MedicBagWeaponData {#constructor-2}

> **MedicBagWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). |

### MedicBagWeaponData {#constructor-3}

> **MedicBagWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). |

### MedicBagWeaponData {#constructor-4}

> **MedicBagWeaponData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata). |

## Properties

### {{% prop-heading "healer" %}}

> **[HealerData](/vext/ref/fb/healerdata)**

### {{% prop-heading "healthPointsRefillSpeed" %}}

> **float**

### {{% prop-heading "healthPointsPerBag" %}}

> **float**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MedicBagWeaponData](/vext/ref/fb/medicbagweapondata) type.

