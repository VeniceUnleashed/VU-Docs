---
title: WeaponFiringEffectsModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponFiringEffectsModifier](#constructor-0)**() |
| **[WeaponFiringEffectsModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponFiringEffectsModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponFiringEffectsModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "fireEffects1p" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata)[] |
| {{< prop "fireEffects3p" >}} | [FireEffectData](/vext/ref/fb/fireeffectdata)[] |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponFiringEffectsModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponFiringEffectsModifier {#constructor-0}

> **WeaponFiringEffectsModifier**()

Creates a new [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier) frostbite instance.

### WeaponFiringEffectsModifier {#constructor-1}

> **WeaponFiringEffectsModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponFiringEffectsModifier {#constructor-2}

> **WeaponFiringEffectsModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier). |

### WeaponFiringEffectsModifier {#constructor-3}

> **WeaponFiringEffectsModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier). |

## Properties

### {{% prop-heading "fireEffects1p" %}}

> **[FireEffectData](/vext/ref/fb/fireeffectdata)**[]

### {{% prop-heading "fireEffects3p" %}}

> **[FireEffectData](/vext/ref/fb/fireeffectdata)**[]

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponFiringEffectsModifier](/vext/ref/fb/weaponfiringeffectsmodifier) type.

