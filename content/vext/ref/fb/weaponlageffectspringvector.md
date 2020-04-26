---
title: WeaponLagEffectSpringVector
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponLagEffectSpringVector](#constructor-0)**() |
| **[WeaponLagEffectSpringVector](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "springX" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |
| {{< prop "springY" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |
| {{< prop "springZ" >}} | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagEffectSpringVector" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponLagEffectSpringVector {#constructor-0}

> **WeaponLagEffectSpringVector**()

Creates a new [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) frostbite instance.

### WeaponLagEffectSpringVector {#constructor-1}

> **WeaponLagEffectSpringVector**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "springX" %}}

> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

### {{% prop-heading "springY" %}}

> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

### {{% prop-heading "springZ" %}}

> **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponLagEffectSpringVector](/vext/ref/fb/weaponlageffectspringvector) type.

