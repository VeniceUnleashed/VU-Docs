---
title: WeaponProjectileModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponProjectileModifier](#constructor-0)**() |
| **[WeaponProjectileModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponProjectileModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponProjectileModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "projectileData" >}} | [ProjectileEntityData](/vext/ref/fb/projectileentitydata) \| nil |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponProjectileModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponProjectileModifier {#constructor-0}

> **WeaponProjectileModifier**()

Creates a new [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier) frostbite instance.

### WeaponProjectileModifier {#constructor-1}

> **WeaponProjectileModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponProjectileModifier {#constructor-2}

> **WeaponProjectileModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier). |

### WeaponProjectileModifier {#constructor-3}

> **WeaponProjectileModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier). |

## Properties

### {{% prop-heading "projectileData" %}}

> **[ProjectileEntityData](/vext/ref/fb/projectileentitydata)** \| **nil**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponProjectileModifier](/vext/ref/fb/weaponprojectilemodifier) type.

