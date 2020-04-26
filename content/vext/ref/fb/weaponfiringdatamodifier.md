---
title: WeaponFiringDataModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponFiringDataModifier](#constructor-0)**() |
| **[WeaponFiringDataModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponFiringDataModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponFiringDataModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponFiring" >}} | [WeaponFiringData](/vext/ref/fb/weaponfiringdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponFiringDataModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponFiringDataModifier {#constructor-0}

> **WeaponFiringDataModifier**()

Creates a new [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier) frostbite instance.

### WeaponFiringDataModifier {#constructor-1}

> **WeaponFiringDataModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponFiringDataModifier {#constructor-2}

> **WeaponFiringDataModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier). |

### WeaponFiringDataModifier {#constructor-3}

> **WeaponFiringDataModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier). |

## Properties

### {{% prop-heading "weaponFiring" %}}

> **[WeaponFiringData](/vext/ref/fb/weaponfiringdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponFiringDataModifier](/vext/ref/fb/weaponfiringdatamodifier) type.

