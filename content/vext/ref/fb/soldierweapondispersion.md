---
title: SoldierWeaponDispersion
---

## Summary

### Constructors

|  |
| --- |
| **[SoldierWeaponDispersion](#constructor-0)**() |
| **[SoldierWeaponDispersion](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "standDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "crouchDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "proneDispersion" >}} | [FiringDispersionData](/vext/ref/fb/firingdispersiondata) |
| {{< prop "jumpDispersionAngle" >}} | float |
| {{< prop "proneTransitionDispersionAngle" >}} | float |
| {{< prop "moveDispersionAngle" >}} | float |
| {{< prop "moveZoomedDispersionAngle" >}} | float |
| {{< prop "decreasePerSecond" >}} | float |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "SoldierWeaponDispersion" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### SoldierWeaponDispersion {#constructor-0}

> **SoldierWeaponDispersion**()

Creates a new [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) frostbite instance.

### SoldierWeaponDispersion {#constructor-1}

> **SoldierWeaponDispersion**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "standDispersion" %}}

> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "crouchDispersion" %}}

> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "proneDispersion" %}}

> **[FiringDispersionData](/vext/ref/fb/firingdispersiondata)**

### {{% prop-heading "jumpDispersionAngle" %}}

> **float**

### {{% prop-heading "proneTransitionDispersionAngle" %}}

> **float**

### {{% prop-heading "moveDispersionAngle" %}}

> **float**

### {{% prop-heading "moveZoomedDispersionAngle" %}}

> **float**

### {{% prop-heading "decreasePerSecond" %}}

> **float**

## Methods

### Clone {#clone}

> **Clone**(): [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [SoldierWeaponDispersion](/vext/ref/fb/soldierweapondispersion) type.

