---
title: WeaponAimingSimulationModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponAimingSimulationModifier](#constructor-0)**() |
| **[WeaponAimingSimulationModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponAimingSimulationModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponAimingSimulationModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "aimingController" >}} | [SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponAimingSimulationModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponAimingSimulationModifier {#constructor-0}

> **WeaponAimingSimulationModifier**()

Creates a new [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier) frostbite instance.

### WeaponAimingSimulationModifier {#constructor-1}

> **WeaponAimingSimulationModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponAimingSimulationModifier {#constructor-2}

> **WeaponAimingSimulationModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier). |

### WeaponAimingSimulationModifier {#constructor-3}

> **WeaponAimingSimulationModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier). |

## Properties

### {{% prop-heading "aimingController" %}}

> **[SoldierAimingSimulationData](/vext/ref/fb/soldieraimingsimulationdata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponAimingSimulationModifier](/vext/ref/fb/weaponaimingsimulationmodifier) type.

