---
title: WeaponLagEffectSpringData
---

## Summary

### Constructors

|  |
| --- |
| **[WeaponLagEffectSpringData](#constructor-0)**() |
| **[WeaponLagEffectSpringData](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "constant" >}} | float |
| {{< prop "damping" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "WeaponLagEffectSpringData" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### WeaponLagEffectSpringData {#constructor-0}

> **WeaponLagEffectSpringData**()

Creates a new [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) frostbite instance.

### WeaponLagEffectSpringData {#constructor-1}

> **WeaponLagEffectSpringData**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "constant" %}}

> **float**

### {{% prop-heading "damping" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [WeaponLagEffectSpringData](/vext/ref/fb/weaponlageffectspringdata) type.

