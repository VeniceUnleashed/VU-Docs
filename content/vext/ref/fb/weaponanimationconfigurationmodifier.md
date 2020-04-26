---
title: WeaponAnimationConfigurationModifier
---

Inherits from [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)

## Summary

### Constructors

|  |
| --- |
| **[WeaponAnimationConfigurationModifier](#constructor-0)**() |
| **[WeaponAnimationConfigurationModifier](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |
| **[WeaponAnimationConfigurationModifier](#constructor-2)**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase)) |
| **[WeaponAnimationConfigurationModifier](#constructor-3)**(other: [DataContainer](/vext/ref/shared/type/datacontainer)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "zoomInOutMeshTransitionFactors" >}} | float[] |
| {{< prop "animationConfiguration" >}} | [AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata) |
| {{< prop "animatedFireType" >}} | [AnimatedFireEnum](/vext/ref/fb/animatedfireenum) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponAnimationConfigurationModifier" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponAnimationConfigurationModifier {#constructor-0}

> **WeaponAnimationConfigurationModifier**()

Creates a new [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier) frostbite instance.

### WeaponAnimationConfigurationModifier {#constructor-1}

> **WeaponAnimationConfigurationModifier**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

### WeaponAnimationConfigurationModifier {#constructor-2}

> **WeaponAnimationConfigurationModifier**(other: [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase))

Casts an instance of type [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [WeaponModifierBase](/vext/ref/fb/weaponmodifierbase) | The instance to cast to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier). |

### WeaponAnimationConfigurationModifier {#constructor-3}

> **WeaponAnimationConfigurationModifier**(other: [DataContainer](/vext/ref/shared/type/datacontainer))

Casts an instance of type [DataContainer](/vext/ref/shared/type/datacontainer) to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier). Will throw an error when trying to cast from an unsupported type.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **other** | [DataContainer](/vext/ref/shared/type/datacontainer) | The instance to cast to [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier). |

## Properties

### {{% prop-heading "zoomInOutMeshTransitionFactors" %}}

> **float**[]

### {{% prop-heading "animationConfiguration" %}}

> **[AnimationConfigurationData](/vext/ref/fb/animationconfigurationdata)**

### {{% prop-heading "animatedFireType" %}}

> **[AnimatedFireEnum](/vext/ref/fb/animatedfireenum)**

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponAnimationConfigurationModifier](/vext/ref/fb/weaponanimationconfigurationmodifier) type.

