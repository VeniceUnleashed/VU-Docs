---
title: WeaponClassModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponClassModifier](#constructor-0)**() |
| **[WeaponClassModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponClassModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponClassModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "weaponClass" >}} | [WeaponClassEnum](/vext/ref/fb/weaponclassenum) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponClassModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponClassModifier {#constructor-0}

> **WeaponClassModifier**()

Creates a new [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier) frostbite instance.

### WeaponClassModifier {#constructor-1}

> **WeaponClassModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponClassModifier {#constructor-2}

> **WeaponClassModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier). |

### WeaponClassModifier {#constructor-3}

> **WeaponClassModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier). |

## Properties

### {{% prop-heading "weaponClass" %}}

> **[WeaponClassEnum](/vext/ref/fb/weaponclassenum)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponClassModifier](/vext/ref/fb/weaponclassmodifier) type.

