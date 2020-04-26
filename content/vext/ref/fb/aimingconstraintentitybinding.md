---
title: AimingConstraintEntityBinding
---

## Summary

### Constructors

|  |
| --- |
| **[AimingConstraintEntityBinding](#constructor-0)**() |
| **[AimingConstraintEntityBinding](#constructor-1)**(guid: [Guid](/vext/ref/shared/type/guid)) |

### Properties

| Name | Type |
| ---- | ---- |
| {{< prop "proneAimLimit" >}} | [AntRef](/vext/ref/fb/antref) |
| {{< prop "proneAimDistance" >}} | [AntRef](/vext/ref/fb/antref) |

### Methods

| Method | Returns |
| ------ | ------- |
| **[Clone](#clone)**() | [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) |

### Static members

| Name | Type |
| ---- | ---- |
| {{< static "AimingConstraintEntityBinding" "typeInfo" >}} | [TypeInformation](/vext/ref/shared/type/typeinformation) |

## Constructors

### AimingConstraintEntityBinding {#constructor-0}

> **AimingConstraintEntityBinding**()

Creates a new [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) frostbite instance.

### AimingConstraintEntityBinding {#constructor-1}

> **AimingConstraintEntityBinding**(guid: [Guid](/vext/ref/shared/type/guid))

Creates a new [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) frostbite instance and assigns it the provided [Guid](/vext/ref/shared/type/guid).

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| **guid** | [Guid](/vext/ref/shared/type/guid) | The [Guid](/vext/ref/shared/type/guid) to assign to the newly created instance. |

## Properties

### {{% prop-heading "proneAimLimit" %}}

> **[AntRef](/vext/ref/fb/antref)**

### {{% prop-heading "proneAimDistance" %}}

> **[AntRef](/vext/ref/fb/antref)**

## Methods

### Clone {#clone}

> **Clone**(): [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding)

Creates a shallow-copy clone of this structure, which is essentially the equivalent of creating a new structure of the same type and assigning the values of this structure to all of its properties. Any properties that contain structure types (eg. [Vec3](/vext/ref/shared/type/vec3)) will be cloned when assigning, while properties that contain instance types (eg. [DataContainer](/vext/ref/shared/type/datacontainer)) will be referencing the same instance.

#### Returns

| Type | Description |
| ---- | ----------- |
| **[AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding)** | The newly created structure. |

## Static members

### {{% static-heading "typeInfo" %}}

> **[TypeInformation](/vext/ref/shared/type/typeinformation)**

The type information for the [AimingConstraintEntityBinding](/vext/ref/fb/aimingconstraintentitybinding) type.

