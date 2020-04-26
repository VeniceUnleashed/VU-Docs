---
title: MeleeWeaponData
---

Inherits from [WeaponData](/vext/ref/fb/weapondata)

## Summary

### Constructors

|  |
| --- |
| **[MeleeWeaponData](#constructor-0)**() |
| **[MeleeWeaponData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[MeleeWeaponData](#constructor-2)**(other: [WeaponData](/vext/ref/fb/weapondata)) |
| **[MeleeWeaponData](#constructor-3)**(other: [ToolData](/vext/ref/fb/tooldata)) |
| **[MeleeWeaponData](#constructor-4)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "useCannedAnimation" >}} | bool |
| {{< prop "useSphereDamage" >}} | bool |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "MeleeWeaponData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### MeleeWeaponData {#constructor-0}

> **MeleeWeaponData**()

Creates a new [MeleeWeaponData](/vext/ref/fb/meleeweapondata) frostbite instance.

### MeleeWeaponData {#constructor-1}

> **MeleeWeaponData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [MeleeWeaponData](/vext/ref/fb/meleeweapondata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### MeleeWeaponData {#constructor-2}

> **MeleeWeaponData**(other: [WeaponData](/vext/ref/fb/weapondata))

Casts an instance of type [WeaponData](/vext/ref/fb/weapondata) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponData](/vext/ref/fb/weapondata) | The instance to cast to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). |

### MeleeWeaponData {#constructor-3}

> **MeleeWeaponData**(other: [ToolData](/vext/ref/fb/tooldata))

Casts an instance of type [ToolData](/vext/ref/fb/tooldata) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [ToolData](/vext/ref/fb/tooldata) | The instance to cast to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). |

### MeleeWeaponData {#constructor-4}

> **MeleeWeaponData**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [MeleeWeaponData](/vext/ref/fb/meleeweapondata). |

## Properties

### {{% prop-heading "useCannedAnimation" %}}

> **bool**

### {{% prop-heading "useSphereDamage" %}}

> **bool**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [MeleeWeaponData](/vext/ref/fb/meleeweapondata) type.

