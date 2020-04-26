---
title: WeaponShotModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponShotModifier](#constructor-0)**() |
| **[WeaponShotModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponShotModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponShotModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "initialSpeed" >}} | [Vec3](/vext/ref/shared/type/vec3) |
| {{< prop "numberOfBulletsPerShell" >}} | int |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponShotModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponShotModifier {#constructor-0}

> **WeaponShotModifier**()

Creates a new [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier) frostbite instance.

### WeaponShotModifier {#constructor-1}

> **WeaponShotModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponShotModifier {#constructor-2}

> **WeaponShotModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier). |

### WeaponShotModifier {#constructor-3}

> **WeaponShotModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier). |

## Properties

### {{% prop-heading "initialSpeed" %}}

> **[Vec3](/vext/ref/shared/type/vec3)**

### {{% prop-heading "numberOfBulletsPerShell" %}}

> **int**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponShotModifier](/vext/ref/fb/weaponshotmodifier) type.

